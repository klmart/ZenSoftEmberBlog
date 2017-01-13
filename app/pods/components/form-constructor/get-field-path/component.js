import Ember from 'ember';

export default Ember.Component.extend({
  componentName: Ember.computed(function () {
    return `form-constructor/${this.get('field')['type']}`;
  }),

});
