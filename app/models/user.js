import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  password: DS.attr('string'),

  blog: DS.belongsTo('blog', {async: false}),
  post: DS.belongsTo('post', {async: false}),
  comment: DS.belongsTo('comment', {async: false})

});
