import Ember from 'ember';

export default Ember.Service.extend({
  removePost(post){
    let confirmation = confirm('Are you sure?');
    if (confirmation) {
      const blog = post.get('blog');

      blog.get('posts')
          .removeObject(post);
      blog.save();
      post.destroyRecord();
    }
  }
});
