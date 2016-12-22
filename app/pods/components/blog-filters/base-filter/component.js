import Ember from 'ember';

export default Ember.Component.extend({
  filterService: Ember.inject.service(),
  store:         Ember.inject.service(),

  blogTypeSelectedValue: undefined,
  userBlogSelectedValue: undefined,

  filteredModel: Ember.computed('filterService.model',
    function () {
      return this.get('filterService.model');
    }
  ),

  init(){
    this._super(...arguments);
    this.sendAction('register', this)
  },

  actions: {
    chooseBlogType(blogType) {
      let selected = this.set('typeSelectedValue', blogType);
      this.set('blogTypeSelectedValue', selected);
    },

    chooseUserBlog(ignore, user) {
      let selected = this.set('userSelectedValue', user);
      this.set('userBlogSelectedValue', selected);
    },
  }

});
