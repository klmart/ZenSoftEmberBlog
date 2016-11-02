import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('blog-type');
  },

  actions: {
    deleteBlogType(blogType){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        blogType.destroyRecord();
      }
    }
  }
});
