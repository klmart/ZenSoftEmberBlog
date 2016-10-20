import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('blog');
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
