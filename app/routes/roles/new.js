import Authenticated from '../authenticated';

export default Authenticated.extend({
  actions: {
    saveRole(newRole){
      newRole.save().then(() => {this.transitionTo('roles');
      });
    }
  }
});
