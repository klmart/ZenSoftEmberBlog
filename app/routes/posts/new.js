import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('post', {
      blog: this.modelFor('blogs.show')
    });
  },

  actions: {

    savePost(newPost){
      newPost.save().then(() => {
        const blog = newPost.get('blog');
        blog.get('posts').pushObject(newPost);
        blog.save();
        this.transitionTo('posts');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
