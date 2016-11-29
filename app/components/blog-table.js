import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  user:  undefined,

  init()
  {
    this._super(...arguments);

    //TODO: ???
    //done
    this.set('user', this.get('user'));
  },

  blogs: Ember.computed('user', function () {
    return this.get('store')
               .query('blog', {
                 user: this.get('user.id')
               });
  }),

});
