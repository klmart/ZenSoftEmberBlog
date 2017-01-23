import Ember from 'ember';
import FormTypes from '../../../../consts/formTypes';

export default Ember.Component.extend({
  item:   {},
  registeredForms: [],
  formParams:undefined,

  init(){
    this._super(...arguments);
    this.set('formParams', FormTypes[`${this.get('formType')}`]);
    console.log(this.get('formParams'));
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
