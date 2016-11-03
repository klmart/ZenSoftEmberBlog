import Authenticated from '../authenticated';

export default Authenticated.extend({

  model() {

    const blog = this.modelFor('blogs.show');

    if (!blog.get('checkUser')) {
      this.transitionTo('posts');
    } else {
      return this.store.createRecord('post', {
        blog: this.modelFor('blogs.show'),
        user: this.get('loginService.currentUser')
      });
    }
  },

  //TODO: same
  //Moved to component

  actions: {

    savePost(newPost){
      newPost.save().then((savedPost) => {
        const blog = savedPost.get('blog');
        blog.get('posts').pushObject(savedPost);

        blog.save().then(() => {
          this.transitionTo('posts');
        });
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }
  }
});
