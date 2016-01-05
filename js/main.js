// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';
import angular from 'angular';
import 'angular-ui-router';
import _ from 'lodash';
import 'angular-google-maps';
import 'angular-simple-logger';

import config from './config';
import Controller from './controller';
import Service from './service';

window._ = _;

angular
  .module('app', ['ui.router', 'uiGmapgoogle-maps'])
  .config(config)
  .controller('Controller', Controller)
  .service('Service', Service)
;