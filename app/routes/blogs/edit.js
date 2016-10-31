import Authenticated from '../authenticated';


export default Authenticated.extend({

  beforeModel(transition){
    this._super(...arguments);

    const blogId = transition.params['blogs.edit'].blog_id;

    this.store.findRecord('blog', blogId).then((blog)=> {
      if (this.get('loginService.currentUser.id') == blog.get('user.id')) {
        return true
      } else {
          transition.abort();
      }
    });
  },

  model(params) {
    return this.store.findRecord('blog', params.blog_id);
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.set('title', 'Edit blog');
    controller.set('buttonLabel', 'Save changes');
  },

  renderTemplate() {
    this.render('blogs/form');
  },


  actions: {

    saveBlog(newBlog) {
      newBlog.save().then(() => this.transitionTo('blogs'));
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
