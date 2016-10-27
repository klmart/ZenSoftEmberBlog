import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.modelFor('blogs.show').get('posts');
  },

  actions: {
    deletePost(post){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        post.destroyRecord();
      }
    }
  }

});
