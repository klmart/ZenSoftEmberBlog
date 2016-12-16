import Ember from 'ember';

export default Ember.Service.extend({
  model: undefined,
  // unfilteredModel: undefined,

  setModel(model){
    this.set('model', model);
  },
  // setUnfilteredModel(model){
  //   this.set('unfilteredModel', model);
  // }
});
