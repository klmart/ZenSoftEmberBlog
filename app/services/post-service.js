import Ember from 'ember';

export default Ember.Service.extend({
  commentService: Ember.inject.service(),

  removeComments(post){
    post.get('comments')
        .then((comments) => {
          comments.forEach((comment) => {
            console.log('start remove comment');
            this.get('commentService')
                .removeComment(comment);
          });
        })
  },

  removePost(post){
    this.removeComments(post);
    const blog = post.get('blog');
    blog.get('posts')
        .removeObject(post);
    blog.save();

    post.destroyRecord();
  }

});
