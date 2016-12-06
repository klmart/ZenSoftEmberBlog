import Authenticated from '../../authenticated/route';

export default Authenticated.extend({
  flashMessages: Ember.inject.service(),

  actions: {

    saveBlog(newBlog) {
      newBlog.save()
             .then((savedBlog) => {
               const userPromise = savedBlog.get('user');
               userPromise.then((user) => {
                 user.get('blogs')
                     .pushObject(savedBlog);
                 user.save()
                     .then(() => {
                       this.transitionTo('blogs');
                     });
               });
               // this.get('flashMessages').success('Blog Saved');
             });
    },
  }
});
