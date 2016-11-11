import Authenticated from '../authenticated';


export default Authenticated.extend({
  model() {
    return this.store.findAll('blog');
  },

  resetController(controller, isExiting, transition) {
    if (transition) {
      controller.set('sortParam', null);
    }
  },

  actions: {
    deleteBlog(blog)
    {
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        const promiseUser = blog.get('user');
        promiseUser.then((user) => {
          user.get('blogs').removeObject(blog);
          user.save();
          blog.destroyRecord();
        });
      }
    }
  }
});
