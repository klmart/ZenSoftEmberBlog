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

    if (modelFromRoute.get('firstObject')) {
      modelFromRoute.get('firstObject').eachAttribute((attr) => {
        const obj = {name: attr, displayField: true};
        fieldsArray.push(obj);
      });
      this.set('fields', fieldsArray);
    }

  },

  actions: {
    chooseField(ignore, fieldsArray){
      const selected = this.set('field', fieldsArray);

      this.get('fields').forEach((field) => {
        Ember.set(field, 'displayField', true);
        selected.forEach((selectedField) => {
          if (field.name.includes(selectedField.name)) {
            Ember.set(field, 'displayField', false);
          }
        });
      });
    },
  }
});
