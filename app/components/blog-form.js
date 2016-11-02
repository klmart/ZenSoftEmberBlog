import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    buttonClicked(blogParams) {
      this.sendAction('action', blogParams);
    }

  }
});
