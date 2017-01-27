import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createPermission(permission){
      this.get('item').name = permission.name;
      this.get('item').code = permission.code;
      this.sendAction('action', this.get('item'));
    }
  }
});
