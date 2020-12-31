import EmberRouter from '@ember/routing/router';
import config from 'firehose/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' }, function () {
    this.route('data', { path: '/' });
  });
  this.route('login');

  this.route('links', function () {
    this.route('read', function () {
      this.route('data', { path: '/' });
    });
  });
  this.route('tags', function () {
    this.route('index', { path: '/' });
    this.route('show', { path: '/:tag_name' }, function () {
      this.route('data', { path: '/' });
    });
  });
});
