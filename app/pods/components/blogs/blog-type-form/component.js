import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    createBlogType(blogType){
      this.get('item').name = blogType.name;
      this.sendAction('action', this.get('item'));
    }
  }
});
