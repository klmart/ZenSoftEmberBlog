import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  user: undefined,

  init()
  {
    this._super(...arguments);
    const userFromRoute = this.get('item');
    this.set('user', userFromRoute);
  },

  blogs: Ember.computed('user', function () {
    return this.get('store').query('blog', {
      user: this.get('user.id')
    });
  }),

});
