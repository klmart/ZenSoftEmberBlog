import Authenticated from '../authenticated';


export default Authenticated.extend({

  model(params) {
    const blogPromise = this.store.findRecord('blog', params.blog_id);
    blogPromise.then((blog) => {
      if (!blog.get('checkUser')) {
        this.transitionTo('blogs');
      }
    });
    return blogPromise;
  },


  //TODO: to components
  //Moved to component

  actions: {

    saveBlog(newBlog) {
      newBlog.save().then(() => this.transitionTo('blogs'));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
