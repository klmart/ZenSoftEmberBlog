import Ember from 'ember';

export default Ember.Component.extend({
  fields: undefined,
  modelArray: undefined,


  init(){
    this._super(...arguments);
    const modelFromRoute = this.get('item');
    this.set('modelArray', modelFromRoute);

    const fieldsArray = [];

    modelFromRoute.get('firstObject').eachAttribute((attr) => {
      let obj = {name: attr, status: true};
      fieldsArray.push(obj);
    });
    this.set('fields', fieldsArray);
  },

  actions: {
    chooseField(fieldName){
      const selected = this.set('field', fieldName);
      this.get('fields').forEach((field) => {
        if (field.name === fieldName.name) {
          // field.Ember.set(status, false);
          // field.status = true;
          Ember.set(field, 'status', false)
        }
      });
    },

    testAction(){
      this.get('fields').forEach((field) => {
        console.log('---------------');
        console.log(field.name);
        console.log(field.status);
      })
    }
  }
});
