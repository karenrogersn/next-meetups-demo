module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/MeetupDetail.js":
/*!********************************************!*\
  !*** ./components/meetups/MeetupDetail.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MeetupDetail.module.css */ \"./components/meetups/MeetupDetail.module.css\");\n/* harmony import */ var _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/karenrogers/personal-projects/NextJS/nextjs-meetups/components/meetups/MeetupDetail.js\";\n\n\nconst MeetupDetail = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _MeetupDetail_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: props.image,\n      alt: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n      children: props.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: props.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: props.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLmpzP2YyYmYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlsIiwicHJvcHMiLCJjbGFzc2VzIiwiZGV0YWlsIiwiaW1hZ2UiLCJ0aXRsZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBLE1BQU1BLFlBQVksR0FBSUMsS0FBRCxJQUFXO0FBQzVCLHNCQUNJO0FBQVMsYUFBUyxFQUFFQywrREFBTyxDQUFDQyxNQUE1QjtBQUFBLDRCQUNJO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQWhCO0FBQXVCLFNBQUcsRUFBRUgsS0FBSyxDQUFDSTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxnQkFBS0osS0FBSyxDQUFDSTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLGdCQUFVSixLQUFLLENBQUNLO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEosZUFJSTtBQUFBLGdCQUFJTCxLQUFLLENBQUNNO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVFILENBVEQ7O0FBV2VQLDJFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gJy4vTWVldHVwRGV0YWlsLm1vZHVsZS5jc3MnXG5cbmNvbnN0IE1lZXR1cERldGFpbCA9IChwcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWx9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLnRpdGxlfS8+XG4gICAgICAgICAgICA8aDE+e3Byb3BzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICA8YWRkcmVzcz57cHJvcHMuYWRkcmVzc308L2FkZHJlc3M+XG4gICAgICAgICAgICA8cD57cHJvcHMuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.js\n");

/***/ }),

/***/ "./components/meetups/MeetupDetail.module.css":
/*!****************************************************!*\
  !*** ./components/meetups/MeetupDetail.module.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"MeetupDetail_detail__C_8IT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsLm1vZHVsZS5jc3M/ZTY0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBEZXRhaWwubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cERldGFpbF9kZXRhaWxfX0NfOElUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/MeetupDetail.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _jsxFileName = \"/Users/karenrogers/personal-projects/NextJS/nextjs-meetups/pages/[meetupId]/index.js\";\n //Head comp allows us to add metadata to the head section of the page\n\n\n\n // import { prop } from 'dom7';\n\nconst MeetupDetails = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: props.meetupData.title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"meta\", {\n        name: \"description\",\n        content: props.meetupData.description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      image: props.meetupData.image,\n      title: props.meetupData.title,\n      address: props.meetupData.address,\n      description: props.meetupData.description // image={\n      //   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg'\n      // }\n      // title={'First Meetup'}\n      // address={'Some address 5, 12345 some city'}\n      // description={'this is a first meetup!'}\n\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n}; //special function you need to export in a page comp if it's a dynamic page (id in the url for ex) and you're using getStaticProps. This is needed because since the page is pre-generated (during build, not when the user visits the page), next needs to know for which dynamic parameters (here is the id) this page needs to be pre-generated.\n\n\nasync function getStaticPaths() {\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__[\"MongoClient\"].connect('mongodb+srv://Karen:Antofagasta2200286@cluster0.yyz3a.mongodb.net/meetups?retryWrites=true&w=majority');\n  const dataBase = client.db();\n  const meetupsCollection = dataBase.collection('meetups'); //passing an empty {} as 1st arg to fetch all documents in the meetups [] and _id:1 to fetch all documents containing only the _id property\n\n  const meetups = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  client.close();\n  return {\n    // fallback: false means we include all dynamic paths ourselves and if a user enters one that doesn't exist, the server wont try to generate a page to display but will show a 404 error\n    fallback: false,\n    //must have path key that's a [] ob objects\n    //[\n    //generating array of paths dynamically\n    paths: meetups.map(meetup => ({\n      params: {\n        meetupId: meetup._id.toString()\n      }\n    })) //include 1 {} per each version of this dynamic page\n    // {\n    //   params: {\n    //     //dynamic values here\n    //     meetupId: 'm1'\n    //   }\n    // },\n    // {\n    //   params: {\n    //     //dynamic values here\n    //     meetupId: 'm2'\n    //   }\n    // }\n    // ]\n\n  };\n} //after getStaticPaths, getStaticProps runs for every page we need to generate.\n//you can't use hooks inside getStaticProps, so instead of useRouter, use the context {} parameter to access the params key (built in) and the dynamic values encoded in the url (meetupId --> name of our folder in the sq. brackets)\n\nasync function getStaticProps(context) {\n  const meetupId = context.params.meetupId;\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_4__[\"MongoClient\"].connect('mongodb+srv://Karen:Antofagasta2200286@cluster0.yyz3a.mongodb.net/meetups?retryWrites=true&w=majority');\n  const dataBase = client.db();\n  const meetupsCollection = dataBase.collection('meetups'); //converting the string id to the ObjectId shape mongodb provides\n\n  const selectedMeetup = await meetupsCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_4__[\"ObjectId\"])(meetupId)\n  });\n  client.close(); //fetch data for a single meetup\n\n  return {\n    props: {\n      meetupData: {\n        //we need to pass an object to meetupData when we return props so we turn the id back to a string (from ObjectId) to use it in the FE\n        id: selectedMeetup._id.toString(),\n        title: selectedMeetup.title,\n        address: selectedMeetup.address,\n        image: selectedMeetup.image,\n        description: selectedMeetup.description\n      } // {\n      //   image:\n      //     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n      //   id: meetupId,\n      //   title: 'First Meetup',\n      //   address: 'Some address 5, 12345 some city',\n      //   description: 'this is a first meetup!'\n      // }\n\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwRGF0YSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbWFnZSIsImFkZHJlc3MiLCJnZXRTdGF0aWNQYXRocyIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRhdGFCYXNlIiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJtZWV0dXBzIiwiZmluZCIsIl9pZCIsInRvQXJyYXkiLCJjbG9zZSIsImZhbGxiYWNrIiwicGF0aHMiLCJtYXAiLCJtZWV0dXAiLCJwYXJhbXMiLCJtZWV0dXBJZCIsInRvU3RyaW5nIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0Iiwic2VsZWN0ZWRNZWV0dXAiLCJmaW5kT25lIiwiT2JqZWN0SWQiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0NBRUE7O0FBRUEsTUFBTUEsYUFBYSxHQUFJQyxLQUFELElBQVc7QUFDL0Isc0JBQ0UscUVBQUMsOENBQUQ7QUFBQSw0QkFDRSxxRUFBQyxnREFBRDtBQUFBLDhCQUNFO0FBQUEsa0JBQVFBLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkM7QUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFFRixLQUFLLENBQUNDLFVBQU4sQ0FBaUJFO0FBQW5EO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBS0UscUVBQUMsd0VBQUQ7QUFDRSxXQUFLLEVBQUVILEtBQUssQ0FBQ0MsVUFBTixDQUFpQkcsS0FEMUI7QUFFRSxXQUFLLEVBQUVKLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsS0FGMUI7QUFHRSxhQUFPLEVBQUVGLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkksT0FINUI7QUFJRSxpQkFBVyxFQUFFTCxLQUFLLENBQUNDLFVBQU4sQ0FBaUJFLFdBSmhDLENBS0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFvQkQsQ0FyQkQsQyxDQXVCQTs7O0FBQ08sZUFBZUcsY0FBZixHQUFnQztBQUNyQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUNuQix1R0FEbUIsQ0FBckI7QUFJQSxRQUFNQyxRQUFRLEdBQUdILE1BQU0sQ0FBQ0ksRUFBUCxFQUFqQjtBQUVBLFFBQU1DLGlCQUFpQixHQUFHRixRQUFRLENBQUNHLFVBQVQsQ0FBb0IsU0FBcEIsQ0FBMUIsQ0FQcUMsQ0FTckM7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxJQUFsQixDQUF1QixFQUF2QixFQUEyQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUEzQixFQUF1Q0MsT0FBdkMsRUFBdEI7QUFFQVYsUUFBTSxDQUFDVyxLQUFQO0FBQ0EsU0FBTztBQUNMO0FBQ0FDLFlBQVEsRUFBRSxLQUZMO0FBR0w7QUFDQTtBQUNBO0FBQ0FDLFNBQUssRUFBRU4sT0FBTyxDQUFDTyxHQUFSLENBQWFDLE1BQUQsS0FBYTtBQUM5QkMsWUFBTSxFQUFFO0FBQ05DLGdCQUFRLEVBQUVGLE1BQU0sQ0FBQ04sR0FBUCxDQUFXUyxRQUFYO0FBREo7QUFEc0IsS0FBYixDQUFaLENBTkYsQ0FXTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXhCSyxHQUFQO0FBMEJELEMsQ0FFRDtBQUNBOztBQUNPLGVBQWVDLGNBQWYsQ0FBOEJDLE9BQTlCLEVBQXVDO0FBQzVDLFFBQU1ILFFBQVEsR0FBR0csT0FBTyxDQUFDSixNQUFSLENBQWVDLFFBQWhDO0FBRUEsUUFBTWpCLE1BQU0sR0FBRyxNQUFNQyxtREFBVyxDQUFDQyxPQUFaLENBQ25CLHVHQURtQixDQUFyQjtBQUlBLFFBQU1DLFFBQVEsR0FBR0gsTUFBTSxDQUFDSSxFQUFQLEVBQWpCO0FBRUEsUUFBTUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixTQUFwQixDQUExQixDQVQ0QyxDQVc1Qzs7QUFDQSxRQUFNZSxjQUFjLEdBQUcsTUFBTWhCLGlCQUFpQixDQUFDaUIsT0FBbEIsQ0FBMEI7QUFBRWIsT0FBRyxFQUFFYyx3REFBUSxDQUFDTixRQUFEO0FBQWYsR0FBMUIsQ0FBN0I7QUFFQWpCLFFBQU0sQ0FBQ1csS0FBUCxHQWQ0QyxDQWdCNUM7O0FBQ0EsU0FBTztBQUNMbEIsU0FBSyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUU7QUFDVjtBQUNBOEIsVUFBRSxFQUFFSCxjQUFjLENBQUNaLEdBQWYsQ0FBbUJTLFFBQW5CLEVBRk07QUFHVnZCLGFBQUssRUFBRTBCLGNBQWMsQ0FBQzFCLEtBSFo7QUFJVkcsZUFBTyxFQUFFdUIsY0FBYyxDQUFDdkIsT0FKZDtBQUtWRCxhQUFLLEVBQUV3QixjQUFjLENBQUN4QixLQUxaO0FBTVZELG1CQUFXLEVBQUV5QixjQUFjLENBQUN6QjtBQU5sQixPQURQLENBU0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFoQks7QUFERixHQUFQO0FBb0JEO0FBRWNKLDRFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuLy9IZWFkIGNvbXAgYWxsb3dzIHVzIHRvIGFkZCBtZXRhZGF0YSB0byB0aGUgaGVhZCBzZWN0aW9uIG9mIHRoZSBwYWdlXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwRGV0YWlsJztcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuLy8gaW1wb3J0IHsgcHJvcCB9IGZyb20gJ2RvbTcnO1xuXG5jb25zdCBNZWV0dXBEZXRhaWxzID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cHJvcHMubWVldHVwRGF0YS50aXRsZX08L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPSdkZXNjcmlwdGlvbicgY29udGVudD17cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxNZWV0dXBEZXRhaWxcbiAgICAgICAgaW1hZ2U9e3Byb3BzLm1lZXR1cERhdGEuaW1hZ2V9XG4gICAgICAgIHRpdGxlPXtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfVxuICAgICAgICBhZGRyZXNzPXtwcm9wcy5tZWV0dXBEYXRhLmFkZHJlc3N9XG4gICAgICAgIGRlc2NyaXB0aW9uPXtwcm9wcy5tZWV0dXBEYXRhLmRlc2NyaXB0aW9ufVxuICAgICAgICAvLyBpbWFnZT17XG4gICAgICAgIC8vICAgJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gdGl0bGU9eydGaXJzdCBNZWV0dXAnfVxuICAgICAgICAvLyBhZGRyZXNzPXsnU29tZSBhZGRyZXNzIDUsIDEyMzQ1IHNvbWUgY2l0eSd9XG4gICAgICAgIC8vIGRlc2NyaXB0aW9uPXsndGhpcyBpcyBhIGZpcnN0IG1lZXR1cCEnfVxuICAgICAgLz5cbiAgICA8L0ZyYWdtZW50PlxuICApO1xufTtcblxuLy9zcGVjaWFsIGZ1bmN0aW9uIHlvdSBuZWVkIHRvIGV4cG9ydCBpbiBhIHBhZ2UgY29tcCBpZiBpdCdzIGEgZHluYW1pYyBwYWdlIChpZCBpbiB0aGUgdXJsIGZvciBleCkgYW5kIHlvdSdyZSB1c2luZyBnZXRTdGF0aWNQcm9wcy4gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSBzaW5jZSB0aGUgcGFnZSBpcyBwcmUtZ2VuZXJhdGVkIChkdXJpbmcgYnVpbGQsIG5vdCB3aGVuIHRoZSB1c2VyIHZpc2l0cyB0aGUgcGFnZSksIG5leHQgbmVlZHMgdG8ga25vdyBmb3Igd2hpY2ggZHluYW1pYyBwYXJhbWV0ZXJzIChoZXJlIGlzIHRoZSBpZCkgdGhpcyBwYWdlIG5lZWRzIHRvIGJlIHByZS1nZW5lcmF0ZWQuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgJ21vbmdvZGIrc3J2Oi8vS2FyZW46QW50b2ZhZ2FzdGEyMjAwMjg2QGNsdXN0ZXIwLnl5ejNhLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICApO1xuXG4gIGNvbnN0IGRhdGFCYXNlID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYXRhQmFzZS5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgLy9wYXNzaW5nIGFuIGVtcHR5IHt9IGFzIDFzdCBhcmcgdG8gZmV0Y2ggYWxsIGRvY3VtZW50cyBpbiB0aGUgbWVldHVwcyBbXSBhbmQgX2lkOjEgdG8gZmV0Y2ggYWxsIGRvY3VtZW50cyBjb250YWluaW5nIG9ubHkgdGhlIF9pZCBwcm9wZXJ0eVxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xuXG4gIGNsaWVudC5jbG9zZSgpO1xuICByZXR1cm4ge1xuICAgIC8vIGZhbGxiYWNrOiBmYWxzZSBtZWFucyB3ZSBpbmNsdWRlIGFsbCBkeW5hbWljIHBhdGhzIG91cnNlbHZlcyBhbmQgaWYgYSB1c2VyIGVudGVycyBvbmUgdGhhdCBkb2Vzbid0IGV4aXN0LCB0aGUgc2VydmVyIHdvbnQgdHJ5IHRvIGdlbmVyYXRlIGEgcGFnZSB0byBkaXNwbGF5IGJ1dCB3aWxsIHNob3cgYSA0MDQgZXJyb3JcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gICAgLy9tdXN0IGhhdmUgcGF0aCBrZXkgdGhhdCdzIGEgW10gb2Igb2JqZWN0c1xuICAgIC8vW1xuICAgIC8vZ2VuZXJhdGluZyBhcnJheSBvZiBwYXRocyBkeW5hbWljYWxseVxuICAgIHBhdGhzOiBtZWV0dXBzLm1hcCgobWVldHVwKSA9PiAoe1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIG1lZXR1cElkOiBtZWV0dXAuX2lkLnRvU3RyaW5nKClcbiAgICAgIH1cbiAgICB9KSlcbiAgICAvL2luY2x1ZGUgMSB7fSBwZXIgZWFjaCB2ZXJzaW9uIG9mIHRoaXMgZHluYW1pYyBwYWdlXG4gICAgLy8ge1xuICAgIC8vICAgcGFyYW1zOiB7XG4gICAgLy8gICAgIC8vZHluYW1pYyB2YWx1ZXMgaGVyZVxuICAgIC8vICAgICBtZWV0dXBJZDogJ20xJ1xuICAgIC8vICAgfVxuICAgIC8vIH0sXG4gICAgLy8ge1xuICAgIC8vICAgcGFyYW1zOiB7XG4gICAgLy8gICAgIC8vZHluYW1pYyB2YWx1ZXMgaGVyZVxuICAgIC8vICAgICBtZWV0dXBJZDogJ20yJ1xuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBdXG4gIH07XG59XG5cbi8vYWZ0ZXIgZ2V0U3RhdGljUGF0aHMsIGdldFN0YXRpY1Byb3BzIHJ1bnMgZm9yIGV2ZXJ5IHBhZ2Ugd2UgbmVlZCB0byBnZW5lcmF0ZS5cbi8veW91IGNhbid0IHVzZSBob29rcyBpbnNpZGUgZ2V0U3RhdGljUHJvcHMsIHNvIGluc3RlYWQgb2YgdXNlUm91dGVyLCB1c2UgdGhlIGNvbnRleHQge30gcGFyYW1ldGVyIHRvIGFjY2VzcyB0aGUgcGFyYW1zIGtleSAoYnVpbHQgaW4pIGFuZCB0aGUgZHluYW1pYyB2YWx1ZXMgZW5jb2RlZCBpbiB0aGUgdXJsIChtZWV0dXBJZCAtLT4gbmFtZSBvZiBvdXIgZm9sZGVyIGluIHRoZSBzcS4gYnJhY2tldHMpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xuXG4gIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoXG4gICAgJ21vbmdvZGIrc3J2Oi8vS2FyZW46QW50b2ZhZ2FzdGEyMjAwMjg2QGNsdXN0ZXIwLnl5ejNhLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5J1xuICApO1xuXG4gIGNvbnN0IGRhdGFCYXNlID0gY2xpZW50LmRiKCk7XG5cbiAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYXRhQmFzZS5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG5cbiAgLy9jb252ZXJ0aW5nIHRoZSBzdHJpbmcgaWQgdG8gdGhlIE9iamVjdElkIHNoYXBlIG1vbmdvZGIgcHJvdmlkZXNcbiAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgfSk7XG5cbiAgY2xpZW50LmNsb3NlKCk7XG5cbiAgLy9mZXRjaCBkYXRhIGZvciBhIHNpbmdsZSBtZWV0dXBcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwRGF0YToge1xuICAgICAgICAvL3dlIG5lZWQgdG8gcGFzcyBhbiBvYmplY3QgdG8gbWVldHVwRGF0YSB3aGVuIHdlIHJldHVybiBwcm9wcyBzbyB3ZSB0dXJuIHRoZSBpZCBiYWNrIHRvIGEgc3RyaW5nIChmcm9tIE9iamVjdElkKSB0byB1c2UgaXQgaW4gdGhlIEZFXG4gICAgICAgIGlkOiBzZWxlY3RlZE1lZXR1cC5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxuICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZE1lZXR1cC5hZGRyZXNzLFxuICAgICAgICBpbWFnZTogc2VsZWN0ZWRNZWV0dXAuaW1hZ2UsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvblxuICAgICAgfVxuICAgICAgLy8ge1xuICAgICAgLy8gICBpbWFnZTpcbiAgICAgIC8vICAgICAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXG4gICAgICAvLyAgIGlkOiBtZWV0dXBJZCxcbiAgICAgIC8vICAgdGl0bGU6ICdGaXJzdCBNZWV0dXAnLFxuICAgICAgLy8gICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUsIDEyMzQ1IHNvbWUgY2l0eScsXG4gICAgICAvLyAgIGRlc2NyaXB0aW9uOiAndGhpcyBpcyBhIGZpcnN0IG1lZXR1cCEnXG4gICAgICAvLyB9XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWxzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });