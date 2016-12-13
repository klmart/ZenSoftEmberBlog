import Authenticated from '../../authenticated/route';

export default Authenticated.extend({

  model(params) {
    const postPromise = this.store.findRecord('post', params.post_id);

    postPromise.then((post) => {
      if (!post.get('checkUser')) {
        this.transitionTo('posts');
      }
    });
    return postPromise;
  },

  actions: {

    savePost(newPost) {
      newPost.save({adapterOptions: {flashMessage: true}})
             .then(() => this.transitionTo('posts'));
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
