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
exports.id = "app/api/friends/requests/route";
exports.ids = ["app/api/friends/requests/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$":
/*!****************************************************!*\
  !*** ./node_modules/mysql2/lib/ sync ^cardinal.*$ ***!
  \****************************************************/
/***/ ((module) => {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = () => ([]);
webpackEmptyContext.resolve = webpackEmptyContext;
webpackEmptyContext.id = "(rsc)/./node_modules/mysql2/lib sync recursive ^cardinal.*$";
module.exports = webpackEmptyContext;

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_friends_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/friends/requests/route.ts */ \"(rsc)/./src/app/api/friends/requests/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/friends/requests/route\",\n        pathname: \"/api/friends/requests\",\n        filename: \"route\",\n        bundlePath: \"app/api/friends/requests/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mrihr\\\\Desktop\\\\hifnf_nextjs_mysql\\\\src\\\\app\\\\api\\\\friends\\\\requests\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_friends_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmcmllbmRzJTJGcmVxdWVzdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmZyaWVuZHMlMkZyZXF1ZXN0cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmZyaWVuZHMlMkZyZXF1ZXN0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtcmlociU1Q0Rlc2t0b3AlNUNoaWZuZl9uZXh0anNfbXlzcWwlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q21yaWhyJTVDRGVza3RvcCU1Q2hpZm5mX25leHRqc19teXNxbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxtcmloclxcXFxEZXNrdG9wXFxcXGhpZm5mX25leHRqc19teXNxbFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxmcmllbmRzXFxcXHJlcXVlc3RzXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcInN0YW5kYWxvbmVcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvZnJpZW5kcy9yZXF1ZXN0cy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2ZyaWVuZHMvcmVxdWVzdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL2ZyaWVuZHMvcmVxdWVzdHMvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxtcmloclxcXFxEZXNrdG9wXFxcXGhpZm5mX25leHRqc19teXNxbFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxmcmllbmRzXFxcXHJlcXVlc3RzXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/friends/requests/route.ts":
/*!***********************************************!*\
  !*** ./src/app/api/friends/requests/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist/esm/v4.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\n\n\nasync function GET(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        // Get friend requests sent to the user\n        const friendRequests = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: `\n        SELECT\n          f.*,\n          u.id as user_id, u.username, u.first_name, u.last_name, u.profile_picture\n        FROM friendships f\n        JOIN users u ON f.requester_id = u.id\n        WHERE f.addressee_id = ? AND f.status = 'pending'\n        ORDER BY f.created_at DESC\n      `,\n            values: [\n                session.user.id\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            friendRequests\n        });\n    } catch (error) {\n        console.error('Error fetching friend requests:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        const { addresseeId } = await req.json();\n        if (!addresseeId) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Addressee ID is required'\n            }, {\n                status: 400\n            });\n        }\n        // Check if addressee exists\n        const users = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: 'SELECT * FROM users WHERE id = ?',\n            values: [\n                addresseeId\n            ]\n        });\n        if (users.length === 0) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n        // Check if a friendship already exists\n        const existingFriendships = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: `\n        SELECT * FROM friendships\n        WHERE (requester_id = ? AND addressee_id = ?)\n           OR (requester_id = ? AND addressee_id = ?)\n      `,\n            values: [\n                session.user.id,\n                addresseeId,\n                addresseeId,\n                session.user.id\n            ]\n        });\n        if (existingFriendships.length > 0) {\n            const friendship = existingFriendships[0];\n            if (friendship.status === 'pending') {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: 'Friend request already sent or received'\n                }, {\n                    status: 400\n                });\n            } else if (friendship.status === 'accepted') {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: 'Already friends'\n                }, {\n                    status: 400\n                });\n            } else if (friendship.status === 'blocked') {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: 'Unable to send friend request'\n                }, {\n                    status: 400\n                });\n            }\n        }\n        // Create friend request\n        const friendshipId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: `\n        INSERT INTO friendships (\n          id, requester_id, addressee_id, status\n        ) VALUES (?, ?, ?, 'pending')\n      `,\n            values: [\n                friendshipId,\n                session.user.id,\n                addresseeId\n            ]\n        });\n        // Create notification for the addressee\n        const notificationId = (0,uuid__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: `\n        INSERT INTO notifications (\n          id, user_id, sender_id, type, reference_id\n        ) VALUES (?, ?, ?, 'friend_request', ?)\n      `,\n            values: [\n                notificationId,\n                addresseeId,\n                session.user.id,\n                friendshipId\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Friend request sent successfully'\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error('Error sending friend request:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9mcmllbmRzL3JlcXVlc3RzL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBd0Q7QUFDTjtBQUNUO0FBQ0w7QUFDSTtBQUdqQyxlQUFlTSxJQUFJQyxHQUFnQjtJQUN4QyxJQUFJO1FBQ0YsTUFBTUMsVUFBVSxNQUFNUCxnRUFBZ0JBLENBQUNDLGtEQUFXQTtRQUVsRCxJQUFJLENBQUNNLFNBQVNDLE1BQU1DLElBQUk7WUFDdEIsT0FBT1YscURBQVlBLENBQUNXLElBQUksQ0FDdEI7Z0JBQUVDLFNBQVM7WUFBZSxHQUMxQjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsdUNBQXVDO1FBQ3ZDLE1BQU1DLGlCQUFpQixNQUFNVCxxREFBWUEsQ0FBZTtZQUN0RFUsT0FBTyxDQUFDOzs7Ozs7OztNQVFSLENBQUM7WUFDREMsUUFBUTtnQkFBQ1IsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO2FBQUM7UUFDM0I7UUFFQSxPQUFPVixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVHO1FBQWU7SUFDNUMsRUFBRSxPQUFPRyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxtQ0FBbUNBO1FBQ2pELE9BQU9qQixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtZQUFFQyxTQUFTO1FBQXdCLEdBQ25DO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGO0FBRU8sZUFBZU0sS0FBS1osR0FBZ0I7SUFDekMsSUFBSTtRQUNGLE1BQU1DLFVBQVUsTUFBTVAsZ0VBQWdCQSxDQUFDQyxrREFBV0E7UUFFbEQsSUFBSSxDQUFDTSxTQUFTQyxNQUFNQyxJQUFJO1lBQ3RCLE9BQU9WLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO1lBQWUsR0FDMUI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU0sRUFBRU8sV0FBVyxFQUFFLEdBQUcsTUFBTWIsSUFBSUksSUFBSTtRQUV0QyxJQUFJLENBQUNTLGFBQWE7WUFDaEIsT0FBT3BCLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO2dCQUFFQyxTQUFTO1lBQTJCLEdBQ3RDO2dCQUFFQyxRQUFRO1lBQUk7UUFFbEI7UUFFQSw0QkFBNEI7UUFDNUIsTUFBTVEsUUFBUSxNQUFNaEIscURBQVlBLENBQVE7WUFDdENVLE9BQU87WUFDUEMsUUFBUTtnQkFBQ0k7YUFBWTtRQUN2QjtRQUVBLElBQUlDLE1BQU1DLE1BQU0sS0FBSyxHQUFHO1lBQ3RCLE9BQU90QixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtnQkFBRUMsU0FBUztZQUFpQixHQUM1QjtnQkFBRUMsUUFBUTtZQUFJO1FBRWxCO1FBRUEsdUNBQXVDO1FBQ3ZDLE1BQU1VLHNCQUFzQixNQUFNbEIscURBQVlBLENBQVE7WUFDcERVLE9BQU8sQ0FBQzs7OztNQUlSLENBQUM7WUFDREMsUUFBUTtnQkFBQ1IsUUFBUUMsSUFBSSxDQUFDQyxFQUFFO2dCQUFFVTtnQkFBYUE7Z0JBQWFaLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTthQUFDO1FBQ3RFO1FBRUEsSUFBSWEsb0JBQW9CRCxNQUFNLEdBQUcsR0FBRztZQUNsQyxNQUFNRSxhQUFhRCxtQkFBbUIsQ0FBQyxFQUFFO1lBRXpDLElBQUlDLFdBQVdYLE1BQU0sS0FBSyxXQUFXO2dCQUNuQyxPQUFPYixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtvQkFBRUMsU0FBUztnQkFBMEMsR0FDckQ7b0JBQUVDLFFBQVE7Z0JBQUk7WUFFbEIsT0FBTyxJQUFJVyxXQUFXWCxNQUFNLEtBQUssWUFBWTtnQkFDM0MsT0FBT2IscURBQVlBLENBQUNXLElBQUksQ0FDdEI7b0JBQUVDLFNBQVM7Z0JBQWtCLEdBQzdCO29CQUFFQyxRQUFRO2dCQUFJO1lBRWxCLE9BQU8sSUFBSVcsV0FBV1gsTUFBTSxLQUFLLFdBQVc7Z0JBQzFDLE9BQU9iLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO29CQUFFQyxTQUFTO2dCQUFnQyxHQUMzQztvQkFBRUMsUUFBUTtnQkFBSTtZQUVsQjtRQUNGO1FBRUEsd0JBQXdCO1FBQ3hCLE1BQU1ZLGVBQWVyQixnREFBTUE7UUFDM0IsTUFBTUMscURBQVlBLENBQUM7WUFDakJVLE9BQU8sQ0FBQzs7OztNQUlSLENBQUM7WUFDREMsUUFBUTtnQkFBQ1M7Z0JBQWNqQixRQUFRQyxJQUFJLENBQUNDLEVBQUU7Z0JBQUVVO2FBQVk7UUFDdEQ7UUFFQSx3Q0FBd0M7UUFDeEMsTUFBTU0saUJBQWlCdEIsZ0RBQU1BO1FBQzdCLE1BQU1DLHFEQUFZQSxDQUFDO1lBQ2pCVSxPQUFPLENBQUM7Ozs7TUFJUixDQUFDO1lBQ0RDLFFBQVE7Z0JBQUNVO2dCQUFnQk47Z0JBQWFaLFFBQVFDLElBQUksQ0FBQ0MsRUFBRTtnQkFBRWU7YUFBYTtRQUN0RTtRQUVBLE9BQU96QixxREFBWUEsQ0FBQ1csSUFBSSxDQUN0QjtZQUFFQyxTQUFTO1FBQW1DLEdBQzlDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQixFQUFFLE9BQU9JLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQ0E7UUFDL0MsT0FBT2pCLHFEQUFZQSxDQUFDVyxJQUFJLENBQ3RCO1lBQUVDLFNBQVM7UUFBd0IsR0FDbkM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbXJpaHJcXERlc2t0b3BcXGhpZm5mX25leHRqc19teXNxbFxcc3JjXFxhcHBcXGFwaVxcZnJpZW5kc1xccmVxdWVzdHNcXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xuaW1wb3J0IHsgZXhlY3V0ZVF1ZXJ5IH0gZnJvbSAnQC9saWIvZGInO1xuaW1wb3J0IHsgRnJpZW5kc2hpcCB9IGZyb20gJ0AvdHlwZXMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG5cbiAgICBpZiAoIXNlc3Npb24/LnVzZXI/LmlkKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgbWVzc2FnZTogJ1VuYXV0aG9yaXplZCcgfSxcbiAgICAgICAgeyBzdGF0dXM6IDQwMSB9XG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEdldCBmcmllbmQgcmVxdWVzdHMgc2VudCB0byB0aGUgdXNlclxuICAgIGNvbnN0IGZyaWVuZFJlcXVlc3RzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5PEZyaWVuZHNoaXBbXT4oe1xuICAgICAgcXVlcnk6IGBcbiAgICAgICAgU0VMRUNUXG4gICAgICAgICAgZi4qLFxuICAgICAgICAgIHUuaWQgYXMgdXNlcl9pZCwgdS51c2VybmFtZSwgdS5maXJzdF9uYW1lLCB1Lmxhc3RfbmFtZSwgdS5wcm9maWxlX3BpY3R1cmVcbiAgICAgICAgRlJPTSBmcmllbmRzaGlwcyBmXG4gICAgICAgIEpPSU4gdXNlcnMgdSBPTiBmLnJlcXVlc3Rlcl9pZCA9IHUuaWRcbiAgICAgICAgV0hFUkUgZi5hZGRyZXNzZWVfaWQgPSA/IEFORCBmLnN0YXR1cyA9ICdwZW5kaW5nJ1xuICAgICAgICBPUkRFUiBCWSBmLmNyZWF0ZWRfYXQgREVTQ1xuICAgICAgYCxcbiAgICAgIHZhbHVlczogW3Nlc3Npb24udXNlci5pZF1cbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGZyaWVuZFJlcXVlc3RzIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGZyaWVuZCByZXF1ZXN0czonLCBlcnJvcik7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9LFxuICAgICAgeyBzdGF0dXM6IDUwMCB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuXG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IG1lc3NhZ2U6ICdVbmF1dGhvcml6ZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFkZHJlc3NlZUlkIH0gPSBhd2FpdCByZXEuanNvbigpO1xuXG4gICAgaWYgKCFhZGRyZXNzZWVJZCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IG1lc3NhZ2U6ICdBZGRyZXNzZWUgSUQgaXMgcmVxdWlyZWQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiBhZGRyZXNzZWUgZXhpc3RzXG4gICAgY29uc3QgdXNlcnMgPSBhd2FpdCBleGVjdXRlUXVlcnk8YW55W10+KHtcbiAgICAgIHF1ZXJ5OiAnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBpZCA9ID8nLFxuICAgICAgdmFsdWVzOiBbYWRkcmVzc2VlSWRdXG4gICAgfSk7XG5cbiAgICBpZiAodXNlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgbWVzc2FnZTogJ1VzZXIgbm90IGZvdW5kJyB9LFxuICAgICAgICB7IHN0YXR1czogNDA0IH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgYSBmcmllbmRzaGlwIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgZXhpc3RpbmdGcmllbmRzaGlwcyA9IGF3YWl0IGV4ZWN1dGVRdWVyeTxhbnlbXT4oe1xuICAgICAgcXVlcnk6IGBcbiAgICAgICAgU0VMRUNUICogRlJPTSBmcmllbmRzaGlwc1xuICAgICAgICBXSEVSRSAocmVxdWVzdGVyX2lkID0gPyBBTkQgYWRkcmVzc2VlX2lkID0gPylcbiAgICAgICAgICAgT1IgKHJlcXVlc3Rlcl9pZCA9ID8gQU5EIGFkZHJlc3NlZV9pZCA9ID8pXG4gICAgICBgLFxuICAgICAgdmFsdWVzOiBbc2Vzc2lvbi51c2VyLmlkLCBhZGRyZXNzZWVJZCwgYWRkcmVzc2VlSWQsIHNlc3Npb24udXNlci5pZF1cbiAgICB9KTtcblxuICAgIGlmIChleGlzdGluZ0ZyaWVuZHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGZyaWVuZHNoaXAgPSBleGlzdGluZ0ZyaWVuZHNoaXBzWzBdO1xuXG4gICAgICBpZiAoZnJpZW5kc2hpcC5zdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgeyBtZXNzYWdlOiAnRnJpZW5kIHJlcXVlc3QgYWxyZWFkeSBzZW50IG9yIHJlY2VpdmVkJyB9LFxuICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChmcmllbmRzaGlwLnN0YXR1cyA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgICAgeyBtZXNzYWdlOiAnQWxyZWFkeSBmcmllbmRzJyB9LFxuICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChmcmllbmRzaGlwLnN0YXR1cyA9PT0gJ2Jsb2NrZWQnKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICB7IG1lc3NhZ2U6ICdVbmFibGUgdG8gc2VuZCBmcmllbmQgcmVxdWVzdCcgfSxcbiAgICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgZnJpZW5kIHJlcXVlc3RcbiAgICBjb25zdCBmcmllbmRzaGlwSWQgPSB1dWlkdjQoKTtcbiAgICBhd2FpdCBleGVjdXRlUXVlcnkoe1xuICAgICAgcXVlcnk6IGBcbiAgICAgICAgSU5TRVJUIElOVE8gZnJpZW5kc2hpcHMgKFxuICAgICAgICAgIGlkLCByZXF1ZXN0ZXJfaWQsIGFkZHJlc3NlZV9pZCwgc3RhdHVzXG4gICAgICAgICkgVkFMVUVTICg/LCA/LCA/LCAncGVuZGluZycpXG4gICAgICBgLFxuICAgICAgdmFsdWVzOiBbZnJpZW5kc2hpcElkLCBzZXNzaW9uLnVzZXIuaWQsIGFkZHJlc3NlZUlkXVxuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIG5vdGlmaWNhdGlvbiBmb3IgdGhlIGFkZHJlc3NlZVxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbklkID0gdXVpZHY0KCk7XG4gICAgYXdhaXQgZXhlY3V0ZVF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBgXG4gICAgICAgIElOU0VSVCBJTlRPIG5vdGlmaWNhdGlvbnMgKFxuICAgICAgICAgIGlkLCB1c2VyX2lkLCBzZW5kZXJfaWQsIHR5cGUsIHJlZmVyZW5jZV9pZFxuICAgICAgICApIFZBTFVFUyAoPywgPywgPywgJ2ZyaWVuZF9yZXF1ZXN0JywgPylcbiAgICAgIGAsXG4gICAgICB2YWx1ZXM6IFtub3RpZmljYXRpb25JZCwgYWRkcmVzc2VlSWQsIHNlc3Npb24udXNlci5pZCwgZnJpZW5kc2hpcElkXVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgeyBtZXNzYWdlOiAnRnJpZW5kIHJlcXVlc3Qgc2VudCBzdWNjZXNzZnVsbHknIH0sXG4gICAgICB7IHN0YXR1czogMjAxIH1cbiAgICApO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNlbmRpbmcgZnJpZW5kIHJlcXVlc3Q6JywgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJ2NCIsInV1aWR2NCIsImV4ZWN1dGVRdWVyeSIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwiaWQiLCJqc29uIiwibWVzc2FnZSIsInN0YXR1cyIsImZyaWVuZFJlcXVlc3RzIiwicXVlcnkiLCJ2YWx1ZXMiLCJlcnJvciIsImNvbnNvbGUiLCJQT1NUIiwiYWRkcmVzc2VlSWQiLCJ1c2VycyIsImxlbmd0aCIsImV4aXN0aW5nRnJpZW5kc2hpcHMiLCJmcmllbmRzaGlwIiwiZnJpZW5kc2hpcElkIiwibm90aWZpY2F0aW9uSWQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/friends/requests/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                email: {\n                    label: 'Email',\n                    type: 'email'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                try {\n                    const users = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.executeQuery)({\n                        query: 'SELECT * FROM users WHERE email = ?',\n                        values: [\n                            credentials.email\n                        ]\n                    });\n                    if (users.length === 0) {\n                        return null;\n                    }\n                    const user = users[0];\n                    const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    return {\n                        id: user.id,\n                        name: `${user.first_name} ${user.last_name}`,\n                        email: user.email,\n                        image: user.profile_picture,\n                        username: user.username\n                    };\n                } catch (error) {\n                    console.error('Authentication error:', error);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user, trigger, session }) {\n            if (user) {\n                token.id = user.id;\n                token.username = user.username;\n            }\n            // Handle session update\n            if (trigger === 'update' && session?.image) {\n                token.picture = session.image;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.username = token.username;\n                // If token has a picture, use it\n                if (token.picture) {\n                    session.user.image = token.picture;\n                }\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: '/auth/signin',\n        signOut: '/auth/signout',\n        error: '/auth/error',\n        newUser: '/auth/register'\n    },\n    session: {\n        strategy: 'jwt',\n        maxAge: 30 * 24 * 60 * 60\n    },\n    cookies: {\n        sessionToken: {\n            name: `next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: 'lax',\n                path: '/',\n                secure: \"development\" === 'production',\n                domain:  false ? 0 : undefined\n            }\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    debug: \"development\" === 'development'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIkM6XFxVc2Vyc1xcbXJpaHJcXERlc2t0b3BcXGhpZm5mX25leHRqc19teXNxbFxcc3JjXFxsaWJcXGF1dGgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBDcmVkZW50aWFsc1Byb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHMnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5pbXBvcnQgeyBleGVjdXRlUXVlcnkgfSBmcm9tICdAL2xpYi9kYic7XG5cbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9uczogTmV4dEF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6ICdDcmVkZW50aWFscycsXG4gICAgICBjcmVkZW50aWFsczoge1xuICAgICAgICBlbWFpbDogeyBsYWJlbDogJ0VtYWlsJywgdHlwZTogJ2VtYWlsJyB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogJ1Bhc3N3b3JkJywgdHlwZTogJ3Bhc3N3b3JkJyB9XG4gICAgICB9LFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgdXNlcnMgPSBhd2FpdCBleGVjdXRlUXVlcnk8YW55W10+KHtcbiAgICAgICAgICAgIHF1ZXJ5OiAnU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBlbWFpbCA9ID8nLFxuICAgICAgICAgICAgdmFsdWVzOiBbY3JlZGVudGlhbHMuZW1haWxdXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodXNlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB1c2VyID0gdXNlcnNbMF07XG4gICAgICAgICAgY29uc3QgaXNQYXNzd29yZFZhbGlkID0gYXdhaXQgYmNyeXB0LmNvbXBhcmUoY3JlZGVudGlhbHMucGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgICAgICAgaWYgKCFpc1Bhc3N3b3JkVmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgICAgIG5hbWU6IGAke3VzZXIuZmlyc3RfbmFtZX0gJHt1c2VyLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBpbWFnZTogdXNlci5wcm9maWxlX3BpY3R1cmUsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZVxuICAgICAgICAgIH07XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignQXV0aGVudGljYXRpb24gZXJyb3I6JywgZXJyb3IpO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIHRyaWdnZXIsIHNlc3Npb24gfSkge1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB0b2tlbi51c2VybmFtZSA9IHVzZXIudXNlcm5hbWU7XG4gICAgICB9XG5cbiAgICAgIC8vIEhhbmRsZSBzZXNzaW9uIHVwZGF0ZVxuICAgICAgaWYgKHRyaWdnZXIgPT09ICd1cGRhdGUnICYmIHNlc3Npb24/LmltYWdlKSB7XG4gICAgICAgIHRva2VuLnBpY3R1cmUgPSBzZXNzaW9uLmltYWdlO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgICBhc3luYyBzZXNzaW9uKHsgc2Vzc2lvbiwgdG9rZW4gfSkge1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHNlc3Npb24udXNlci5pZCA9IHRva2VuLmlkIGFzIHN0cmluZztcbiAgICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gdG9rZW4udXNlcm5hbWUgYXMgc3RyaW5nO1xuXG4gICAgICAgIC8vIElmIHRva2VuIGhhcyBhIHBpY3R1cmUsIHVzZSBpdFxuICAgICAgICBpZiAodG9rZW4ucGljdHVyZSkge1xuICAgICAgICAgIHNlc3Npb24udXNlci5pbWFnZSA9IHRva2VuLnBpY3R1cmUgYXMgc3RyaW5nO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gIH0sXG4gIHBhZ2VzOiB7XG4gICAgc2lnbkluOiAnL2F1dGgvc2lnbmluJyxcbiAgICBzaWduT3V0OiAnL2F1dGgvc2lnbm91dCcsXG4gICAgZXJyb3I6ICcvYXV0aC9lcnJvcicsXG4gICAgbmV3VXNlcjogJy9hdXRoL3JlZ2lzdGVyJ1xuICB9LFxuICBzZXNzaW9uOiB7XG4gICAgc3RyYXRlZ3k6ICdqd3QnLFxuICAgIG1heEFnZTogMzAgKiAyNCAqIDYwICogNjAsIC8vIDMwIGRheXNcbiAgfSxcbiAgY29va2llczoge1xuICAgIHNlc3Npb25Ub2tlbjoge1xuICAgICAgbmFtZTogYG5leHQtYXV0aC5zZXNzaW9uLXRva2VuYCxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaHR0cE9ubHk6IHRydWUsXG4gICAgICAgIHNhbWVTaXRlOiAnbGF4JyxcbiAgICAgICAgcGF0aDogJy8nLFxuICAgICAgICBzZWN1cmU6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXG4gICAgICAgIGRvbWFpbjogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICcuZ2FhbmxhZ2JlLmNvbScgOiB1bmRlZmluZWQsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59O1xuIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJleGVjdXRlUXVlcnkiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VycyIsInF1ZXJ5IiwidmFsdWVzIiwibGVuZ3RoIiwidXNlciIsImlzUGFzc3dvcmRWYWxpZCIsImNvbXBhcmUiLCJpZCIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJpbWFnZSIsInByb2ZpbGVfcGljdHVyZSIsInVzZXJuYW1lIiwiZXJyb3IiLCJjb25zb2xlIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJ0cmlnZ2VyIiwic2Vzc2lvbiIsInBpY3R1cmUiLCJwYWdlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJuZXdVc2VyIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJjb29raWVzIiwic2Vzc2lvblRva2VuIiwib3B0aW9ucyIsImh0dHBPbmx5Iiwic2FtZVNpdGUiLCJwYXRoIiwic2VjdXJlIiwicHJvY2VzcyIsImRvbWFpbiIsInVuZGVmaW5lZCIsInNlY3JldCIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImRlYnVnIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   executeQuery: () => (/* binding */ executeQuery)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\n// Create a connection pool\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: process.env.MYSQL_HOST || 'localhost',\n    user: process.env.MYSQL_USER || 'root',\n    password: process.env.MYSQL_PASSWORD || '',\n    database: process.env.MYSQL_DATABASE || 'facebook_clone',\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\nasync function executeQuery({ query, values }) {\n    try {\n        // If values is empty or undefined, use query directly\n        if (!values || values.length === 0) {\n            const [rows] = await pool.query(query);\n            return rows;\n        }\n        // Otherwise use prepared statement\n        const [rows] = await pool.execute(query, values);\n        return rows;\n    } catch (error) {\n        console.error('Database query error:', error);\n        throw error;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQywyQkFBMkI7QUFDM0IsTUFBTUMsT0FBT0Qsc0RBQWdCLENBQUM7SUFDNUJHLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJO0lBQ2hDQyxNQUFNSCxRQUFRQyxHQUFHLENBQUNHLFVBQVUsSUFBSTtJQUNoQ0MsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxjQUFjLElBQUk7SUFDeENDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sY0FBYyxJQUFJO0lBQ3hDQyxvQkFBb0I7SUFDcEJDLGlCQUFpQjtJQUNqQkMsWUFBWTtBQUNkO0FBRU8sZUFBZUMsYUFBZ0IsRUFBRUMsS0FBSyxFQUFFQyxNQUFNLEVBQXFDO0lBQ3hGLElBQUk7UUFDRixzREFBc0Q7UUFDdEQsSUFBSSxDQUFDQSxVQUFVQSxPQUFPQyxNQUFNLEtBQUssR0FBRztZQUNsQyxNQUFNLENBQUNDLEtBQUssR0FBRyxNQUFNbkIsS0FBS2dCLEtBQUssQ0FBQ0E7WUFDaEMsT0FBT0c7UUFDVDtRQUVBLG1DQUFtQztRQUNuQyxNQUFNLENBQUNBLEtBQUssR0FBRyxNQUFNbkIsS0FBS29CLE9BQU8sQ0FBQ0osT0FBT0M7UUFDekMsT0FBT0U7SUFDVCxFQUFFLE9BQU9FLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsTUFBTUE7SUFDUjtBQUNGO0FBRUEsaUVBQWVyQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXG1yaWhyXFxEZXNrdG9wXFxoaWZuZl9uZXh0anNfbXlzcWxcXHNyY1xcbGliXFxkYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG4vLyBDcmVhdGUgYSBjb25uZWN0aW9uIHBvb2xcbmNvbnN0IHBvb2wgPSBteXNxbC5jcmVhdGVQb29sKHtcbiAgaG9zdDogcHJvY2Vzcy5lbnYuTVlTUUxfSE9TVCB8fCAnbG9jYWxob3N0JyxcbiAgdXNlcjogcHJvY2Vzcy5lbnYuTVlTUUxfVVNFUiB8fCAncm9vdCcsXG4gIHBhc3N3b3JkOiBwcm9jZXNzLmVudi5NWVNRTF9QQVNTV09SRCB8fCAnJyxcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk1ZU1FMX0RBVEFCQVNFIHx8ICdmYWNlYm9va19jbG9uZScsXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcbiAgY29ubmVjdGlvbkxpbWl0OiAxMCxcbiAgcXVldWVMaW1pdDogMFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBleGVjdXRlUXVlcnk8VD4oeyBxdWVyeSwgdmFsdWVzIH06IHsgcXVlcnk6IHN0cmluZzsgdmFsdWVzPzogYW55W10gfSk6IFByb21pc2U8VD4ge1xuICB0cnkge1xuICAgIC8vIElmIHZhbHVlcyBpcyBlbXB0eSBvciB1bmRlZmluZWQsIHVzZSBxdWVyeSBkaXJlY3RseVxuICAgIGlmICghdmFsdWVzIHx8IHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IHBvb2wucXVlcnkocXVlcnkpO1xuICAgICAgcmV0dXJuIHJvd3MgYXMgVDtcbiAgICB9XG5cbiAgICAvLyBPdGhlcndpc2UgdXNlIHByZXBhcmVkIHN0YXRlbWVudFxuICAgIGNvbnN0IFtyb3dzXSA9IGF3YWl0IHBvb2wuZXhlY3V0ZShxdWVyeSwgdmFsdWVzKTtcbiAgICByZXR1cm4gcm93cyBhcyBUO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0RhdGFiYXNlIHF1ZXJ5IGVycm9yOicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwb29sO1xuIl0sIm5hbWVzIjpbIm15c3FsIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJob3N0IiwicHJvY2VzcyIsImVudiIsIk1ZU1FMX0hPU1QiLCJ1c2VyIiwiTVlTUUxfVVNFUiIsInBhc3N3b3JkIiwiTVlTUUxfUEFTU1dPUkQiLCJkYXRhYmFzZSIsIk1ZU1FMX0RBVEFCQVNFIiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwibGVuZ3RoIiwicm93cyIsImV4ZWN1dGUiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "process":
/*!**************************!*\
  !*** external "process" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("process");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "string_decoder":
/*!*********************************!*\
  !*** external "string_decoder" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ "timers":
/*!*************************!*\
  !*** external "timers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/long","vendor-chunks/oauth","vendor-chunks/lru-cache","vendor-chunks/object-hash","vendor-chunks/denque","vendor-chunks/preact","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/generate-function","vendor-chunks/safer-buffer","vendor-chunks/uuid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();