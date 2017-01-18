import BaseForm from '../base-form/component';

export default BaseForm.extend({

  // init(){
  //   this._super(...arguments);
  //   this.sendAction('register', this)
  // },

  getValue(){
    let obj = {};
    obj[this.get('field.value')] = this.get('name');
    return obj;
  }

});
