export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'currentUser', 'service:current-user');
}

export default {
  name: 'current-user-init',
  initialize
};
