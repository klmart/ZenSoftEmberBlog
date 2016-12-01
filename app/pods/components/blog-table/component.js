import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),

  blogs: Ember.computed(
    'user.id',
    function () {
      return this.get('store')
                 .query('blog', {
                   user: this.get('user.id')
                 });
    }
  ),

});
