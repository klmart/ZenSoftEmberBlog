import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('user')
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
