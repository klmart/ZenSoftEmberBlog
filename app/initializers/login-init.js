export function initialize(application) {
  // application.inject('route', 'foo', 'service:foo');
  application.inject('route', 'loginService', 'service:login-service');
  application.inject('component', 'loginService', 'service:login-service');
  application.inject('controller', 'loginService', 'service:login-service');
  application.inject('model', 'loginService', 'service:login-service');

  application.inject('route', 'commentService', 'service:comment-service');
  application.inject('route', 'postService', 'service:post-service');
  application.inject('route', 'blogService', 'service:blog-service');
  application.inject('route', 'userService', 'service:user-service');
  application.inject('route', 'blogGridList', 'service:blog-grid-list');
  application.inject('component', 'blogGridList', 'service:blog-grid-list');
  application.inject('controller', 'blogGridList', 'service:blog-grid-list');
  application.inject('helper', 'loginService', 'service:login-service');
}

export default {
  name: 'login-init',
  initialize
};
