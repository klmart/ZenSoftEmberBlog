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
    chooseField(ignore, fieldsArray){
      const selected = this.set('field', fieldsArray);

      this.get('fields').forEach((field) => {
        Ember.set(field, 'status', true);
        selected.forEach((selectedField) => {
          if (field.name === selectedField.name) {
            Ember.set(field, 'status', false);
          }
        });
      });
    },
  }
});
