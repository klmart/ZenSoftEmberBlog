import Ember from 'ember';
import BaseFilter from '../base-filter/component';
export default BaseFilter.extend({

  store:         Ember.inject.service(),
  filterService: Ember.inject.service(),

  blogTypes: Ember.computed(function () {
    return this.get('store')
               .findAll('blog-type');
  }),

  filteredModel: Ember.computed('filterService.model',
    function () {
      return this.get('filterService.model');
    }),

  run() {
    const blogType = this.get('blogTypeSelectedValue');
    if (blogType) {

      let filteredBlogs = this.get('filteredModel')
                              .filter((blog) => {
                                return blog.get('blogType.id') === blogType.id;
                              });
      this.get('filterService')
          .setModel(filteredBlogs);
    }
  }
});
