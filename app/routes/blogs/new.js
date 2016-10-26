import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('blog',{
    user: this.get('loginService.currentUser')
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new blog');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('blogs/form');
  },

  actions: {

    saveBlog(newBlog) {

      newBlog.save().then(() => {
        this.transitionTo('blogs')
      });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
