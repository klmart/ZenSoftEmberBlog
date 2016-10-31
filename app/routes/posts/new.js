import Authenticated from '../authenticated';

export default Authenticated.extend({

  beforeModel(transition){
    this._super(...arguments);
    const blog = this.modelFor('blogs.show');

    if (blog.get('user.id')== this.get('loginService.currentUser.id')) {
      return true
    } else {
      transition.abort()
    }
  },

  model() {
    return this.store.createRecord('post', {
      blog: this.modelFor('blogs.show'),
      user: this.get('loginService.currentUser')
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

        blog.save().then(() => {
          this.transitionTo('posts');
        });
      });
    },

    willTransition() {
      this.controller.get('model').rollbackAttributes();
    }
  }
});
