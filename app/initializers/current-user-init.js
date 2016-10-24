export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'currentUser', 'service:current-user');
  application.inject('component', 'currentUser', 'service:current-user');
  application.inject('controller', 'currentUser', 'service:current-user');
}

export default {
  name: 'current-user-init',
  initialize
};
