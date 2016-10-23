import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('blog');
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
      newBlog.save().then(() => this.transitionTo('blogs'));
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
