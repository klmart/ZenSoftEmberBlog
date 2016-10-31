import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),

  user: DS.belongsTo('user'),
  blog: DS.belongsTo('blog', { async: false }),
  comments: DS.hasMany('comment'),

  checkUser: Ember.computed(function () {
    if(this.get('loginService.currentUser.id') == this.get('user.id')){
      return true
    } else {
      return false
    }
  })

});
