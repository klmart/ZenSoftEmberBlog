import Authenticated from '../authenticated';
import Ember from 'ember';


export default Authenticated.extend({
  loginService: Ember.inject.service('login-service'),

  permissions: Ember.computed(function () {
    return this.get('loginService.currentPermissions');
  }),

  canEdit: 'canEditAllBlogs',

  hasPermission: Ember.computed('permissions', function () {
    return this.get('permissions').filter((permission) => {
      return (permission.get('code') === this.get('canEdit'));
    });
  }),

  model(params) {
    const blogPromise = this.store.findRecord('blog', params.blog_id);
    const permission = this.get('hasPermission').get('firstObject');

    if (permission) {
      return blogPromise;
    } else {
      blogPromise.then((blog) => {
        if (!blog.get('checkUser')) {
          this.transitionTo('blogs');
        }
      });
      return blogPromise;
    }
  },

  //TODO: to components
  //Moved to component

  actions: {

    saveBlog(newBlog)
    {
      newBlog.save().then(() => this.transitionTo('blogs'));
    },

    willTransition(transition)
    {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
