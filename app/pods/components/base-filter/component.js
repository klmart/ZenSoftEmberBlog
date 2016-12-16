import Ember from 'ember';

export default Ember.Component.extend({
  blogTypeSelectedValue: undefined,
  userBlogSelectedValue: undefined,

  init(){
    this._super(...arguments);
    this.sendAction('register', this)
  },
  actions: {
    chooseBlogType(ignore, blogType) {
      const selected = this.set('selectedValue', blogType);
      this.set('blogTypeSelectedValue', selected);
    },
    chooseUserBlog(ignore, user) {
      const selected = this.set('selectedValue', user);
      this.set('userBlogSelectedValue', selected);
    },

  }
});
