import Authenticated from '../authenticated';

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('role', params.role_id);
  },

  actions: {
    saveRole(saveBlog){
      saveBlog.save()
              .then(() => {
                this.transitionTo('roles');
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
