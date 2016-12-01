import Ember from 'ember';
export default Ember.Controller.extend({

  //TODO: rename sortParam
  //Done
  queryParams: ['sortBy'],
  sortBy:      null,

  filteredBlogs: Ember.computed('sortBy', 'model', function () {

    //TODO: why var?
    //Done
    const userId = this.get('sortBy');
    const blogs  = this.get('model');

    if (userId) {
      return blogs.filterBy('user.id', userId);
    } else {
      return blogs;
    }
  }),

});
