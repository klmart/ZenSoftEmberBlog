import Authenticated from '../../../routes/authenticated';

export default Authenticated.extend({
  actions: {
    saveRole(newRole){
      newRole.save()
             .then(() => {
               this.transitionTo('roles');
             });
    }
  }
});
