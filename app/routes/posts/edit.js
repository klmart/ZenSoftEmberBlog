import Authenticated from '../authenticated';


export default Authenticated.extend({

  model(params) {
  const postPromise = this.store.findRecord('post', params.post_id);

    postPromise.then((post) => {
      if(!post.get('checkUser')){
        this.transitionTo('posts');
      }
    });
    return postPromise;
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit post');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('posts/form');
  },

  actions: {

    savePost(newPost) {
      newPost.save().then(() => this.transitionTo('posts'));
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
