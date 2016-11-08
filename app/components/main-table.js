import Ember from 'ember';

export default Ember.Component.extend({

  modelArray: undefined,
  fields: undefined,

  init(){
    this._super(...arguments);
    const modelFromRoute = this.get('item');
    this.set('modelArray', modelFromRoute);

    const fieldsArray = [];

    modelFromRoute.get('firstObject').eachAttribute((attr) => {
      fieldsArray.push(attr);
    });
    this.set('fields', fieldsArray);
  }
});
