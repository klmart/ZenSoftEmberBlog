import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    buttonClicked(blogTypeParams) {
      this.sendAction('action', blogTypeParams);
    }

  }
});
