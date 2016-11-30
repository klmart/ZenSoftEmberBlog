import Ember from 'ember';

export default Ember.Service.extend({

  removeComment(comment){
    const post = comment.get('post');
    post.get('comments')
        .then((comments) => {
          comments.removeObject(comment);
        });
    post.save();
    comment.destroyRecord();
  },

});
