import Ember from 'ember';

export default Ember.Component.extend({
  store:         Ember.inject.service(),
  filterService: Ember.inject.service(),
  filteredBlogs: Ember.computed('filterService.model',
    function () {
      return this.get('filterService.model');
    }),

  init(){
    this._super(...arguments);
    // this.set('filteredBlogs', this.get('model'));
    this.get('filterService')
        .setModel(this.get('model'));
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
      this.get('filterService')
          .setModel(filBlogs);
    } else {
      this.get('filterService')
          .setModel(this.get('model'));
    }
  }),
});
