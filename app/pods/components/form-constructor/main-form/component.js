import Ember from 'ember';
import FormTypes from '../../../../consts/formTypes';

export default Ember.Component.extend({
  fields: undefined,

  init(){
    this._super(...arguments);
     this.set('fields', FormTypes[`${this.get('formType')}`]['fields']);

    // FormTypes[`${this.get('formType')}`]['fields'].forEach((field) => {
    //   const path = `form-constructor/${field['type']}`;
    //   this.get('fields').push(path);
    // });

  },

  // getForm: Ember.computed('fields.length',
  //   function () {
  //     this.get('fields').forEach(function (field) {
  //       const path = `form-constructor/${field['type']}`;
  //       this.set('pathString', path);
  //     });
  //   })
});
