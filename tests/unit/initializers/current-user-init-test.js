import Ember from 'ember';
import CurrentUserInitInitializer from 'blog/initializers/current-user-init';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | current user init', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  CurrentUserInitInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
