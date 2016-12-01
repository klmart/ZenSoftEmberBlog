import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.modelFor('posts.show')
               .reload();
  },

  actions: {
    deleteComment(comment){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.commentService.removeComment(comment);
      }
    }
  }
});
