import Ember from 'ember';
import FormTypes from '../../../../consts/formTypes';

export default Ember.Component.extend({
  item:            {},
  registeredForms: [],
  formParams:      undefined,

  init(){
    this._super(...arguments);
    this.set('formParams', FormTypes[`${this.get('formType')}`]);
  },

  actions: {
    registerForm(form){
      this.get('registeredForms')
          .pushObject(form);
    },

    unregisterForm(form){
      this.get('registeredForms')
          .removeObject(form);
    },

    save(){
      const errors = [];
      this.get('registeredForms')
          .forEach((form) => {

            form.checkValidations();

            if (form.get('isValid')) {
              errors.push(form.get('isValid'));
            }
            let formHash = form.getKeyValue();
            for (let key in formHash) {
              this.get('item')[key] = formHash[key];
            }
          });

      if (!errors.length) {
        this.sendAction('action', this.get('item'));
      }
    }
  }

});
