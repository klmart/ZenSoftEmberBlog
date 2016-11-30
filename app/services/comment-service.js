import Ember from 'ember';

export default Ember.Service.extend({

  removeComment(comment){
    let confirmation = confirm('Are you sure?');
    if (confirmation) {
      const post = comment.get('post');
      post.get('comments')
          .removeObject(comment);
      post.save();
      comment.destroyRecord();
    }
  }

});
