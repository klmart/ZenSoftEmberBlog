import Ember from 'ember';
import FormTypes from '../../../../consts/formTypes';

import GetPath from '../get-field-path/component';

export default GetPath.extend({
  item: {},

  init(){
    this._super(...arguments);
    this.set('fields', FormTypes[`${this.get('formType')}`]['fields']);
  },

  actions: {
    save(){
      this.get('registeredForms')
          .forEach((form) => {
            let formHash = form.getValue();
            for (let key in formHash) {
              this.get('item')[key] = formHash[key];
            }
          });
      this.sendAction('action', this.get('item'));
    }
  }

});
