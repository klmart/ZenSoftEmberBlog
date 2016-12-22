import Ember from 'ember';
import BaseFilter from '../base-filter/component';
export default BaseFilter.extend({

  blogTypes: Ember.computed(function () {
    return this.get('store')
               .findAll('blog-type');
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
