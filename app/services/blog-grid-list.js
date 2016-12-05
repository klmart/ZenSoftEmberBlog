import Ember from 'ember';

export default Ember.Service.extend({
  isList: false,

  setIsList(){
    this.toggleProperty('isList');
  }
});
