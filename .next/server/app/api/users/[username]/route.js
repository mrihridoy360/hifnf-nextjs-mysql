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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_users_username_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/users/[username]/route.ts */ \"(rsc)/./src/app/api/users/[username]/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/users/[username]/route\",\n        pathname: \"/api/users/[username]\",\n        filename: \"route\",\n        bundlePath: \"app/api/users/[username]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mrihr\\\\Desktop\\\\hifnf_nextjs_mysql\\\\src\\\\app\\\\api\\\\users\\\\[username]\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_users_username_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ1c2VycyUyRiU1QnVzZXJuYW1lJTVEJTJGcm91dGUmcGFnZT0lMkZhcGklMkZ1c2VycyUyRiU1QnVzZXJuYW1lJTVEJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGdXNlcnMlMkYlNUJ1c2VybmFtZSU1RCUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtcmlociU1Q0Rlc2t0b3AlNUNoaWZuZl9uZXh0anNfbXlzcWwlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q21yaWhyJTVDRGVza3RvcCU1Q2hpZm5mX25leHRqc19teXNxbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUM7QUFDdEg7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXG1yaWhyXFxcXERlc2t0b3BcXFxcaGlmbmZfbmV4dGpzX215c3FsXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHVzZXJzXFxcXFt1c2VybmFtZV1cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VzZXJzL1t1c2VybmFtZV0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS91c2Vycy9bdXNlcm5hbWVdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS91c2Vycy9bdXNlcm5hbWVdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbXJpaHJcXFxcRGVza3RvcFxcXFxoaWZuZl9uZXh0anNfbXlzcWxcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxcdXNlcnNcXFxcW3VzZXJuYW1lXVxcXFxyb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/long","vendor-chunks/oauth","vendor-chunks/lru-cache","vendor-chunks/object-hash","vendor-chunks/denque","vendor-chunks/preact","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/generate-function","vendor-chunks/safer-buffer"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fusers%2F%5Busername%5D%2Froute&page=%2Fapi%2Fusers%2F%5Busername%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fusers%2F%5Busername%5D%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();