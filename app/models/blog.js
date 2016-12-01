import DS from 'ember-data';
import Ember from 'ember';
import moment from 'moment';

export default DS.Model.extend({

  name:        DS.attr('string'),
  description: DS.attr('string'),
  image:       DS.attr('string', {defaultValue: '/images/default.png'}),

  createdDate: DS.attr('date', {
    defaultValue() {
      return new Date();
    }
  }),

  createdMoment: Ember.computed(
    'createdDate',
    function () {
      return moment(this.get('createdDate'))
        .format('YYYY-MM-DD');
    }
  ),

  blogType: DS.belongsTo('blog-type'),

  posts: DS.hasMany('post'),

  user: DS.belongsTo('user'),

  postsCount: Ember.computed.alias('posts.length'),

  isValid: Ember.computed.notEmpty('name'),

  checkUser: Ember.computed(function () {
    return this.get('user.id') === this.get('loginService.currentUser.id');
  }),

  blogCheckBox: Ember.observer(
    'isChecked',
    function () {
    }
  )

});
