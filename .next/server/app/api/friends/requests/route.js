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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_friends_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/friends/requests/route.ts */ \"(rsc)/./src/app/api/friends/requests/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/friends/requests/route\",\n        pathname: \"/api/friends/requests\",\n        filename: \"route\",\n        bundlePath: \"app/api/friends/requests/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mrihr\\\\Desktop\\\\hifnf_nextjs_mysql\\\\src\\\\app\\\\api\\\\friends\\\\requests\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_friends_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZmcmllbmRzJTJGcmVxdWVzdHMlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmZyaWVuZHMlMkZyZXF1ZXN0cyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmZyaWVuZHMlMkZyZXF1ZXN0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtcmlociU1Q0Rlc2t0b3AlNUNoaWZuZl9uZXh0anNfbXlzcWwlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q21yaWhyJTVDRGVza3RvcCU1Q2hpZm5mX25leHRqc19teXNxbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG1yaWhyXFxcXERlc2t0b3BcXFxcaGlmbmZfbmV4dGpzX215c3FsXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGZyaWVuZHNcXFxccmVxdWVzdHNcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2ZyaWVuZHMvcmVxdWVzdHMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9mcmllbmRzL3JlcXVlc3RzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9mcmllbmRzL3JlcXVlc3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbXJpaHJcXFxcRGVza3RvcFxcXFxoaWZuZl9uZXh0anNfbXlzcWxcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcZnJpZW5kc1xcXFxyZXF1ZXN0c1xcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n            name: 'Credentials',\n            credentials: {\n                email: {\n                    label: 'Email',\n                    type: 'email'\n                },\n                password: {\n                    label: 'Password',\n                    type: 'password'\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    return null;\n                }\n                try {\n                    const users = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__.executeQuery)({\n                        query: 'SELECT * FROM users WHERE email = ?',\n                        values: [\n                            credentials.email\n                        ]\n                    });\n                    if (users.length === 0) {\n                        return null;\n                    }\n                    const user = users[0];\n                    const isPasswordValid = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().compare(credentials.password, user.password);\n                    if (!isPasswordValid) {\n                        return null;\n                    }\n                    return {\n                        id: user.id,\n                        name: `${user.first_name} ${user.last_name}`,\n                        email: user.email,\n                        image: user.profile_picture,\n                        username: user.username\n                    };\n                } catch (error) {\n                    console.error('Authentication error:', error);\n                    return null;\n                }\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user, trigger, session }) {\n            if (user) {\n                token.id = user.id;\n                token.username = user.username;\n            }\n            // Handle session update\n            if (trigger === 'update' && session?.image) {\n                token.picture = session.image;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.id = token.id;\n                session.user.username = token.username;\n                // If token has a picture, use it\n                if (token.picture) {\n                    session.user.image = token.picture;\n                }\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: '/auth/signin',\n        signOut: '/auth/signout',\n        error: '/auth/error',\n        newUser: '/auth/register'\n    },\n    session: {\n        strategy: 'jwt',\n        maxAge: 30 * 24 * 60 * 60\n    },\n    cookies: {\n        sessionToken: {\n            name: `next-auth.session-token`,\n            options: {\n                httpOnly: true,\n                sameSite: 'lax',\n                path: '/',\n                secure: \"development\" === 'production'\n            }\n        }\n    },\n    secret: process.env.NEXTAUTH_SECRET,\n    debug: \"development\" === 'development'\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmZfbmV4dGpzX215c3FsXFxzcmNcXGxpYlxcYXV0aC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tICduZXh0LWF1dGgnO1xuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFscyc7XG5pbXBvcnQgYmNyeXB0IGZyb20gJ2JjcnlwdGpzJztcbmltcG9ydCB7IGV4ZWN1dGVRdWVyeSB9IGZyb20gJ0AvbGliL2RiJztcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xuICAgICAgbmFtZTogJ0NyZWRlbnRpYWxzJyxcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiAnRW1haWwnLCB0eXBlOiAnZW1haWwnIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7IGxhYmVsOiAnUGFzc3dvcmQnLCB0eXBlOiAncGFzc3dvcmQnIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcbiAgICAgICAgaWYgKCFjcmVkZW50aWFscz8uZW1haWwgfHwgIWNyZWRlbnRpYWxzPy5wYXNzd29yZCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1c2VycyA9IGF3YWl0IGV4ZWN1dGVRdWVyeTxhbnlbXT4oe1xuICAgICAgICAgICAgcXVlcnk6ICdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGVtYWlsID0gPycsXG4gICAgICAgICAgICB2YWx1ZXM6IFtjcmVkZW50aWFscy5lbWFpbF1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh1c2Vycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHVzZXIgPSB1c2Vyc1swXTtcbiAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkVmFsaWQgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjcmVkZW50aWFscy5wYXNzd29yZCwgdXNlci5wYXNzd29yZCk7XG5cbiAgICAgICAgICBpZiAoIWlzUGFzc3dvcmRWYWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICAgICAgbmFtZTogYCR7dXNlci5maXJzdF9uYW1lfSAke3VzZXIubGFzdF9uYW1lfWAsXG4gICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgIGltYWdlOiB1c2VyLnByb2ZpbGVfcGljdHVyZSxcbiAgICAgICAgICAgIHVzZXJuYW1lOiB1c2VyLnVzZXJuYW1lXG4gICAgICAgICAgfTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdBdXRoZW50aWNhdGlvbiBlcnJvcjonLCBlcnJvcik7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICBdLFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciwgdHJpZ2dlciwgc2Vzc2lvbiB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICAgIHRva2VuLnVzZXJuYW1lID0gdXNlci51c2VybmFtZTtcbiAgICAgIH1cblxuICAgICAgLy8gSGFuZGxlIHNlc3Npb24gdXBkYXRlXG4gICAgICBpZiAodHJpZ2dlciA9PT0gJ3VwZGF0ZScgJiYgc2Vzc2lvbj8uaW1hZ2UpIHtcbiAgICAgICAgdG9rZW4ucGljdHVyZSA9IHNlc3Npb24uaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmlkID0gdG9rZW4uaWQgYXMgc3RyaW5nO1xuICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSB0b2tlbi51c2VybmFtZSBhcyBzdHJpbmc7XG5cbiAgICAgICAgLy8gSWYgdG9rZW4gaGFzIGEgcGljdHVyZSwgdXNlIGl0XG4gICAgICAgIGlmICh0b2tlbi5waWN0dXJlKSB7XG4gICAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gdG9rZW4ucGljdHVyZSBhcyBzdHJpbmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvYXV0aC9zaWduaW4nLFxuICAgIHNpZ25PdXQ6ICcvYXV0aC9zaWdub3V0JyxcbiAgICBlcnJvcjogJy9hdXRoL2Vycm9yJyxcbiAgICBuZXdVc2VyOiAnL2F1dGgvcmVnaXN0ZXInXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogJ2p3dCcsXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCwgLy8gMzAgZGF5c1xuICB9LFxuICBjb29raWVzOiB7XG4gICAgc2Vzc2lvblRva2VuOiB7XG4gICAgICBuYW1lOiBgbmV4dC1hdXRoLnNlc3Npb24tdG9rZW5gLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBodHRwT25seTogdHJ1ZSxcbiAgICAgICAgc2FtZVNpdGU6ICdsYXgnLFxuICAgICAgICBwYXRoOiAnLycsXG4gICAgICAgIHNlY3VyZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VjcmV0OiBwcm9jZXNzLmVudi5ORVhUQVVUSF9TRUNSRVQsXG4gIGRlYnVnOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jyxcbn07XG4iXSwibmFtZXMiOlsiQ3JlZGVudGlhbHNQcm92aWRlciIsImJjcnlwdCIsImV4ZWN1dGVRdWVyeSIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJsYWJlbCIsInR5cGUiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInVzZXJzIiwicXVlcnkiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJ1c2VyIiwiaXNQYXNzd29yZFZhbGlkIiwiY29tcGFyZSIsImlkIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImltYWdlIiwicHJvZmlsZV9waWN0dXJlIiwidXNlcm5hbWUiLCJlcnJvciIsImNvbnNvbGUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInRyaWdnZXIiLCJzZXNzaW9uIiwicGljdHVyZSIsInBhZ2VzIiwic2lnbkluIiwic2lnbk91dCIsIm5ld1VzZXIiLCJzdHJhdGVneSIsIm1heEFnZSIsImNvb2tpZXMiLCJzZXNzaW9uVG9rZW4iLCJvcHRpb25zIiwiaHR0cE9ubHkiLCJzYW1lU2l0ZSIsInBhdGgiLCJzZWN1cmUiLCJwcm9jZXNzIiwic2VjcmV0IiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiZGVidWciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   executeQuery: () => (/* binding */ executeQuery)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"(rsc)/./node_modules/mysql2/promise.js\");\n\n// Determine if we're using a remote database\nconst isRemoteDatabase = process.env.MYSQL_HOST !== 'localhost';\n// Create a connection pool with SSL support for remote databases\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0__.createPool({\n    host: process.env.MYSQL_HOST || 'localhost',\n    user: process.env.MYSQL_USER || 'root',\n    password: process.env.MYSQL_PASSWORD || '',\n    database: process.env.MYSQL_DATABASE || 'facebook_clone',\n    port: process.env.MYSQL_PORT ? parseInt(process.env.MYSQL_PORT) : 3306,\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0,\n    // Add SSL configuration for remote databases\n    ...isRemoteDatabase && {\n        ssl: {\n            rejectUnauthorized: false // Allow self-signed certificates\n        }\n    }\n});\nasync function executeQuery({ query, values }) {\n    try {\n        // If values is empty or undefined, use query directly\n        if (!values || values.length === 0) {\n            const [rows] = await pool.query(query);\n            return rows;\n        }\n        // Otherwise use prepared statement\n        const [rows] = await pool.execute(query, values);\n        return rows;\n    } catch (error) {\n        console.error('Database query error:', error);\n        throw error;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFtQztBQUVuQyw2Q0FBNkM7QUFDN0MsTUFBTUMsbUJBQW1CQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsS0FBSztBQUVwRCxpRUFBaUU7QUFDakUsTUFBTUMsT0FBT0wsc0RBQWdCLENBQUM7SUFDNUJPLE1BQU1MLFFBQVFDLEdBQUcsQ0FBQ0MsVUFBVSxJQUFJO0lBQ2hDSSxNQUFNTixRQUFRQyxHQUFHLENBQUNNLFVBQVUsSUFBSTtJQUNoQ0MsVUFBVVIsUUFBUUMsR0FBRyxDQUFDUSxjQUFjLElBQUk7SUFDeENDLFVBQVVWLFFBQVFDLEdBQUcsQ0FBQ1UsY0FBYyxJQUFJO0lBQ3hDQyxNQUFNWixRQUFRQyxHQUFHLENBQUNZLFVBQVUsR0FBR0MsU0FBU2QsUUFBUUMsR0FBRyxDQUFDWSxVQUFVLElBQUk7SUFDbEVFLG9CQUFvQjtJQUNwQkMsaUJBQWlCO0lBQ2pCQyxZQUFZO0lBQ1osNkNBQTZDO0lBQzdDLEdBQUlsQixvQkFBb0I7UUFDdEJtQixLQUFLO1lBQ0hDLG9CQUFvQixNQUFNLGlDQUFpQztRQUM3RDtJQUNGLENBQUM7QUFDSDtBQUVPLGVBQWVDLGFBQWdCLEVBQUVDLEtBQUssRUFBRUMsTUFBTSxFQUFxQztJQUN4RixJQUFJO1FBQ0Ysc0RBQXNEO1FBQ3RELElBQUksQ0FBQ0EsVUFBVUEsT0FBT0MsTUFBTSxLQUFLLEdBQUc7WUFDbEMsTUFBTSxDQUFDQyxLQUFLLEdBQUcsTUFBTXJCLEtBQUtrQixLQUFLLENBQUNBO1lBQ2hDLE9BQU9HO1FBQ1Q7UUFFQSxtQ0FBbUM7UUFDbkMsTUFBTSxDQUFDQSxLQUFLLEdBQUcsTUFBTXJCLEtBQUtzQixPQUFPLENBQUNKLE9BQU9DO1FBQ3pDLE9BQU9FO0lBQ1QsRUFBRSxPQUFPRSxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3ZDLE1BQU1BO0lBQ1I7QUFDRjtBQUVBLGlFQUFldkIsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtcmloclxcRGVza3RvcFxcaGlmbmZfbmV4dGpzX215c3FsXFxzcmNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG15c3FsIGZyb20gJ215c3FsMi9wcm9taXNlJztcblxuLy8gRGV0ZXJtaW5lIGlmIHdlJ3JlIHVzaW5nIGEgcmVtb3RlIGRhdGFiYXNlXG5jb25zdCBpc1JlbW90ZURhdGFiYXNlID0gcHJvY2Vzcy5lbnYuTVlTUUxfSE9TVCAhPT0gJ2xvY2FsaG9zdCc7XG5cbi8vIENyZWF0ZSBhIGNvbm5lY3Rpb24gcG9vbCB3aXRoIFNTTCBzdXBwb3J0IGZvciByZW1vdGUgZGF0YWJhc2VzXG5jb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gIGhvc3Q6IHByb2Nlc3MuZW52Lk1ZU1FMX0hPU1QgfHwgJ2xvY2FsaG9zdCcsXG4gIHVzZXI6IHByb2Nlc3MuZW52Lk1ZU1FMX1VTRVIgfHwgJ3Jvb3QnLFxuICBwYXNzd29yZDogcHJvY2Vzcy5lbnYuTVlTUUxfUEFTU1dPUkQgfHwgJycsXG4gIGRhdGFiYXNlOiBwcm9jZXNzLmVudi5NWVNRTF9EQVRBQkFTRSB8fCAnZmFjZWJvb2tfY2xvbmUnLFxuICBwb3J0OiBwcm9jZXNzLmVudi5NWVNRTF9QT1JUID8gcGFyc2VJbnQocHJvY2Vzcy5lbnYuTVlTUUxfUE9SVCkgOiAzMzA2LFxuICB3YWl0Rm9yQ29ubmVjdGlvbnM6IHRydWUsXG4gIGNvbm5lY3Rpb25MaW1pdDogMTAsXG4gIHF1ZXVlTGltaXQ6IDAsXG4gIC8vIEFkZCBTU0wgY29uZmlndXJhdGlvbiBmb3IgcmVtb3RlIGRhdGFiYXNlc1xuICAuLi4oaXNSZW1vdGVEYXRhYmFzZSAmJiB7XG4gICAgc3NsOiB7XG4gICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlIC8vIEFsbG93IHNlbGYtc2lnbmVkIGNlcnRpZmljYXRlc1xuICAgIH1cbiAgfSlcbn0pO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZVF1ZXJ5PFQ+KHsgcXVlcnksIHZhbHVlcyB9OiB7IHF1ZXJ5OiBzdHJpbmc7IHZhbHVlcz86IGFueVtdIH0pOiBQcm9taXNlPFQ+IHtcbiAgdHJ5IHtcbiAgICAvLyBJZiB2YWx1ZXMgaXMgZW1wdHkgb3IgdW5kZWZpbmVkLCB1c2UgcXVlcnkgZGlyZWN0bHlcbiAgICBpZiAoIXZhbHVlcyB8fCB2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zdCBbcm93c10gPSBhd2FpdCBwb29sLnF1ZXJ5KHF1ZXJ5KTtcbiAgICAgIHJldHVybiByb3dzIGFzIFQ7XG4gICAgfVxuXG4gICAgLy8gT3RoZXJ3aXNlIHVzZSBwcmVwYXJlZCBzdGF0ZW1lbnRcbiAgICBjb25zdCBbcm93c10gPSBhd2FpdCBwb29sLmV4ZWN1dGUocXVlcnksIHZhbHVlcyk7XG4gICAgcmV0dXJuIHJvd3MgYXMgVDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdEYXRhYmFzZSBxdWVyeSBlcnJvcjonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9vbDtcbiJdLCJuYW1lcyI6WyJteXNxbCIsImlzUmVtb3RlRGF0YWJhc2UiLCJwcm9jZXNzIiwiZW52IiwiTVlTUUxfSE9TVCIsInBvb2wiLCJjcmVhdGVQb29sIiwiaG9zdCIsInVzZXIiLCJNWVNRTF9VU0VSIiwicGFzc3dvcmQiLCJNWVNRTF9QQVNTV09SRCIsImRhdGFiYXNlIiwiTVlTUUxfREFUQUJBU0UiLCJwb3J0IiwiTVlTUUxfUE9SVCIsInBhcnNlSW50Iiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCIsInNzbCIsInJlamVjdFVuYXV0aG9yaXplZCIsImV4ZWN1dGVRdWVyeSIsInF1ZXJ5IiwidmFsdWVzIiwibGVuZ3RoIiwicm93cyIsImV4ZWN1dGUiLCJlcnJvciIsImNvbnNvbGUiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/long","vendor-chunks/oauth","vendor-chunks/lru-cache","vendor-chunks/object-hash","vendor-chunks/denque","vendor-chunks/preact","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/generate-function","vendor-chunks/safer-buffer","vendor-chunks/uuid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ffriends%2Frequests%2Froute&page=%2Fapi%2Ffriends%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ffriends%2Frequests%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();