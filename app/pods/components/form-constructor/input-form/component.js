import BaseForm from '../base-form/component';import Ember from 'ember';


export default BaseForm.extend({

  getKeyValue(){
    let obj                      = {};
    obj[this.get('field.key')] = this.get('title');
    return obj;
  },

  actions: {

    check() {
      console.log(1);
      console.log(this.get('title'));
    }

  }

});
