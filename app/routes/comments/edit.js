import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.store.findRecord('comment', params.comment_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit post');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('comments/form');
  },

  actions: {

    saveComment(newComment) {
      newComment.save().then(() => this.transitionTo('comments'));
    },

    willTransition(transition) {

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
