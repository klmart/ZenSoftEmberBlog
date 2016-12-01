import Authenticated from '../../../routes/authenticated';

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('permission', params.permission_id);
  },

  actions: {
    savePermission(permission){
      permission.save()
                .then(() => {
                  this.transitionTo('permissions');
                });
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.rollbackAttributes();
        } else {
          transition.abort();
        }
      }
    }
  }
});
