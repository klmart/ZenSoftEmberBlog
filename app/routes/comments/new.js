import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('comment', {
      post: this.modelFor('posts.show')
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new comment');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('comments/form');
  },


  actions: {
    saveComment(newComment){
      newComment.save().then(() => {
        const post = newComment.get('post');
        post.get('comments').pushObject(newComment);
        console.log(post.get('comments').get('body'));
        post.save();
        this.transitionTo('comments')});
    }
  },

  willTransition(){
    this.controller.get('model').rollbackAttributes();
  }
});
