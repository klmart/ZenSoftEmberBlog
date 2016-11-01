import Authenticated from '../authenticated';

export default Authenticated.extend({

  model(params) {
    const commentPromise = this.store.findRecord('comment', params.comment_id);
    commentPromise.then((comment) => {
      if (!comment.get('checkUser')) {
        this.transitionTo('comments');
      }
    });
    return commentPromise;
  },

  //TODO: same
  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit post');
    controller.set('buttonLabel', 'Save changes');
  },

  //TODO: same
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
