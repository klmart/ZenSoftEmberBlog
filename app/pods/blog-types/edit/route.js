import Authenticated from "../../authenticated/route";

export default Authenticated.extend({
  model(params){
    return this.store.findRecord('blog-type', params.type_id);
  },

  actions: {
    saveBlogType(newBlogType){
      newBlogType.save({adapterOptions: {flashMessage: true}})
                 .then(() => {
                   this.transitionTo('blog-types');
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
