import Ember from 'ember';

export default Ember.Component.extend({
  init(){
    this._super(...arguments);
    this.sendAction('register', this)
  },
  actions: {
    chooseBlogType(ignore, blogType) {
      const selected = this.set('selectedValue', blogType);
      this.set('blogTypeSelectedValue', selected);
    },
  }
});
