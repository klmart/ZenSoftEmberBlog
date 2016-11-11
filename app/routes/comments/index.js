import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('posts.show').reload();
  },

  // actions: {
  //   deleteComment(comment){
  //     comment.destroyRecord();
  //   }
  // }

  actions: {
    deleteComment(comment){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        const post = comment.get('post');
        post.get('comments').removeObject(comment);
        post.save();
        comment.destroyRecord();
      }
    }
  }
});
