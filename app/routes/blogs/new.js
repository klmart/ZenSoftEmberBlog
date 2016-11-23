import Authenticated from '../authenticated';

export default Authenticated.extend({

  actions: {

    saveBlog(newBlog) {
      newBlog.save().then((savedBlog) => {
        const userPromise = savedBlog.get('user');
        userPromise.then((user) => {
          user.get('blogs').pushObject(savedBlog);
          user.save().then(() => {
            this.transitionTo('blogs');
          });
        });
      });
    },

  }
});
