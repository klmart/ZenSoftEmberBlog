import Authenticated from '../../authenticated/route';

export default Authenticated.extend({
  model(){
    return this.store.createRecord('permission');
  },

  actions: {
    savePermission(newPermission){

      newPermission.save()
                   .then(() => {
                     this.transitionTo('permissions');
                   });
    },
    willTransition(){
      this.controller.get('model')
          .unloadRecord();
    }
  }
});
