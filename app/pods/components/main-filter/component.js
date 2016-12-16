import Ember from 'ember';

export default Ember.Component.extend({
  filterService:         Ember.inject.service(),
  registeredFilters:     [],
  blogTypeSelectedValue: undefined,

  init(){
    this._super(...arguments);
    this.get('filterService')
        .setModel(this.get('model'));
  },

  actions: {
    searchModel(){
      this.get('filterService').setModel(this.get('model'));
      this.get('registeredFilters')
          .forEach((filter) => {
            filter.run();
          })
    },

    chooseBlogType(ignore, blogType) {
      const selected = this.set('blogType', blogType);
      this.set('blogTypeSelectedValue', selected);
    },

    registerFilter(filter){
      this.get('registeredFilters')
          .pushObject(filter);
    },
  }
});
