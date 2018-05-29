import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', {path: '/'});

  // posts
  this.route('posts', function() {
    this.route('comments', function() {
      this.route('new');
    });
    this.route('author');
  });


  // demo
  this.route('demo', function(){

  });


  // courses
  this.route('courses', function() {
    this.route('show', {
        path: '/:course_index'
    });
  });
});

export default Router;
