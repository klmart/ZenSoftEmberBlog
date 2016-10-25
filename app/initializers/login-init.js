export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'loginService', 'service:login-service');
  application.inject('component', 'loginService', 'service:login-service');
  application.inject('controller', 'loginService', 'service:login-service');
}

export default {
  name: 'login-init',
  initialize
};
