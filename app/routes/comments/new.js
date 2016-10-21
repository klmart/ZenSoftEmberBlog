import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.createRecord('comment')
  },

  actions: {
    saveComment(newComment){
      newComment.save().then(() => { this.transitionTo('comments')});
    }
  },

  willTransition(){
    this.controller.get('model').rollbackAttributes();
  }
});
