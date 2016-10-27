import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('posts.show').reload();
  },

  actions: {
    deleteComment(comment){
      comment.destroyRecord();
    }
  }
});
