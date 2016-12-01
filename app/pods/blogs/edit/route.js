import Authenticated from '../../../routes/authenticated';
import Ember from 'ember';

export default Authenticated.extend({
  loginService: Ember.inject.service('login-service'),

  canEdit: 'canEditAllBlogs',

  hasPermission: Ember.computed('loginService.currentPermissions', function () {
    return this.get('loginService.currentPermissions')
               .find((permission) => {
                 return (permission.get('code') === this.get('canEdit'));
               });
  }),

  model(params) {
    const blogPromise = this.store.findRecord('blog', params.blog_id);

    if (this.get('hasPermission')) {
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

  actions: {

    saveBlog(newBlog)
    {
      newBlog.save()
             .then(() => this.transitionTo('blogs'));
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
