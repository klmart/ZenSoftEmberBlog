import Authenticated from '../authenticated';

export default Authenticated.extend({

  // TODO: to components
  //Moved to component

  actions: {
    saveBlog(newBlog ) {
      newBlog.save().then(() => {
        this.transitionTo('blogs');
      });
    },

    willTransition() {
      // this.controller.get('model').unloadRecord();
    }
  }
});
