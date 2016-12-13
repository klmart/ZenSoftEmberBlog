import Authenticated from '../../authenticated/route';

export default Authenticated.extend({
  model(params){
    const userPromise = this.store.findRecord('user', params.user_id);
    userPromise.then((user) => {
      if (!user.get('checkUser')) {
        this.transitionTo('users');
      }
    });
    return userPromise;
  },

  actions: {

    saveUser(newUser) {
      newUser.save({adapterOptions: {flashMessage: true}})
             .then(() => this.transitionTo('users.show', newUser.id));
    },

    willTransition(transition) {

      let model = this.controller.get('model');

      if (model.get('hasDirtyAttributes')) {
        let confirmation = confirm("Your changes haven't saved yet. Would you like to leave this form?");

        if (confirmation) {
          model.unloadRecord();
        } else {
          transition.abort();
        }
      }
    }
  }
});
