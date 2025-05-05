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
exports.id = "app/api/users/[username]/route";
exports.ids = ["app/api/users/[username]/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_users_username_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/[username]/route.ts */ \"(rsc)/./src/app/api/users/[username]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/[username]/route\",\n        pathname: \"/api/users/[username]\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/[username]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mrihr\\\\Desktop\\\\hifnf_nextjs_mysql\\\\src\\\\app\\\\api\\\\users\\\\[username]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_users_username_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRiU1QnVzZXJuYW1lJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VycyUyRiU1QnVzZXJuYW1lJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcnMlMkYlNUJ1c2VybmFtZSU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtcmlociU1Q0Rlc2t0b3AlNUNoaWZuZl9uZXh0anNfbXlzcWwlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q21yaWhyJTVDRGVza3RvcCU1Q2hpZm5mX25leHRqc19teXNxbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxtcmloclxcXFxEZXNrdG9wXFxcXGhpZm5mX25leHRqc19teXNxbFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxbdXNlcm5hbWVdXFxcXHJvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcInN0YW5kYWxvbmVcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvdXNlcnMvW3VzZXJuYW1lXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VzZXJzL1t1c2VybmFtZV1cIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3VzZXJzL1t1c2VybmFtZV0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxtcmloclxcXFxEZXNrdG9wXFxcXGhpZm5mX25leHRqc19teXNxbFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFx1c2Vyc1xcXFxbdXNlcm5hbWVdXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/users/[username]/route.ts":
/*!***********************************************!*\
  !*** ./src/app/api/users/[username]/route.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n\n\n\n\nasync function GET(_req, { params }) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        // Fix: Don't use trim() directly on params.username\n        const username = decodeURIComponent(params.username);\n        console.log('API route received username:', username);\n        console.log('Fetching profile for username:', username);\n        console.log('Session user:', session?.user?.id ? 'Authenticated' : 'Not authenticated');\n        // Get user profile\n        const users = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: `\n        SELECT\n          id, username, email, first_name, last_name, profile_picture, cover_photo,\n          bio, location, website, date_of_birth, created_at\n        FROM users\n        WHERE TRIM(username) LIKE TRIM(?)\n      `,\n            values: [\n                username\n            ]\n        });\n        console.log('User query result:', users);\n        if (!users || users.length === 0) {\n            console.log('User not found for username:', username);\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'User not found'\n            }, {\n                status: 404\n            });\n        }\n        let user = {\n            ...users[0]\n        };\n        // Check if the current user is friends with the profile user\n        let isFriend = false;\n        let friendshipStatus = null;\n        let isCurrentUser = false;\n        if (session?.user?.id) {\n            // Check if this is the current user's profile\n            isCurrentUser = user.id === session.user.id;\n            // If not the current user, check friendship status\n            if (!isCurrentUser) {\n                try {\n                    const friendships = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n                        query: `\n              SELECT status\n              FROM friendships\n              WHERE\n                (requester_id = ? AND addressee_id = ?) OR\n                (requester_id = ? AND addressee_id = ?)\n            `,\n                        values: [\n                            session.user.id,\n                            user.id,\n                            user.id,\n                            session.user.id\n                        ]\n                    });\n                    console.log('Friendship query result:', friendships);\n                    if (friendships.length > 0) {\n                        friendshipStatus = friendships[0].status;\n                        isFriend = friendshipStatus === 'accepted';\n                    }\n                } catch (error) {\n                    console.error('Error checking friendship status:', error);\n                // Continue without friendship info if there's an error\n                }\n            }\n        }\n        // Get post count\n        let postCount = 0;\n        try {\n            const postCountResult = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n                query: 'SELECT COUNT(*) as count FROM posts WHERE user_id = ?',\n                values: [\n                    user.id\n                ]\n            });\n            console.log('Post count result:', postCountResult);\n            postCount = postCountResult[0]?.count || 0;\n        } catch (error) {\n            console.error('Error getting post count:', error);\n        }\n        // Get friend count\n        let friendCount = 0;\n        try {\n            const friendCountResult = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n                query: `\n          SELECT COUNT(*) as count\n          FROM friendships\n          WHERE\n            ((requester_id = ? OR addressee_id = ?)) AND\n            status = 'accepted'\n        `,\n                values: [\n                    user.id,\n                    user.id\n                ]\n            });\n            console.log('Friend count result:', friendCountResult);\n            friendCount = friendCountResult[0]?.count || 0;\n        } catch (error) {\n            console.error('Error getting friend count:', error);\n        }\n        // Remove sensitive information if not the current user\n        if (!isCurrentUser) {\n            // Create a new user object without email\n            const { email, ...userWithoutEmail } = user;\n            user = userWithoutEmail;\n            // Format date of birth to just show month and day (not year)\n            if (user.date_of_birth) {\n                const date = new Date(user.date_of_birth);\n                user.date_of_birth = date.toLocaleDateString('en-US', {\n                    month: 'long',\n                    day: 'numeric'\n                });\n            }\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            user,\n            isFriend,\n            friendshipStatus,\n            isCurrentUser,\n            postCount,\n            friendCount\n        });\n    } catch (error) {\n        console.error('Error fetching user profile:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS91c2Vycy9bdXNlcm5hbWVdL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ047QUFDVDtBQUNEO0FBR2pDLGVBQWVJLElBQ3BCQyxJQUFpQixFQUNqQixFQUFFQyxNQUFNLEVBQW9DO0lBRTVDLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1OLGdFQUFnQkEsQ0FBQ0Msa0RBQVdBO1FBQ2xELG9EQUFvRDtRQUNwRCxNQUFNTSxXQUFXQyxtQkFBbUJILE9BQU9FLFFBQVE7UUFFbkRFLFFBQVFDLEdBQUcsQ0FBQyxnQ0FBZ0NIO1FBRTVDRSxRQUFRQyxHQUFHLENBQUMsa0NBQWtDSDtRQUM5Q0UsUUFBUUMsR0FBRyxDQUFDLGlCQUFpQkosU0FBU0ssTUFBTUMsS0FBSyxrQkFBa0I7UUFFbkUsbUJBQW1CO1FBQ25CLE1BQU1DLFFBQVEsTUFBTVgscURBQVlBLENBQWdCO1lBQzlDWSxPQUFPLENBQUM7Ozs7OztNQU1SLENBQUM7WUFDREMsUUFBUTtnQkFBQ1I7YUFBUztRQUNwQjtRQUVBRSxRQUFRQyxHQUFHLENBQUMsc0JBQXNCRztRQUVsQyxJQUFJLENBQUNBLFNBQVNBLE1BQU1HLE1BQU0sS0FBSyxHQUFHO1lBQ2hDUCxRQUFRQyxHQUFHLENBQUMsZ0NBQWdDSDtZQUM1QyxPQUFPUixxREFBWUEsQ0FBQ2tCLElBQUksQ0FDdEI7Z0JBQUVDLFNBQVM7WUFBaUIsR0FDNUI7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLElBQUlSLE9BQU87WUFBRSxHQUFHRSxLQUFLLENBQUMsRUFBRTtRQUFDO1FBRXpCLDZEQUE2RDtRQUM3RCxJQUFJTyxXQUFXO1FBQ2YsSUFBSUMsbUJBQW1CO1FBQ3ZCLElBQUlDLGdCQUFnQjtRQUVwQixJQUFJaEIsU0FBU0ssTUFBTUMsSUFBSTtZQUNyQiw4Q0FBOEM7WUFDOUNVLGdCQUFnQlgsS0FBS0MsRUFBRSxLQUFLTixRQUFRSyxJQUFJLENBQUNDLEVBQUU7WUFFM0MsbURBQW1EO1lBQ25ELElBQUksQ0FBQ1UsZUFBZTtnQkFDbEIsSUFBSTtvQkFDRixNQUFNQyxjQUFjLE1BQU1yQixxREFBWUEsQ0FBUTt3QkFDNUNZLE9BQU8sQ0FBQzs7Ozs7O1lBTVIsQ0FBQzt3QkFDREMsUUFBUTs0QkFBQ1QsUUFBUUssSUFBSSxDQUFDQyxFQUFFOzRCQUFFRCxLQUFLQyxFQUFFOzRCQUFFRCxLQUFLQyxFQUFFOzRCQUFFTixRQUFRSyxJQUFJLENBQUNDLEVBQUU7eUJBQUM7b0JBQzlEO29CQUVBSCxRQUFRQyxHQUFHLENBQUMsNEJBQTRCYTtvQkFFeEMsSUFBSUEsWUFBWVAsTUFBTSxHQUFHLEdBQUc7d0JBQzFCSyxtQkFBbUJFLFdBQVcsQ0FBQyxFQUFFLENBQUNKLE1BQU07d0JBQ3hDQyxXQUFXQyxxQkFBcUI7b0JBQ2xDO2dCQUNGLEVBQUUsT0FBT0csT0FBTztvQkFDZGYsUUFBUWUsS0FBSyxDQUFDLHFDQUFxQ0E7Z0JBQ25ELHVEQUF1RDtnQkFDekQ7WUFDRjtRQUNGO1FBRUEsaUJBQWlCO1FBQ2pCLElBQUlDLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLGtCQUFrQixNQUFNeEIscURBQVlBLENBQVE7Z0JBQ2hEWSxPQUFPO2dCQUNQQyxRQUFRO29CQUFDSixLQUFLQyxFQUFFO2lCQUFDO1lBQ25CO1lBRUFILFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JnQjtZQUNsQ0QsWUFBWUMsZUFBZSxDQUFDLEVBQUUsRUFBRUMsU0FBUztRQUMzQyxFQUFFLE9BQU9ILE9BQU87WUFDZGYsUUFBUWUsS0FBSyxDQUFDLDZCQUE2QkE7UUFDN0M7UUFFQSxtQkFBbUI7UUFDbkIsSUFBSUksY0FBYztRQUNsQixJQUFJO1lBQ0YsTUFBTUMsb0JBQW9CLE1BQU0zQixxREFBWUEsQ0FBUTtnQkFDbERZLE9BQU8sQ0FBQzs7Ozs7O1FBTVIsQ0FBQztnQkFDREMsUUFBUTtvQkFBQ0osS0FBS0MsRUFBRTtvQkFBRUQsS0FBS0MsRUFBRTtpQkFBQztZQUM1QjtZQUVBSCxRQUFRQyxHQUFHLENBQUMsd0JBQXdCbUI7WUFDcENELGNBQWNDLGlCQUFpQixDQUFDLEVBQUUsRUFBRUYsU0FBUztRQUMvQyxFQUFFLE9BQU9ILE9BQU87WUFDZGYsUUFBUWUsS0FBSyxDQUFDLCtCQUErQkE7UUFDL0M7UUFFQSx1REFBdUQ7UUFDdkQsSUFBSSxDQUFDRixlQUFlO1lBQ2xCLHlDQUF5QztZQUN6QyxNQUFNLEVBQUVRLEtBQUssRUFBRSxHQUFHQyxrQkFBa0IsR0FBR3BCO1lBQ3ZDQSxPQUFPb0I7WUFFUCw2REFBNkQ7WUFDN0QsSUFBSXBCLEtBQUtxQixhQUFhLEVBQUU7Z0JBQ3RCLE1BQU1DLE9BQU8sSUFBSUMsS0FBS3ZCLEtBQUtxQixhQUFhO2dCQUN4Q3JCLEtBQUtxQixhQUFhLEdBQUdDLEtBQUtFLGtCQUFrQixDQUFDLFNBQVM7b0JBQUVDLE9BQU87b0JBQVFDLEtBQUs7Z0JBQVU7WUFDeEY7UUFDRjtRQUVBLE9BQU90QyxxREFBWUEsQ0FBQ2tCLElBQUksQ0FBQztZQUN2Qk47WUFDQVM7WUFDQUM7WUFDQUM7WUFDQUc7WUFDQUc7UUFDRjtJQUNGLEVBQUUsT0FBT0osT0FBTztRQUNkZixRQUFRZSxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPekIscURBQVlBLENBQUNrQixJQUFJLENBQ3RCO1lBQUVDLFNBQVM7UUFBd0IsR0FDbkM7WUFBRUMsUUFBUTtRQUFJO0lBRWxCO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbXJpaHJcXERlc2t0b3BcXGhpZm5mX25leHRqc19teXNxbFxcc3JjXFxhcHBcXGFwaVxcdXNlcnNcXFt1c2VybmFtZV1cXHJvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tICduZXh0L3NlcnZlcic7XG5pbXBvcnQgeyBnZXRTZXJ2ZXJTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL25leHQnO1xuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tICdAL2xpYi9hdXRoJztcbmltcG9ydCB7IGV4ZWN1dGVRdWVyeSB9IGZyb20gJ0AvbGliL2RiJztcbmltcG9ydCB7IFVzZXJQcm9maWxlIH0gZnJvbSAnQC90eXBlcyc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoXG4gIF9yZXE6IE5leHRSZXF1ZXN0LFxuICB7IHBhcmFtcyB9OiB7IHBhcmFtczogeyB1c2VybmFtZTogc3RyaW5nIH0gfVxuKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xuICAgIC8vIEZpeDogRG9uJ3QgdXNlIHRyaW0oKSBkaXJlY3RseSBvbiBwYXJhbXMudXNlcm5hbWVcbiAgICBjb25zdCB1c2VybmFtZSA9IGRlY29kZVVSSUNvbXBvbmVudChwYXJhbXMudXNlcm5hbWUpO1xuXG4gICAgY29uc29sZS5sb2coJ0FQSSByb3V0ZSByZWNlaXZlZCB1c2VybmFtZTonLCB1c2VybmFtZSk7XG5cbiAgICBjb25zb2xlLmxvZygnRmV0Y2hpbmcgcHJvZmlsZSBmb3IgdXNlcm5hbWU6JywgdXNlcm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKCdTZXNzaW9uIHVzZXI6Jywgc2Vzc2lvbj8udXNlcj8uaWQgPyAnQXV0aGVudGljYXRlZCcgOiAnTm90IGF1dGhlbnRpY2F0ZWQnKTtcblxuICAgIC8vIEdldCB1c2VyIHByb2ZpbGVcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IGV4ZWN1dGVRdWVyeTxVc2VyUHJvZmlsZVtdPih7XG4gICAgICBxdWVyeTogYFxuICAgICAgICBTRUxFQ1RcbiAgICAgICAgICBpZCwgdXNlcm5hbWUsIGVtYWlsLCBmaXJzdF9uYW1lLCBsYXN0X25hbWUsIHByb2ZpbGVfcGljdHVyZSwgY292ZXJfcGhvdG8sXG4gICAgICAgICAgYmlvLCBsb2NhdGlvbiwgd2Vic2l0ZSwgZGF0ZV9vZl9iaXJ0aCwgY3JlYXRlZF9hdFxuICAgICAgICBGUk9NIHVzZXJzXG4gICAgICAgIFdIRVJFIFRSSU0odXNlcm5hbWUpIExJS0UgVFJJTSg/KVxuICAgICAgYCxcbiAgICAgIHZhbHVlczogW3VzZXJuYW1lXVxuICAgIH0pO1xuXG4gICAgY29uc29sZS5sb2coJ1VzZXIgcXVlcnkgcmVzdWx0OicsIHVzZXJzKTtcblxuICAgIGlmICghdXNlcnMgfHwgdXNlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnVXNlciBub3QgZm91bmQgZm9yIHVzZXJuYW1lOicsIHVzZXJuYW1lKTtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBtZXNzYWdlOiAnVXNlciBub3QgZm91bmQnIH0sXG4gICAgICAgIHsgc3RhdHVzOiA0MDQgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgdXNlciA9IHsgLi4udXNlcnNbMF0gfTtcblxuICAgIC8vIENoZWNrIGlmIHRoZSBjdXJyZW50IHVzZXIgaXMgZnJpZW5kcyB3aXRoIHRoZSBwcm9maWxlIHVzZXJcbiAgICBsZXQgaXNGcmllbmQgPSBmYWxzZTtcbiAgICBsZXQgZnJpZW5kc2hpcFN0YXR1cyA9IG51bGw7XG4gICAgbGV0IGlzQ3VycmVudFVzZXIgPSBmYWxzZTtcblxuICAgIGlmIChzZXNzaW9uPy51c2VyPy5pZCkge1xuICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyB0aGUgY3VycmVudCB1c2VyJ3MgcHJvZmlsZVxuICAgICAgaXNDdXJyZW50VXNlciA9IHVzZXIuaWQgPT09IHNlc3Npb24udXNlci5pZDtcblxuICAgICAgLy8gSWYgbm90IHRoZSBjdXJyZW50IHVzZXIsIGNoZWNrIGZyaWVuZHNoaXAgc3RhdHVzXG4gICAgICBpZiAoIWlzQ3VycmVudFVzZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBmcmllbmRzaGlwcyA9IGF3YWl0IGV4ZWN1dGVRdWVyeTxhbnlbXT4oe1xuICAgICAgICAgICAgcXVlcnk6IGBcbiAgICAgICAgICAgICAgU0VMRUNUIHN0YXR1c1xuICAgICAgICAgICAgICBGUk9NIGZyaWVuZHNoaXBzXG4gICAgICAgICAgICAgIFdIRVJFXG4gICAgICAgICAgICAgICAgKHJlcXVlc3Rlcl9pZCA9ID8gQU5EIGFkZHJlc3NlZV9pZCA9ID8pIE9SXG4gICAgICAgICAgICAgICAgKHJlcXVlc3Rlcl9pZCA9ID8gQU5EIGFkZHJlc3NlZV9pZCA9ID8pXG4gICAgICAgICAgICBgLFxuICAgICAgICAgICAgdmFsdWVzOiBbc2Vzc2lvbi51c2VyLmlkLCB1c2VyLmlkLCB1c2VyLmlkLCBzZXNzaW9uLnVzZXIuaWRdXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBjb25zb2xlLmxvZygnRnJpZW5kc2hpcCBxdWVyeSByZXN1bHQ6JywgZnJpZW5kc2hpcHMpO1xuXG4gICAgICAgICAgaWYgKGZyaWVuZHNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZyaWVuZHNoaXBTdGF0dXMgPSBmcmllbmRzaGlwc1swXS5zdGF0dXM7XG4gICAgICAgICAgICBpc0ZyaWVuZCA9IGZyaWVuZHNoaXBTdGF0dXMgPT09ICdhY2NlcHRlZCc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNoZWNraW5nIGZyaWVuZHNoaXAgc3RhdHVzOicsIGVycm9yKTtcbiAgICAgICAgICAvLyBDb250aW51ZSB3aXRob3V0IGZyaWVuZHNoaXAgaW5mbyBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBHZXQgcG9zdCBjb3VudFxuICAgIGxldCBwb3N0Q291bnQgPSAwO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwb3N0Q291bnRSZXN1bHQgPSBhd2FpdCBleGVjdXRlUXVlcnk8YW55W10+KHtcbiAgICAgICAgcXVlcnk6ICdTRUxFQ1QgQ09VTlQoKikgYXMgY291bnQgRlJPTSBwb3N0cyBXSEVSRSB1c2VyX2lkID0gPycsXG4gICAgICAgIHZhbHVlczogW3VzZXIuaWRdXG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coJ1Bvc3QgY291bnQgcmVzdWx0OicsIHBvc3RDb3VudFJlc3VsdCk7XG4gICAgICBwb3N0Q291bnQgPSBwb3N0Q291bnRSZXN1bHRbMF0/LmNvdW50IHx8IDA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgcG9zdCBjb3VudDonLCBlcnJvcik7XG4gICAgfVxuXG4gICAgLy8gR2V0IGZyaWVuZCBjb3VudFxuICAgIGxldCBmcmllbmRDb3VudCA9IDA7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZyaWVuZENvdW50UmVzdWx0ID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5PGFueVtdPih7XG4gICAgICAgIHF1ZXJ5OiBgXG4gICAgICAgICAgU0VMRUNUIENPVU5UKCopIGFzIGNvdW50XG4gICAgICAgICAgRlJPTSBmcmllbmRzaGlwc1xuICAgICAgICAgIFdIRVJFXG4gICAgICAgICAgICAoKHJlcXVlc3Rlcl9pZCA9ID8gT1IgYWRkcmVzc2VlX2lkID0gPykpIEFORFxuICAgICAgICAgICAgc3RhdHVzID0gJ2FjY2VwdGVkJ1xuICAgICAgICBgLFxuICAgICAgICB2YWx1ZXM6IFt1c2VyLmlkLCB1c2VyLmlkXVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKCdGcmllbmQgY291bnQgcmVzdWx0OicsIGZyaWVuZENvdW50UmVzdWx0KTtcbiAgICAgIGZyaWVuZENvdW50ID0gZnJpZW5kQ291bnRSZXN1bHRbMF0/LmNvdW50IHx8IDA7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGdldHRpbmcgZnJpZW5kIGNvdW50OicsIGVycm9yKTtcbiAgICB9XG5cbiAgICAvLyBSZW1vdmUgc2Vuc2l0aXZlIGluZm9ybWF0aW9uIGlmIG5vdCB0aGUgY3VycmVudCB1c2VyXG4gICAgaWYgKCFpc0N1cnJlbnRVc2VyKSB7XG4gICAgICAvLyBDcmVhdGUgYSBuZXcgdXNlciBvYmplY3Qgd2l0aG91dCBlbWFpbFxuICAgICAgY29uc3QgeyBlbWFpbCwgLi4udXNlcldpdGhvdXRFbWFpbCB9ID0gdXNlcjtcbiAgICAgIHVzZXIgPSB1c2VyV2l0aG91dEVtYWlsIGFzIFVzZXJQcm9maWxlO1xuXG4gICAgICAvLyBGb3JtYXQgZGF0ZSBvZiBiaXJ0aCB0byBqdXN0IHNob3cgbW9udGggYW5kIGRheSAobm90IHllYXIpXG4gICAgICBpZiAodXNlci5kYXRlX29mX2JpcnRoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh1c2VyLmRhdGVfb2ZfYmlydGgpO1xuICAgICAgICB1c2VyLmRhdGVfb2ZfYmlydGggPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygnZW4tVVMnLCB7IG1vbnRoOiAnbG9uZycsIGRheTogJ251bWVyaWMnIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7XG4gICAgICB1c2VyLFxuICAgICAgaXNGcmllbmQsXG4gICAgICBmcmllbmRzaGlwU3RhdHVzLFxuICAgICAgaXNDdXJyZW50VXNlcixcbiAgICAgIHBvc3RDb3VudCxcbiAgICAgIGZyaWVuZENvdW50XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBwcm9maWxlOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwiZXhlY3V0ZVF1ZXJ5IiwiR0VUIiwiX3JlcSIsInBhcmFtcyIsInNlc3Npb24iLCJ1c2VybmFtZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyIiwiaWQiLCJ1c2VycyIsInF1ZXJ5IiwidmFsdWVzIiwibGVuZ3RoIiwianNvbiIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJpc0ZyaWVuZCIsImZyaWVuZHNoaXBTdGF0dXMiLCJpc0N1cnJlbnRVc2VyIiwiZnJpZW5kc2hpcHMiLCJlcnJvciIsInBvc3RDb3VudCIsInBvc3RDb3VudFJlc3VsdCIsImNvdW50IiwiZnJpZW5kQ291bnQiLCJmcmllbmRDb3VudFJlc3VsdCIsImVtYWlsIiwidXNlcldpdGhvdXRFbWFpbCIsImRhdGVfb2ZfYmlydGgiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsIm1vbnRoIiwiZGF5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/users/[username]/route.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/long","vendor-chunks/oauth","vendor-chunks/lru-cache","vendor-chunks/object-hash","vendor-chunks/denque","vendor-chunks/preact","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();