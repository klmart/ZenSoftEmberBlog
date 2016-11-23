import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show'),
      user: this.get('loginService.currentUser')
    });
  },

  actions: {
    saveComment(newComment){
      newComment.save().then((savedComment) => {
        const post = savedComment.get('post');
        post.get('comments').pushObject(savedComment);

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
