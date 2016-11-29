import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.modelFor('blogs.show')
               .reload();
  },

  actions: {
    deletePost(post){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        const blog = post.get('blog');

        //TODO: same as Abai. Use save().then and delete comments
        //remove with service
        blog.get('posts')
            .removeObject(post);
        blog.save();
        post.destroyRecord();
      }
    }
  }

});
