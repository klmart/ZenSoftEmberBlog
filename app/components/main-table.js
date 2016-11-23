import Ember from 'ember';

export default Ember.Component.extend({
  fields: undefined,
  modelArray: undefined,

  init(){
    this._super(...arguments);

    //TODO: rename 'item'
    //Rename for what?
    const modelFromRoute = this.get('item');
    this.set('modelArray', modelFromRoute);

    const fieldsArray = [];

    //TODO: what will be if there is no objects in modelFromRoute?
    //Done

    if (modelFromRoute.get('firstObject')) {
      modelFromRoute.get('firstObject').eachAttribute((attr) => {

        //TODO: why let? rename 'status'
        //Done
        const obj = {name: attr, displayField: true};
        fieldsArray.push(obj);
      });
      this.set('fields', fieldsArray);
    }

  },

  actions: {
    chooseField(ignore, fieldsArray){
      //TODO: ???
      //Set selected field in power-select form
      const selected = this.set('field', fieldsArray);

      this.get('fields').forEach((field) => {
        Ember.set(field, 'displayField', true);
        selected.forEach((selectedField) => {

          //TODO: use .contains instead of ===
          //Done
          if (field.name.includes(selectedField.name)) {
            Ember.set(field, 'displayField', false);
          }
        });
      });
    },
  }
});
