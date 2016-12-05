import Ember from 'ember';

export default Ember.Service.extend({
  isList: false,

  setIsList(){
    //ToDo: toggle
    if (this.isList) {
      this.set('isList', false);
    } else {
      this.set('isList', true);
    }
  }
});
