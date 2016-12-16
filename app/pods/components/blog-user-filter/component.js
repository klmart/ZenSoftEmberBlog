import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({
  store:         Ember.inject.service(),
  filterService: Ember.inject.service(),

  users: Ember.computed(function () {
    return this.get('store')
               .findAll('user');
  }),

  filteredModel: Ember.computed('filterService.model',
    function () {
      return this.get('filterService.model');
    }),

  run() {
    const user = this.get('userBlogSelectedValue');
    if (user) {
      let filteredBlogs = this.get('filteredModel')
                              .filter((blog) => {
                                return blog.get('user.id') === user.get('id');
                              });
      this.get('filterService')
          .setModel(filteredBlogs);
    }
  }

});
