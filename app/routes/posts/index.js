import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.modelFor('blogs.show')
               .reload();
  },

  actions: {
    //TODO: same as Abai. Use save().then and delete comments

    deletePost(post){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        this.postService.removePost(post);
      }
    }
  }

});
