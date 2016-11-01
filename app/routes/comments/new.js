import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show'),
      user: this.get('loginService.currentUser')
    });
  },

  //TODO: same
  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new comment');
    controller.set('buttonLabel', 'Create');
  },

  //TODO: same
  renderTemplate() {
    this.render('comments/form');
  },


  actions: {
    saveComment(newComment){
      newComment.save().then(() => {
        const post = newComment.get('post');
        post.get('comments').pushObject(newComment);

        post.save().then(() => {
          this.transitionTo('comments');
        });
      });
    },

    willTransition(){
      this.controller.get('model').unloadRecord();
    }
  }
});
