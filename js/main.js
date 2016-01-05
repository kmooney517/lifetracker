// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';
import angular from 'angular';
import 'angular-ui-router';

import config from './config';
import Controller from './controller';
import Service from './service';

angular
  .module('app', ['ui.router'])
  .config(config)
  .controller('Controller', Controller)
  .service('Service', Service)
;