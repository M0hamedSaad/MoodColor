var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNavigation=require("react-navigation");var _reactNative=require("react-native");var _StackView=_interopRequireDefault(require("../views/StackView/StackView"));function createStackNavigator(routeConfigMap){var stackConfig=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var router=(0,_reactNavigation.StackRouter)(routeConfigMap,stackConfig);var Navigator=(0,_reactNavigation.createNavigator)(_StackView.default,router,stackConfig);if(!stackConfig.disableKeyboardHandling&&_reactNative.Platform.OS!=='web'){Navigator=(0,_reactNavigation.createKeyboardAwareNavigator)(Navigator,stackConfig);}return Navigator;}var _default=createStackNavigator;exports.default=_default;
//# sourceMappingURL=createStackNavigator.js.map