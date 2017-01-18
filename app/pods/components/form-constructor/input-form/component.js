import BaseForm from '../base-form/component';

export default BaseForm.extend({

  getValue(){
    let obj                      = {};
    obj[this.get('field.value')] = this.get('name');
    return obj;
  }

});
