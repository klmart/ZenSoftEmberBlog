import BaseForm from '../base-form/component';

export default BaseForm.extend({

  getKeyValue(){
    let obj                      = {};
    obj[this.get('field.key')] = this.get('title');
    return obj;
  }

});
