import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.modelFor('blogs.show')
               .reload();
  },

  actions: {
    deletePost(post){
      this.postService.removePost(post);
      //TODO: same as Abai. Use save().then and delete comments

    }
  }

});
