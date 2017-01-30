import Ember from 'ember';

export default Ember.Component.extend({
  validService: Ember.inject.service('validation-service'),

  keyValue:     undefined,
  currentValue: '',

  isValid: Ember.computed('field.errors.firstObject', function () {
    return this.get('field.errors.firstObject');
  }),

  isEmail: Ember.computed.match('currentValue', /^.+@.+\..+$/),

  init(){
    this._super(...arguments);
    this.sendAction('register', this);
    if (this.get('item')) {
      if (this.get('item')
              .get(this.get('field.key'))) {
        console.log(2);
        this.set('currentValue', this.get('item')
                                     .get(this.get('field.key')));
      }
    }
    delete this.get('field')['errors'];
  },

  checkValidations(){
    this.get('validService')
        .validate(this.get('field'), this.get('currentValue'));
  },

  willDestroyElement()
  {
    this.sendAction('unregister', this);
  },

  getKeyValue(){
    return this.get('keyValue');
  },

  actions: {
    createObject(ignore, currentValue)
    {
      this.set('currentValue', currentValue);
      let fieldParams                    = {};
      fieldParams[this.get('field.key')] = currentValue;
      this.set('keyValue', fieldParams);

      this.get('validService')
          .validate(this.get('field'), currentValue);
    },

  }
});



