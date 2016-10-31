// import Ember from 'ember';
import Authenticated from '../authenticated';


export default Authenticated.extend({

  beforeModel(transition){
    this._super(...arguments);
    console.log(transition.params);
    const postID = transition.params['posts.edit'].post_id;

    this.store.findRecord('post', postID).then((post)=> {
      if (!(this.get('loginService.currentUser.id') == post.get('user.id'))) {
        this.transitionTo('posts');
      }
    });
  },

  model(params) {
    return this.store.findRecord('post', params.post_id);
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
