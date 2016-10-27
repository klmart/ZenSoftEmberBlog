import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  content: DS.attr('string'),

  user: DS.belongsTo('user'),
  blog: DS.belongsTo('blog', { async: false }),
  comments: DS.hasMany('comment'),

});
