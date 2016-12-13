import Ember from 'ember';

export default Ember.Service.extend({
  commentService: Ember.inject.service(),
  userService:    Ember.inject.service(),

  removeComments(post){
    return post.get('comments')
               .then((comments) => {
                 comments.forEach((comment) => {
                   this.get('commentService')
                       .removeComment(comment);
                 });
               });
  },

  removePost(post){
    this.removeComments(post)
        .then(() => {
          this.get('userService')
              .removeFromUser(post)
              .then(() => {
                const blog = post.get('blog');
                blog.get('posts')
                    .then((posts) => {
                      posts.removeObject(post);
                    });
                blog.save()
                    .then(() => {
                      return post.destroyRecord({ adapterOptions: { flashMessage: true } });
                    });
              });
        });
  }

});
