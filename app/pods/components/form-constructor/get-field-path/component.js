import Ember from 'ember';

export default Ember.Component.extend({

  init(){
    this._super(...arguments);
  },


  componentName: Ember.computed(function () {
    return `form-constructor/${this.get('field')['type']}`;
  }),

  actions: {
    registerForm(form){
      this.sendAction('register', form);
    }
  }

});
