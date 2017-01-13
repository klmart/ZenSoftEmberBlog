import Ember from 'ember';

export default Ember.Component.extend({

  init(){
    this._super(...arguments);
    console.log(this.get('field'));
  }

});
