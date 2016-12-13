import Ember from 'ember';

export default Ember.Service.extend({
  postService: Ember.inject.service(),
  userService: Ember.inject.service(),

  removePosts(blog){
    return blog.get('posts')
               .then((posts) => {
                 posts.forEach((post) => {
                   this.get('postService')
                       .removePost(post);
                 });
               });
  },

  removeBlog(blog){
    this.removePosts(blog)
        .then(() => {
          this.get('userService')
              .removeFromUser(blog)
              .then(() => {
                blog.destroyRecord({adapterOptions: {flashMessage: true}});
              });
        });
  }

});
