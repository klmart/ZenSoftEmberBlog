import Authenticated from '../authenticated';

export default Authenticated.extend({
  model(){
    return this.store.createRecord('blogType');
  },

  actions: {
    saveBlogType(newBlogType){
      newBlogType.save().then(() => {
        this.transitionTo('blog-types');
      });
    },

    willTransition() {
      this.controller.get('model').unloadRecord();
    }
  }

});
