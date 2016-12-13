import Ember from 'ember';

export default Ember.Service.extend({
  model: undefined,

  setModel(model){
    console.log('ssetBlogs');
    this.set('model', model);
  }
});
