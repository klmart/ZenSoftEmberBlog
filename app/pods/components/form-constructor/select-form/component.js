import Ember from 'ember';
import BaseForm from '../base-form/component';

export default BaseForm.extend({
  store:  Ember.inject.service(),
  obj:    {},
  option: undefined,

  modelTitle: Ember.computed(function () {
    return this.get('field'.modelTitle);
  }),

  selectList: Ember.computed(function () {
    return this.get('store')
               .findAll(this.get('field.model'));
  }),

  actions: {
    chooseType(obj, ignore, option){
      if (option) {
        this.set('currentValue', 'true');
        this.set('option', option);
        obj[this.get('field.key')] = option;
        this.set('keyValue', obj);
      }
    }
  },

});
