import Authenticated from '../../authenticated/route';

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
