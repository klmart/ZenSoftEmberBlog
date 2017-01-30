import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('user');
  },

  actions: {
    saveUser(userParams){
      console.log(this.controller.get('model'));

      const model = this.controller.get('model');
      model.set('email', userParams.email);
      model.set('password', userParams.password);
      model.set('firstName', userParams.firstName);
      model.set('lastName', userParams.lastName);

      model.save()
             .then(() => this.transitionTo('blogs'));
    },

    willTransition() {
      this.controller.get('model')
          .unloadRecord();
    }
  }

});
