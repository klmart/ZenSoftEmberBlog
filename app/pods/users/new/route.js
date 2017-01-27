import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user');
  },

  actions: {
    saveUser(userParams){
      userParams.save()
             .then(() => this.transitionTo('blogs'));
    },

    willTransition() {
      this.controller.get('model')
          .unloadRecord();
    }
  }

});
