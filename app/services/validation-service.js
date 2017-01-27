import Ember from 'ember';

export default Ember.Service.extend({
  validationErrors: {},

  isEmpty(field, currentValue){
    const validParam = field.validations['isEmpty'];
    const error      = 'Can not be empty';

    if (currentValue.length) {
      delete this.get('validationErrors')['isEmpty'];
    } else {
      if (!validParam) {
        this.get('validationErrors')['isEmpty'] = error;
      }
    }
  },

  minLength(field, currentValue){
    const validParam = field.validations['minLength'];
    const error      = `min length: ${validParam}`;

    if (currentValue.length) {
      if (currentValue.length < validParam) {
        this.get('validationErrors')['minLength'] = error;
      } else {
        delete this.get('validationErrors')['minLength'];
      }
    } else {
      delete this.get('validationErrors')['minLength'];
    }

  },

  maxLength(field, currentValue){
    const validParam = field.validations['maxLength'];
    const error      = `max length: ${validParam}`;

    if (currentValue.length) {
      if (currentValue.length > validParam) {
        this.get('validationErrors')['maxLength'] = error;
      } else {
        delete this.get('validationErrors')['maxLength'];
      }
    }
  },

  emailMask(field, currentValue){
    const error      = 'Enter your email address!!!';
    const isValid = /^.+@.+\..+$/;
    if(!isValid.test(currentValue)){
      this.get('validationErrors')['emailMask'] = error;
    } else {
      delete this.get('validationErrors')['emailMask'];
    }
  },

  fillErrorsArray(field, errors){
    let errorsArray = [];
    Ember.set(field, 'errors', []);
    for (let key in errors) {
      errorsArray.push(errors[key]);
    }

    if (errorsArray.length) {
      Ember.set(field, 'errors', errorsArray);
    }
  },

  validate(field, currentValue){
    Ember.set(this, 'validationErrors', {});
    for (let key in field.validations) {
      this[key.toString()](field, currentValue);
    }
    this['fillErrorsArray'](field, this.get('validationErrors'));
  },

});
