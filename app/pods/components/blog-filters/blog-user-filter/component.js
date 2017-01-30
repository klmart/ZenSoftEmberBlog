import Ember from 'ember';
import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({

  users: Ember.computed(function () {
    return this.get('store')
               .findAll('user');
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
