import Authenticated from '../../authenticated/route';

export default Authenticated.extend({
  model(){
    return this.store.findAll('user');
  },

  actions: {
    deleteBlog(blog){

      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        blog.destroyRecord();
      }
    }
  }

});
