import Ember from 'ember';

export default Ember.Service.extend({
  postService: Ember.inject.service(),

  removePosts(blog){
    blog.get('posts').then((posts) => {
      posts.forEach((post) => {
        this.get('postService').removePost(post);
      })
    })
  },

  removeBlog(blog){
    this.removePosts(blog);
    const promiseUser = blog.get('user');
    promiseUser.then((user) => {
      user.get('blogs')
          .then((blogs) => {
            blogs.removeObject(blog);
          });
        user.save();
      blog.destroyRecord();
    });
  }
});
