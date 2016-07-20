import angular from "angular";
import { MainController } from './controllers/main.controller';
import { serverConstant } from './server.constant';

angular
	.module('app', [])
	.constant('SERVER', serverConstant)
	.controller('MainController', MainController);