module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/new-meetup.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n//import MongoClient to connect to our data base in MongoDB and fetch data\n //we define function that contain server-side code. this only runs on the server. The file name acts as url paths\n//endpoint for creating a new meetup: Nextjs will convert this into endopints on the server-side\n//this function receives the request and response object\n\nconst handler = async (req, res) => {\n  //SENDING THE REQ\n  if (req.method === 'POST') {\n    const data = req.body; //data we expect to get from the incoming req body\n    // const { title, image, address, description } = data;\n    //MongoClient.connect returns a promise and we can use await. the string inside the connect method is from MongoDB\n\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__[\"MongoClient\"].connect('mongodb+srv://Karen:Antofagasta2200286@cluster0.yyz3a.mongodb.net/meetups?retryWrites=true&w=majority'); //get access to the DB by calling the db method on the client\n\n    const dataBase = client.db(); //this is a NSQL db (collection is a group of docs, docs being each meetup in this case)\n    //access a certain collection by calling the collection method on the database.\n    //give your collection a name 'meetups' it can be the same you added in the connect string as your database\n\n    const meetupsCollection = dataBase.collection('meetups'); //adding a new doc (will be an {}) into this collection. we can pass the data variable we created that holds title, image, address and description\n    //this operation also returns a promise, so we can use await here\n\n    const result = await meetupsCollection.insertOne(data);\n    console.log('result', result); //closing the DB connection once we're done\n\n    client.close(); //SENDING THE RES\n    //setting an http status code with a json message in case something was inserted successfully\n\n    res.status(201).json({\n      message: 'Meetup was inserted'\n    });\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz84Yjg2Il0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNsaWVudCIsIk1vbmdvQ2xpZW50IiwiY29ubmVjdCIsImRhdGFCYXNlIiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjb25zb2xlIiwibG9nIiwiY2xvc2UiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7Q0FHQTtBQUVBO0FBQ0E7O0FBQ0EsTUFBTUEsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQztBQUNBLE1BQUlELEdBQUcsQ0FBQ0UsTUFBSixLQUFlLE1BQW5CLEVBQTJCO0FBQ3pCLFVBQU1DLElBQUksR0FBR0gsR0FBRyxDQUFDSSxJQUFqQixDQUR5QixDQUV6QjtBQUNBO0FBRUE7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FDbkIsdUdBRG1CLENBQXJCLENBTnlCLENBVXpCOztBQUNBLFVBQU1DLFFBQVEsR0FBR0gsTUFBTSxDQUFDSSxFQUFQLEVBQWpCLENBWHlCLENBYXpCO0FBQ0E7QUFDQTs7QUFDQSxVQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDRyxVQUFULENBQW9CLFNBQXBCLENBQTFCLENBaEJ5QixDQWlCekI7QUFFQTs7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQWxCLENBQTRCVixJQUE1QixDQUFyQjtBQUNBVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCSCxNQUF0QixFQXJCeUIsQ0F1QnpCOztBQUNBUCxVQUFNLENBQUNXLEtBQVAsR0F4QnlCLENBMEJ6QjtBQUNBOztBQUNBZixPQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFBRUMsYUFBTyxFQUFFO0FBQVgsS0FBckI7QUFDRDtBQUNGLENBaENEOztBQWtDZXBCLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBNb25nb0NsaWVudCB0byBjb25uZWN0IHRvIG91ciBkYXRhIGJhc2UgaW4gTW9uZ29EQiBhbmQgZmV0Y2ggZGF0YVxuaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuLy93ZSBkZWZpbmUgZnVuY3Rpb24gdGhhdCBjb250YWluIHNlcnZlci1zaWRlIGNvZGUuIHRoaXMgb25seSBydW5zIG9uIHRoZSBzZXJ2ZXIuIFRoZSBmaWxlIG5hbWUgYWN0cyBhcyB1cmwgcGF0aHNcblxuLy9lbmRwb2ludCBmb3IgY3JlYXRpbmcgYSBuZXcgbWVldHVwOiBOZXh0anMgd2lsbCBjb252ZXJ0IHRoaXMgaW50byBlbmRvcGludHMgb24gdGhlIHNlcnZlci1zaWRlXG4vL3RoaXMgZnVuY3Rpb24gcmVjZWl2ZXMgdGhlIHJlcXVlc3QgYW5kIHJlc3BvbnNlIG9iamVjdFxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICAvL1NFTkRJTkcgVEhFIFJFUVxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgZGF0YSA9IHJlcS5ib2R5O1xuICAgIC8vZGF0YSB3ZSBleHBlY3QgdG8gZ2V0IGZyb20gdGhlIGluY29taW5nIHJlcSBib2R5XG4gICAgLy8gY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gPSBkYXRhO1xuXG4gICAgLy9Nb25nb0NsaWVudC5jb25uZWN0IHJldHVybnMgYSBwcm9taXNlIGFuZCB3ZSBjYW4gdXNlIGF3YWl0LiB0aGUgc3RyaW5nIGluc2lkZSB0aGUgY29ubmVjdCBtZXRob2QgaXMgZnJvbSBNb25nb0RCXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcbiAgICAgICdtb25nb2RiK3NydjovL0thcmVuOkFudG9mYWdhc3RhMjIwMDI4NkBjbHVzdGVyMC55eXozYS5tb25nb2RiLm5ldC9tZWV0dXBzP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eSdcbiAgICApO1xuXG4gICAgLy9nZXQgYWNjZXNzIHRvIHRoZSBEQiBieSBjYWxsaW5nIHRoZSBkYiBtZXRob2Qgb24gdGhlIGNsaWVudFxuICAgIGNvbnN0IGRhdGFCYXNlID0gY2xpZW50LmRiKCk7XG5cbiAgICAvL3RoaXMgaXMgYSBOU1FMIGRiIChjb2xsZWN0aW9uIGlzIGEgZ3JvdXAgb2YgZG9jcywgZG9jcyBiZWluZyBlYWNoIG1lZXR1cCBpbiB0aGlzIGNhc2UpXG4gICAgLy9hY2Nlc3MgYSBjZXJ0YWluIGNvbGxlY3Rpb24gYnkgY2FsbGluZyB0aGUgY29sbGVjdGlvbiBtZXRob2Qgb24gdGhlIGRhdGFiYXNlLlxuICAgIC8vZ2l2ZSB5b3VyIGNvbGxlY3Rpb24gYSBuYW1lICdtZWV0dXBzJyBpdCBjYW4gYmUgdGhlIHNhbWUgeW91IGFkZGVkIGluIHRoZSBjb25uZWN0IHN0cmluZyBhcyB5b3VyIGRhdGFiYXNlXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYXRhQmFzZS5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gICAgLy9hZGRpbmcgYSBuZXcgZG9jICh3aWxsIGJlIGFuIHt9KSBpbnRvIHRoaXMgY29sbGVjdGlvbi4gd2UgY2FuIHBhc3MgdGhlIGRhdGEgdmFyaWFibGUgd2UgY3JlYXRlZCB0aGF0IGhvbGRzIHRpdGxlLCBpbWFnZSwgYWRkcmVzcyBhbmQgZGVzY3JpcHRpb25cblxuICAgIC8vdGhpcyBvcGVyYXRpb24gYWxzbyByZXR1cm5zIGEgcHJvbWlzZSwgc28gd2UgY2FuIHVzZSBhd2FpdCBoZXJlXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKCdyZXN1bHQnLCByZXN1bHQpO1xuXG4gICAgLy9jbG9zaW5nIHRoZSBEQiBjb25uZWN0aW9uIG9uY2Ugd2UncmUgZG9uZVxuICAgIGNsaWVudC5jbG9zZSgpO1xuXG4gICAgLy9TRU5ESU5HIFRIRSBSRVNcbiAgICAvL3NldHRpbmcgYW4gaHR0cCBzdGF0dXMgY29kZSB3aXRoIGEganNvbiBtZXNzYWdlIGluIGNhc2Ugc29tZXRoaW5nIHdhcyBpbnNlcnRlZCBzdWNjZXNzZnVsbHlcbiAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7IG1lc3NhZ2U6ICdNZWV0dXAgd2FzIGluc2VydGVkJyB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/new-meetup.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

/***/ })

/******/ });