import Ember from 'ember';

export default Ember.Service.extend({
  commentService: Ember.inject.service(),

  removeComments(post){
    post.get('comments')
        .then((comments) => {
          comments.forEach((comment) => {
            this.get('commentService')
                .removeComment(comment);
          });
        })
  },

  removePost(post){
    this.removeComments(post);
    const user = post.get('user');
    user.get('posts')
        .then((posts) => {
          posts.removeObject(post);
        });
    user.then((user) => {
      user.save();
    });

    const blog = post.get('blog');
    blog.get('posts')
        .then((posts) => {
          posts.removeObject(post);
        });
    blog.save();
    post.destroyRecord();

  }

});
