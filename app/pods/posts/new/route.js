import Authenticated from '../../authenticated/route';

export default Authenticated.extend({

  model() {

    const blog = this.modelFor('blogs.show');

    if (!blog.get('checkUser')) {
      this.transitionTo('posts');
    } else {
      return this.store.createRecord('post', {
        blog: this.modelFor('blogs.show'),
        user: this.get('loginService.currentUser')
      });
    }
  },

  actions: {

    savePost(newPost){
      newPost.save()
             .then((savedPost) => {
               const blog = savedPost.get('blog');
               blog.get('posts')
                   .pushObject(savedPost);

               this.userService.userAddObject(savedPost).then(()=> {
                 blog.save()
                   .then(() => {
                     this.transitionTo('posts');
                   });
               });

             });
    },

    willTransition() {
      this.controller.get('model')
          .unloadRecord();
    }
  }
});
