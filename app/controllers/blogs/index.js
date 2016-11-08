export default Ember.Controller.extend({
  queryParams: ['sortParam'],
  sortParam: null,
  refreshModel: true,


  filteredBlogs: Ember.computed('sortParam', 'model', function () {
    var sortParam = this.get('sortParam');
    var blogs = this.get('model');

    if (sortParam) {
      console.log('-------sortParams-----');
      console.log(this.get('queryParams'));

      return blogs.filterBy('user.id', sortParam);
    } else {
      console.log('-------False check---------');
      console.log(this.get('queryParams'));
      return blogs;
    }
  }),

});
