import Ember from 'ember';

export default Ember.Component.extend({
  registeredForms: [],

  componentName: Ember.computed(function () {
    return `form-constructor/${this.get('field')['type']}`;
  }),

  actions: {
    registerForm(form){
      console.log('main-form');
      this.get('registeredForms')
          .pushObject(form);
    },
  }

});
