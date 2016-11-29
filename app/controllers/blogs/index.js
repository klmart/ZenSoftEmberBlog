import Ember from 'ember';
export default Ember.Controller.extend({

  //TODO: rename sortParam
  queryParams: ['sortParam'],
  sortParam: null,

  filteredBlogs: Ember.computed('sortParam', 'model', function () {

    //TODO: why var?
    var sortParam = this.get('sortParam');
    var blogs = this.get('model');


    if (sortParam) {
      return blogs.filterBy('user.id', sortParam);
    } else {
      return blogs;
    }
  }),

});
