import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('posts.show').get('comments');
  },

  actions: {
    deleteComment(comment){
      comment.destroyRecord();
    }
  }
});
