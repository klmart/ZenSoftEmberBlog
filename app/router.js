import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('blogs', function () {
    this.route('new');
    this.route('edit', {path: '/:blog_id/edit'});

    this.route('show', {path: '/:blog_id'}, function () {
      this.route('posts', {resetNamespace: true}, function () {
        this.route('new');
        this.route('edit', {path: '/:post_id/edit'});
        this.route('show', {path: '/:post_id'}, function () {
          this.route('comments', {resetNamespace: true}, function () {
            this.route('new');
            this.route('edit', {path: '/:comment_id/edit'});
          });
        });
      });
    });
  });

  this.route('users', function() {
    this.route('new');
  });
  this.route('login');

  this.route('blog-types', function() {
    this.route('new');
    this.route('edit',{path: '/:type_id/edit'});
  });
});

export default Router;
