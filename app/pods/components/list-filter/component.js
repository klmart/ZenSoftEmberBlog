import Ember from 'ember';

export default Ember.Component.extend({
  store:         Ember.inject.service(),
  filteredBlogs: undefined,
  blogs:         undefined,

  init(){
    this._super(...arguments);
    this.set('filteredBlogs', this.get('model'));
  },

  filterObserver: Ember.observer('searchParam', function () {
    const filterParam = this.get('searchParam')
                            .toUpperCase();

    if (filterParam) {
      let filBlogs = this.get('filteredBlogs')
                         .filter((blog) => {
                           const blogName          = blog.get('name')
                                                         .toUpperCase();
                           const blogDescription   = blog.get('description');
                           const findByName        = blogName.includes(filterParam);
                           const findByDescription = blogDescription && blogDescription.toUpperCase()
                                                                                       .includes(filterParam);
                           return findByName || findByDescription;
                         });

      this.set('filteredBlogs', filBlogs);
    } else {
      this.set('filteredBlogs', this.get('model'));
    }
  }),
});
