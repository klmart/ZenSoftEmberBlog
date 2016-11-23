import Authenticated from '../authenticated';

export default Authenticated.extend({
  model(){
    return this.store.findAll('permission');
  },

  actions: {
    deletePermission(permission){
      let confirmation = confirm('Are you sure?');
      if (confirmation) {
        permission.destroyRecord();
      }
    }
  }
});
