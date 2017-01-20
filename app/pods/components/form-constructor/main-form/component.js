import Ember from 'ember';
import FormTypes from '../../../../consts/formTypes';

export default Ember.Component.extend({
  item:   {},
  fields: undefined,
  registeredForms: [],

  init(){
    this._super(...arguments);
    this.set('fields', FormTypes[`${this.get('formType')}`]['fields']);
  },

  actions: {
    registerForm(form){
      this.get('registeredForms')
          .pushObject(form);
    },

    save(){
      this.get('registeredForms')
          .forEach((form) => {
            let formHash = form.getKeyValue();
            for (let key in formHash) {
              this.get('item')[key] = formHash[key];
            }
          });
      this.sendAction('action', this.get('item'));
    }
  }

});
