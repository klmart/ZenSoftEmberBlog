import Authenticated from '../authenticated';

export default Authenticated.extend({

  model() {
    return this.store.createRecord('blog',{
    user: this.get('loginService.currentUser')
    });
  },

  // TODO: to components
  //Moved to component

  actions: {

    saveBlog(newBlog) {

      newBlog.save().then(() => {
        this.transitionTo('blogs');
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }
  }
});
