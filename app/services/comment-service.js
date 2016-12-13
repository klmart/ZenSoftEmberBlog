import Ember from 'ember';

export default Ember.Service.extend({
  userService: Ember.inject.service(),

  removeComment(comment){
    this.get('userService')
        .removeFromUser(comment)
        .then(() => {
          const post = comment.get('post');
          post.get('comments')
              .then((comments) => {
                comments.removeObject(comment);
              });
          post.save()
              .then(() => {
                return comment.destroyRecord({ adapterOptions: { flashMessage: true } });
              });
        });
  }
});
