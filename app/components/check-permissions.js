import Ember from 'ember';

export default Ember.Component.extend({
  tagName:      '',
  loginService: Ember.inject.service('login-service'),
  permission:   undefined,

  permissions: Ember.computed('loginService.currentPermissions.length', function () {
    return this.get('loginService.currentPermissions');
  }),

  hasPermission: Ember.computed('permissions', function () {
    return this.get('permissions')
               .filter((permission) => {
                 return (permission.get('code') === this.get('permission'));
               });
  }),

  init(){
    this._super(...arguments);
    const permissionCode = this.get('permissionCode');
    this.set('permission', permissionCode);
  }

});
