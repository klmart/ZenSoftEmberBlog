import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('post', {
      blog: this.modelFor('blogs.show')
    });
  },

  setupController: function (controller, model) {
    this._super(controller, model);

    controller.set('title', 'Create a new post');
    controller.set('buttonLabel', 'Create');
  },

  renderTemplate() {
    this.render('posts/form');
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
