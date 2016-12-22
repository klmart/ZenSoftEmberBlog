import Ember from 'ember';
import BaseFilter from '../base-filter/component';

export default BaseFilter.extend({

  run() {
    let searchParam = this.get('searchParam');
    if (searchParam) {
      let filterParam   = searchParam
        .toUpperCase();
      let filteredBlogs = this.get('filteredModel')
                              .filter((blog) => {
                                const blogName          = blog.get('name')
                                                              .toUpperCase();
                                const blogDescription   = blog.get('description');
                                const findByName        = blogName.includes(filterParam);
                                const findByDescription = blogDescription && blogDescription.toUpperCase()
                                                                                            .includes(filterParam);
                                return findByName || findByDescription;
                              });
      this.get('filterService')
          .setModel(filteredBlogs);
    } else {
      this.get('filterService')
          .setModel(this.get('filterService.model'));
    }
  }
});
