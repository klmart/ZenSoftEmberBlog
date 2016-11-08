import Authenticated from '../authenticated';


export default Authenticated.extend({
  model() {
    return this.store.findAll('blog');
  },
  resetController(controller, isExiting, transition) {
    if (isExiting) {
      console.log('exiting');
      // isExiting would be false if only the route's model was changing
      controller.set('queryParams', null);
    }
  },
    actions: {
      deleteBlog(blog)
      {

        let confirmation = confirm('Are you sure?');
        if (confirmation) {
          blog.destroyRecord();
        }
      }
    }
  });
