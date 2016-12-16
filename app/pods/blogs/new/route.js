import Authenticated from '../../authenticated/route';
import Ember from 'ember';

export default Authenticated.extend({
  flashMessages: Ember.inject.service(),

  actions: {
    saveBlog(newBlog) {
      newBlog.save()
             .then((savedBlog) => {
               this.userService.userAddObject(savedBlog)
                   .then(() => {
                     this.transitionTo('blogs');
                   });
             });
    },
  }
});
