import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  blog: undefined,

  blogTypes: Ember.computed(function () {
    return this.get('store').findAll('blog-type');
  }),

  // init() {}, willInsertElement() {}, action-save();

  init(){
    this._super(...arguments);

    const blogFromRoute = this.get('item') || this.get('store').createRecord('blog', {
        user: this.get('loginService.currentUser')
      });
    this.set('blog', blogFromRoute)
  },

  actions: {

    buttonClicked(blogParams) {
      const user = this.get('loginService.currentUser');
      this.sendAction('action', blogParams);
    }

  }
});
