import Ember from 'ember';

export default Ember.Component.extend({
  fields: undefined,
  modelArray: undefined,

  init(){
    this._super(...arguments);

    //TODO: rename 'item'
    const modelFromRoute = this.get('item');
    this.set('modelArray', modelFromRoute);

    const fieldsArray = [];

    //TODO: what will be if there is no objects in modelFromRoute?
    modelFromRoute.get('firstObject').eachAttribute((attr) => {

      //TODO: why let? rename 'status'
      let obj = {name: attr, status: true};
      fieldsArray.push(obj);
    });
    this.set('fields', fieldsArray);
  },

  actions: {
    chooseField(ignore, fieldsArray){

      //TODO: ???
      const selected = this.set('field', fieldsArray);

      this.get('fields').forEach((field) => {
        Ember.set(field, 'status', true);
        selected.forEach((selectedField) => {

          //TODO: use .contains instead of ===
          if (field.name === selectedField.name) {
            Ember.set(field, 'status', false);
          }
        });
      });
    },
  }
});
