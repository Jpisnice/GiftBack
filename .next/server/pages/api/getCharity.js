"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getCharity";
exports.ids = ["pages/api/getCharity"];
exports.modules = {

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetCharity&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetCharity.jsx&middlewareConfigBase64=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetCharity&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetCharity.jsx&middlewareConfigBase64=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_getCharity_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\getCharity.jsx */ \"(api)/./pages/api/getCharity.jsx\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_getCharity_jsx__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_getCharity_jsx__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/getCharity\",\n        pathname: \"/api/getCharity\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_getCharity_jsx__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmdldENoYXJpdHkmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyU1Q2FwaSU1Q2dldENoYXJpdHkuanN4Jm1pZGRsZXdhcmVDb25maWdCYXNlNjQ9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNMO0FBQzFEO0FBQ3lEO0FBQ3pEO0FBQ0EsaUVBQWUsd0VBQUssQ0FBQyxzREFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLHdFQUFLLENBQUMsc0RBQVE7QUFDcEM7QUFDTyx3QkFBd0IsZ0hBQW1CO0FBQ2xEO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhcml0eS8/ZWFiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGdldENoYXJpdHkuanN4XCI7XG4vLyBSZS1leHBvcnQgdGhlIGhhbmRsZXIgKHNob3VsZCBiZSB0aGUgZGVmYXVsdCBleHBvcnQpLlxuZXhwb3J0IGRlZmF1bHQgaG9pc3QodXNlcmxhbmQsIFwiZGVmYXVsdFwiKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsIFwiY29uZmlnXCIpO1xuLy8gQ3JlYXRlIGFuZCBleHBvcnQgdGhlIHJvdXRlIG1vZHVsZSB0aGF0IHdpbGwgYmUgY29uc3VtZWQuXG5leHBvcnQgY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgUGFnZXNBUElSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuUEFHRVNfQVBJLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZ2V0Q2hhcml0eVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2dldENoYXJpdHlcIixcbiAgICAgICAgLy8gVGhlIGZvbGxvd2luZyBhcmVuJ3QgdXNlZCBpbiBwcm9kdWN0aW9uLlxuICAgICAgICBidW5kbGVQYXRoOiBcIlwiLFxuICAgICAgICBmaWxlbmFtZTogXCJcIlxuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetCharity&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetCharity.jsx&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./middleware/dbConnect.js":
/*!*********************************!*\
  !*** ./middleware/dbConnect.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default().config({\n    path: \".env.production\"\n});\nconst connectDb = (handler)=>async (req, res)=>{\n        try {\n            if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) {\n                return handler(req, res);\n            }\n            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n            return handler(req, res);\n        } catch (error) {\n            console.error(\"Error connecting to database:\", error);\n            return res.status(500).json({\n                message: \"Database connection error\"\n            });\n        }\n    };\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDb);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9taWRkbGV3YXJlL2RiQ29ubmVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUNKO0FBRTVCQyxvREFBYSxDQUFDO0lBQUVFLE1BQU07QUFBa0I7QUFFeEMsTUFBTUMsWUFBWUMsQ0FBQUEsVUFBVyxPQUFPQyxLQUFLQztRQUNyQyxJQUFJO1lBQ0EsSUFBSVAsNkRBQW9CLENBQUMsRUFBRSxDQUFDUyxVQUFVLEVBQUU7Z0JBQ3BDLE9BQU9KLFFBQVFDLEtBQUtDO1lBQ3hCO1lBRUEsTUFBTVAsdURBQWdCLENBQUNXLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztZQUU1QyxPQUFPUixRQUFRQyxLQUFLQztRQUN4QixFQUFFLE9BQU9PLE9BQU87WUFDWkMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7WUFDL0MsT0FBT1AsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsU0FBUztZQUE0QjtRQUN2RTtJQUNKO0FBRUEsaUVBQWVkLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGFyaXR5Ly4vbWlkZGxld2FyZS9kYkNvbm5lY3QuanM/Mzg3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XG5cbmRvdGVudi5jb25maWcoeyBwYXRoOiAnLmVudi5wcm9kdWN0aW9uJyB9KTtcblxuY29uc3QgY29ubmVjdERiID0gaGFuZGxlciA9PiBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbnNbMF0ucmVhZHlTdGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXIocmVxLCByZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkpO1xuXG4gICAgICAgIHJldHVybiBoYW5kbGVyKHJlcSwgcmVzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29ubmVjdGluZyB0byBkYXRhYmFzZTpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiBcIkRhdGFiYXNlIGNvbm5lY3Rpb24gZXJyb3JcIiB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsImRvdGVudiIsImNvbmZpZyIsInBhdGgiLCJjb25uZWN0RGIiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29ubmVjdGlvbnMiLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJlcnJvciIsImNvbnNvbGUiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./middleware/dbConnect.js\n");

/***/ }),

/***/ "(api)/./models/Charitys.js":
/*!****************************!*\
  !*** ./models/Charitys.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// \nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst CharitySchema = new mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    imgName: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true\n    },\n    address: {\n        type: String,\n        required: true\n    },\n    about: {\n        type: String,\n        required: true\n    },\n    contact1: {\n        type: Number,\n        required: true\n    },\n    contact2: {\n        type: Number,\n        required: true\n    },\n    highlighted: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    listed: {\n        type: Number,\n        required: true,\n        default: 0\n    },\n    isActive: {\n        type: Number,\n        required: true,\n        default: 1\n    },\n    isDeleted: {\n        type: Number,\n        required: true,\n        default: 0\n    }\n}, {\n    timestamps: true\n});\nmongoose.models = {};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose.model(\"Charity\", CharitySchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9tb2RlbHMvQ2hhcml0eXMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEdBQUc7QUFDSCxNQUFNQSxXQUFXQyxtQkFBT0EsQ0FBQztBQUV6QixNQUFNQyxnQkFBZ0IsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ3RDQyxNQUFNO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0MsU0FBUztRQUFFSCxNQUFNQztJQUFPO0lBQ3hCRyxPQUFPO1FBQUVKLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN0Q0csU0FBUztRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDeENJLE9BQU87UUFBRU4sTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3RDSyxVQUFVO1FBQUVQLE1BQU1RO1FBQVFOLFVBQVU7SUFBSztJQUN6Q08sVUFBVTtRQUFFVCxNQUFNUTtRQUFRTixVQUFVO0lBQUs7SUFDekNRLGFBQWE7UUFBRVYsTUFBTVE7UUFBUU4sVUFBVTtRQUFNUyxTQUFTO0lBQUU7SUFDeERDLFFBQVE7UUFBRVosTUFBTVE7UUFBUU4sVUFBVTtRQUFNUyxTQUFTO0lBQUU7SUFDbkRFLFVBQVU7UUFBRWIsTUFBTVE7UUFBUU4sVUFBVTtRQUFNUyxTQUFTO0lBQUU7SUFDckRHLFdBQVc7UUFBRWQsTUFBTVE7UUFBUU4sVUFBVTtRQUFNUyxTQUFTO0lBQUU7QUFDMUQsR0FBRztJQUNDSSxZQUFZO0FBQ2hCO0FBRUFwQixTQUFTcUIsTUFBTSxHQUFHLENBQUM7QUFDbkIsaUVBQWVyQixTQUFTc0IsS0FBSyxDQUFDLFdBQVdwQixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhcml0eS8uL21vZGVscy9DaGFyaXR5cy5qcz80MDgyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpO1xuXG5jb25zdCBDaGFyaXR5U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaW1nTmFtZTogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICBlbWFpbDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgYWRkcmVzczogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgYWJvdXQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIGNvbnRhY3QxOiB7IHR5cGU6IE51bWJlciwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBjb250YWN0MjogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gICAgaGlnaGxpZ2h0ZWQ6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMCB9LFxuICAgIGxpc3RlZDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH0sXG4gICAgaXNBY3RpdmU6IHsgdHlwZTogTnVtYmVyLCByZXF1aXJlZDogdHJ1ZSwgZGVmYXVsdDogMSB9LFxuICAgIGlzRGVsZXRlZDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlLCBkZWZhdWx0OiAwIH1cbn0sIHtcbiAgICB0aW1lc3RhbXBzOiB0cnVlXG59KTtcblxubW9uZ29vc2UubW9kZWxzID0ge307XG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIkNoYXJpdHlcIiwgQ2hhcml0eVNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkNoYXJpdHlTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiaW1nTmFtZSIsImVtYWlsIiwiYWRkcmVzcyIsImFib3V0IiwiY29udGFjdDEiLCJOdW1iZXIiLCJjb250YWN0MiIsImhpZ2hsaWdodGVkIiwiZGVmYXVsdCIsImxpc3RlZCIsImlzQWN0aXZlIiwiaXNEZWxldGVkIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./models/Charitys.js\n");

/***/ }),

/***/ "(api)/./pages/api/getCharity.jsx":
/*!**********************************!*\
  !*** ./pages/api/getCharity.jsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_Charitys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/models/Charitys */ \"(api)/./models/Charitys.js\");\n/* harmony import */ var _middleware_dbConnect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/middleware/dbConnect */ \"(api)/./middleware/dbConnect.js\");\n\n\nconst handler = async (req, res)=>{\n    let charitys = await _models_Charitys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({\n        isDeleted: 0\n    }).select(\"-createdAt -updatedAt -isDeleted\");\n    res.status(200).json({\n        charitys\n    });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_middleware_dbConnect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(handler));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q2hhcml0eS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdDO0FBQ087QUFFL0MsTUFBTUUsVUFBVSxPQUFPQyxLQUFLQztJQUN4QixJQUFJQyxXQUFXLE1BQU1MLDZEQUFZLENBQUM7UUFBRU8sV0FBVztJQUFFLEdBQUdDLE1BQU0sQ0FBQztJQUMzREosSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztRQUFFTDtJQUFTO0FBQ3BDO0FBRUEsaUVBQWVKLGlFQUFTQSxDQUFDQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hhcml0eS8uL3BhZ2VzL2FwaS9nZXRDaGFyaXR5LmpzeD82NGQwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGFyaXR5IGZyb20gJ0AvbW9kZWxzL0NoYXJpdHlzJztcbmltcG9ydCBjb25uZWN0RGIgZnJvbSAnQC9taWRkbGV3YXJlL2RiQ29ubmVjdCc7XG5cbmNvbnN0IGhhbmRsZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICBsZXQgY2hhcml0eXMgPSBhd2FpdCBDaGFyaXR5LmZpbmQoeyBpc0RlbGV0ZWQ6IDAgfSkuc2VsZWN0KCctY3JlYXRlZEF0IC11cGRhdGVkQXQgLWlzRGVsZXRlZCcpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgY2hhcml0eXMgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REYihoYW5kbGVyKTsiXSwibmFtZXMiOlsiQ2hhcml0eSIsImNvbm5lY3REYiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjaGFyaXR5cyIsImZpbmQiLCJpc0RlbGV0ZWQiLCJzZWxlY3QiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getCharity.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2FgetCharity&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5CgetCharity.jsx&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();