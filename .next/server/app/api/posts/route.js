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
exports.id = "app/api/posts/route";
exports.ids = ["app/api/posts/route"];
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

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_posts_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/posts/route.ts */ \"(rsc)/./src/app/api/posts/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/posts/route\",\n        pathname: \"/api/posts\",\n        filename: \"route\",\n        bundlePath: \"app/api/posts/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\mrihr\\\\Desktop\\\\hifnf_nextjs_mysql\\\\src\\\\app\\\\api\\\\posts\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_mrihr_Desktop_hifnf_nextjs_mysql_src_app_api_posts_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwb3N0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcG9zdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwb3N0cyUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNtcmlociU1Q0Rlc2t0b3AlNUNoaWZuZl9uZXh0anNfbXlzcWwlNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q21yaWhyJTVDRGVza3RvcCU1Q2hpZm5mX25leHRqc19teXNxbCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD1zdGFuZGFsb25lJnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxtcmloclxcXFxEZXNrdG9wXFxcXGhpZm5mX25leHRqc19teXNxbFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwb3N0c1xcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJzdGFuZGFsb25lXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Bvc3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcG9zdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Bvc3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcbXJpaHJcXFxcRGVza3RvcFxcXFxoaWZuZl9uZXh0anNfbXlzcWxcXFxcc3JjXFxcXGFwcFxcXFxhcGlcXFxccG9zdHNcXFxccm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/posts/route.ts":
/*!************************************!*\
  !*** ./src/app/api/posts/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ \"(rsc)/./node_modules/uuid/dist/esm/v4.js\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _lib_ensureUploadDirs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/lib/ensureUploadDirs */ \"(rsc)/./src/lib/ensureUploadDirs.ts\");\n\n\n\n\n\n\nasync function GET(req) {\n    try {\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        const userId = session?.user?.id;\n        // Get query parameters\n        const url = new URL(req.url);\n        const limit = parseInt(url.searchParams.get('limit') || '10');\n        const offset = parseInt(url.searchParams.get('offset') || '0');\n        // Simplified query to avoid prepared statement issues\n        let query = `\n      SELECT\n        p.*,\n        u.id as author_id,\n        u.username,\n        u.first_name,\n        u.last_name,\n        u.profile_picture,\n        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'like') AS likes_count,\n        (SELECT COUNT(*) FROM reactions WHERE post_id = p.id AND reaction_type = 'dislike') AS dislikes_count,\n        (SELECT COUNT(*) FROM comments WHERE post_id = p.id) AS comments_count,\n        ${userId ? `EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = '${userId}' AND reaction_type = 'like')` : 'FALSE'} AS liked_by_user,\n        ${userId ? `EXISTS(SELECT 1 FROM reactions WHERE post_id = p.id AND user_id = '${userId}' AND reaction_type = 'dislike')` : 'FALSE'} AS disliked_by_user,\n        ${userId ? `(SELECT reaction_type FROM reactions WHERE post_id = p.id AND user_id = '${userId}')` : 'NULL'} AS user_reaction\n      FROM posts p\n      JOIN users u ON p.user_id = u.id\n      ORDER BY p.created_at DESC\n      LIMIT ${limit} OFFSET ${offset}\n    `;\n        console.log('Fetching posts with query:', query);\n        const posts = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query,\n            values: []\n        });\n        // Log the first post's profile picture for debugging\n        if (posts.length > 0) {\n            console.log('First post user profile picture:', posts[0].user?.profile_picture);\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            posts\n        });\n    } catch (error) {\n        console.error('Error fetching posts:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        // Ensure upload directories exist\n        (0,_lib_ensureUploadDirs__WEBPACK_IMPORTED_MODULE_4__.ensureUploadDirectories)();\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(_lib_auth__WEBPACK_IMPORTED_MODULE_2__.authOptions);\n        if (!session?.user?.id) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Unauthorized'\n            }, {\n                status: 401\n            });\n        }\n        // Handle form data for post creation\n        const formData = await req.formData();\n        const content = formData.get('content');\n        const privacy = formData.get('privacy') || 'public';\n        // Check if we have direct URLs from the separate upload endpoint\n        const directImageUrl = formData.get('imageUrl');\n        const directVideoUrl = formData.get('videoUrl');\n        // Get feeling data if available\n        const feeling = formData.get('feeling');\n        const feelingEmoji = formData.get('feelingEmoji');\n        // Or if we have a media file directly uploaded here\n        const media = formData.get('media');\n        // Validate input\n        if (!content && !media && !directImageUrl && !directVideoUrl) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                message: 'Post must have content or media'\n            }, {\n                status: 400\n            });\n        }\n        // Initialize URLs\n        let imageUrl = directImageUrl || null;\n        let videoUrl = directVideoUrl || null;\n        // Handle file upload if media is provided directly\n        if (media) {\n            const { uploadFile } = await __webpack_require__.e(/*! import() */ \"_rsc_src_lib_fileUpload_ts-_59981\").then(__webpack_require__.bind(__webpack_require__, /*! @/lib/fileUpload */ \"(rsc)/./src/lib/fileUpload.ts\"));\n            const result = await uploadFile(media);\n            if (!result.success) {\n                return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                    message: result.error || 'Failed to upload media'\n                }, {\n                    status: 400\n                });\n            }\n            // Set the appropriate URL based on file type\n            if (result.fileType === 'image') {\n                imageUrl = result.url || null;\n            } else if (result.fileType === 'video') {\n                videoUrl = result.url || null;\n            }\n        }\n        // Create post\n        const postId = (0,uuid__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: `\n        INSERT INTO posts (\n          id, user_id, content, image_url, video_url, feeling, feeling_emoji, privacy\n        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)\n      `,\n            values: [\n                postId,\n                session.user.id,\n                content,\n                imageUrl,\n                videoUrl,\n                feeling || null,\n                feelingEmoji || null,\n                privacy\n            ]\n        });\n        // Get the created post with user info\n        const posts = await (0,_lib_db__WEBPACK_IMPORTED_MODULE_3__.executeQuery)({\n            query: `\n        SELECT\n          p.*,\n          u.id as user_id,\n          u.username,\n          u.first_name,\n          u.last_name,\n          u.profile_picture,\n          0 AS likes_count,\n          0 AS dislikes_count,\n          0 AS comments_count,\n          FALSE AS liked_by_user,\n          FALSE AS disliked_by_user,\n          NULL AS user_reaction\n        FROM posts p\n        JOIN users u ON p.user_id = u.id\n        WHERE p.id = ?\n      `,\n            values: [\n                postId\n            ]\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Post created successfully',\n            post: posts[0]\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error('Error creating post:', error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: 'Internal server error'\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssQ0FBQyx3QkFBd0JBO1FBQ3RDLE9BQU81QixxREFBWUEsQ0FBQzJCLElBQUksQ0FDdEI7WUFBRUUsU0FBUztRQUF3QixHQUNuQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxtcmloclxcRGVza3RvcFxcaGlmbmZfbmV4dGpzX215c3FsXFxzcmNcXGFwcFxcYXBpXFxwb3N0c1xccm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvbmV4dCc7XG5pbXBvcnQgeyBhdXRoT3B0aW9ucyB9IGZyb20gJ0AvbGliL2F1dGgnO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XG5pbXBvcnQgeyBleGVjdXRlUXVlcnkgfSBmcm9tICdAL2xpYi9kYic7XG5pbXBvcnQgeyBQb3N0IH0gZnJvbSAnQC90eXBlcyc7XG5pbXBvcnQgeyBlbnN1cmVVcGxvYWREaXJlY3RvcmllcyB9IGZyb20gJ0AvbGliL2Vuc3VyZVVwbG9hZERpcnMnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XG4gICAgY29uc3QgdXNlcklkID0gc2Vzc2lvbj8udXNlcj8uaWQ7XG5cbiAgICAvLyBHZXQgcXVlcnkgcGFyYW1ldGVyc1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocmVxLnVybCk7XG4gICAgY29uc3QgbGltaXQgPSBwYXJzZUludCh1cmwuc2VhcmNoUGFyYW1zLmdldCgnbGltaXQnKSB8fCAnMTAnKTtcbiAgICBjb25zdCBvZmZzZXQgPSBwYXJzZUludCh1cmwuc2VhcmNoUGFyYW1zLmdldCgnb2Zmc2V0JykgfHwgJzAnKTtcblxuICAgIC8vIFNpbXBsaWZpZWQgcXVlcnkgdG8gYXZvaWQgcHJlcGFyZWQgc3RhdGVtZW50IGlzc3Vlc1xuICAgIGxldCBxdWVyeSA9IGBcbiAgICAgIFNFTEVDVFxuICAgICAgICBwLiosXG4gICAgICAgIHUuaWQgYXMgYXV0aG9yX2lkLFxuICAgICAgICB1LnVzZXJuYW1lLFxuICAgICAgICB1LmZpcnN0X25hbWUsXG4gICAgICAgIHUubGFzdF9uYW1lLFxuICAgICAgICB1LnByb2ZpbGVfcGljdHVyZSxcbiAgICAgICAgKFNFTEVDVCBDT1VOVCgqKSBGUk9NIHJlYWN0aW9ucyBXSEVSRSBwb3N0X2lkID0gcC5pZCBBTkQgcmVhY3Rpb25fdHlwZSA9ICdsaWtlJykgQVMgbGlrZXNfY291bnQsXG4gICAgICAgIChTRUxFQ1QgQ09VTlQoKikgRlJPTSByZWFjdGlvbnMgV0hFUkUgcG9zdF9pZCA9IHAuaWQgQU5EIHJlYWN0aW9uX3R5cGUgPSAnZGlzbGlrZScpIEFTIGRpc2xpa2VzX2NvdW50LFxuICAgICAgICAoU0VMRUNUIENPVU5UKCopIEZST00gY29tbWVudHMgV0hFUkUgcG9zdF9pZCA9IHAuaWQpIEFTIGNvbW1lbnRzX2NvdW50LFxuICAgICAgICAke3VzZXJJZCA/IGBFWElTVFMoU0VMRUNUIDEgRlJPTSByZWFjdGlvbnMgV0hFUkUgcG9zdF9pZCA9IHAuaWQgQU5EIHVzZXJfaWQgPSAnJHt1c2VySWR9JyBBTkQgcmVhY3Rpb25fdHlwZSA9ICdsaWtlJylgIDogJ0ZBTFNFJ30gQVMgbGlrZWRfYnlfdXNlcixcbiAgICAgICAgJHt1c2VySWQgPyBgRVhJU1RTKFNFTEVDVCAxIEZST00gcmVhY3Rpb25zIFdIRVJFIHBvc3RfaWQgPSBwLmlkIEFORCB1c2VyX2lkID0gJyR7dXNlcklkfScgQU5EIHJlYWN0aW9uX3R5cGUgPSAnZGlzbGlrZScpYCA6ICdGQUxTRSd9IEFTIGRpc2xpa2VkX2J5X3VzZXIsXG4gICAgICAgICR7dXNlcklkID8gYChTRUxFQ1QgcmVhY3Rpb25fdHlwZSBGUk9NIHJlYWN0aW9ucyBXSEVSRSBwb3N0X2lkID0gcC5pZCBBTkQgdXNlcl9pZCA9ICcke3VzZXJJZH0nKWAgOiAnTlVMTCd9IEFTIHVzZXJfcmVhY3Rpb25cbiAgICAgIEZST00gcG9zdHMgcFxuICAgICAgSk9JTiB1c2VycyB1IE9OIHAudXNlcl9pZCA9IHUuaWRcbiAgICAgIE9SREVSIEJZIHAuY3JlYXRlZF9hdCBERVNDXG4gICAgICBMSU1JVCAke2xpbWl0fSBPRkZTRVQgJHtvZmZzZXR9XG4gICAgYDtcblxuICAgIGNvbnNvbGUubG9nKCdGZXRjaGluZyBwb3N0cyB3aXRoIHF1ZXJ5OicsIHF1ZXJ5KTtcblxuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5PFBvc3RbXT4oe1xuICAgICAgcXVlcnksXG4gICAgICB2YWx1ZXM6IFtdXG4gICAgfSk7XG5cbiAgICAvLyBMb2cgdGhlIGZpcnN0IHBvc3QncyBwcm9maWxlIHBpY3R1cmUgZm9yIGRlYnVnZ2luZ1xuICAgIGlmIChwb3N0cy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmxvZygnRmlyc3QgcG9zdCB1c2VyIHByb2ZpbGUgcGljdHVyZTonLCBwb3N0c1swXS51c2VyPy5wcm9maWxlX3BpY3R1cmUpO1xuICAgIH1cblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHBvc3RzIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHBvc3RzOicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogTmV4dFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICAvLyBFbnN1cmUgdXBsb2FkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgZW5zdXJlVXBsb2FkRGlyZWN0b3JpZXMoKTtcblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcblxuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBtZXNzYWdlOiAnVW5hdXRob3JpemVkJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAxIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGZvcm0gZGF0YSBmb3IgcG9zdCBjcmVhdGlvblxuICAgIGNvbnN0IGZvcm1EYXRhID0gYXdhaXQgcmVxLmZvcm1EYXRhKCk7XG4gICAgY29uc3QgY29udGVudCA9IGZvcm1EYXRhLmdldCgnY29udGVudCcpIGFzIHN0cmluZztcbiAgICBjb25zdCBwcml2YWN5ID0gZm9ybURhdGEuZ2V0KCdwcml2YWN5JykgYXMgJ3B1YmxpYycgfCAnZnJpZW5kcycgfCAncHJpdmF0ZScgfHwgJ3B1YmxpYyc7XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBoYXZlIGRpcmVjdCBVUkxzIGZyb20gdGhlIHNlcGFyYXRlIHVwbG9hZCBlbmRwb2ludFxuICAgIGNvbnN0IGRpcmVjdEltYWdlVXJsID0gZm9ybURhdGEuZ2V0KCdpbWFnZVVybCcpIGFzIHN0cmluZztcbiAgICBjb25zdCBkaXJlY3RWaWRlb1VybCA9IGZvcm1EYXRhLmdldCgndmlkZW9VcmwnKSBhcyBzdHJpbmc7XG5cbiAgICAvLyBHZXQgZmVlbGluZyBkYXRhIGlmIGF2YWlsYWJsZVxuICAgIGNvbnN0IGZlZWxpbmcgPSBmb3JtRGF0YS5nZXQoJ2ZlZWxpbmcnKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZmVlbGluZ0Vtb2ppID0gZm9ybURhdGEuZ2V0KCdmZWVsaW5nRW1vamknKSBhcyBzdHJpbmc7XG5cbiAgICAvLyBPciBpZiB3ZSBoYXZlIGEgbWVkaWEgZmlsZSBkaXJlY3RseSB1cGxvYWRlZCBoZXJlXG4gICAgY29uc3QgbWVkaWEgPSBmb3JtRGF0YS5nZXQoJ21lZGlhJykgYXMgRmlsZSB8IG51bGw7XG5cbiAgICAvLyBWYWxpZGF0ZSBpbnB1dFxuICAgIGlmICghY29udGVudCAmJiAhbWVkaWEgJiYgIWRpcmVjdEltYWdlVXJsICYmICFkaXJlY3RWaWRlb1VybCkge1xuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICB7IG1lc3NhZ2U6ICdQb3N0IG11c3QgaGF2ZSBjb250ZW50IG9yIG1lZGlhJyB9LFxuICAgICAgICB7IHN0YXR1czogNDAwIH1cbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBVUkxzXG4gICAgbGV0IGltYWdlVXJsID0gZGlyZWN0SW1hZ2VVcmwgfHwgbnVsbDtcbiAgICBsZXQgdmlkZW9VcmwgPSBkaXJlY3RWaWRlb1VybCB8fCBudWxsO1xuXG4gICAgLy8gSGFuZGxlIGZpbGUgdXBsb2FkIGlmIG1lZGlhIGlzIHByb3ZpZGVkIGRpcmVjdGx5XG4gICAgaWYgKG1lZGlhKSB7XG4gICAgICBjb25zdCB7IHVwbG9hZEZpbGUgfSA9IGF3YWl0IGltcG9ydCgnQC9saWIvZmlsZVVwbG9hZCcpO1xuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdXBsb2FkRmlsZShtZWRpYSk7XG5cbiAgICAgIGlmICghcmVzdWx0LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKFxuICAgICAgICAgIHsgbWVzc2FnZTogcmVzdWx0LmVycm9yIHx8ICdGYWlsZWQgdG8gdXBsb2FkIG1lZGlhJyB9LFxuICAgICAgICAgIHsgc3RhdHVzOiA0MDAgfVxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBTZXQgdGhlIGFwcHJvcHJpYXRlIFVSTCBiYXNlZCBvbiBmaWxlIHR5cGVcbiAgICAgIGlmIChyZXN1bHQuZmlsZVR5cGUgPT09ICdpbWFnZScpIHtcbiAgICAgICAgaW1hZ2VVcmwgPSByZXN1bHQudXJsIHx8IG51bGw7XG4gICAgICB9IGVsc2UgaWYgKHJlc3VsdC5maWxlVHlwZSA9PT0gJ3ZpZGVvJykge1xuICAgICAgICB2aWRlb1VybCA9IHJlc3VsdC51cmwgfHwgbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDcmVhdGUgcG9zdFxuICAgIGNvbnN0IHBvc3RJZCA9IHV1aWR2NCgpO1xuICAgIGF3YWl0IGV4ZWN1dGVRdWVyeSh7XG4gICAgICBxdWVyeTogYFxuICAgICAgICBJTlNFUlQgSU5UTyBwb3N0cyAoXG4gICAgICAgICAgaWQsIHVzZXJfaWQsIGNvbnRlbnQsIGltYWdlX3VybCwgdmlkZW9fdXJsLCBmZWVsaW5nLCBmZWVsaW5nX2Vtb2ppLCBwcml2YWN5XG4gICAgICAgICkgVkFMVUVTICg/LCA/LCA/LCA/LCA/LCA/LCA/LCA/KVxuICAgICAgYCxcbiAgICAgIHZhbHVlczogW3Bvc3RJZCwgc2Vzc2lvbi51c2VyLmlkLCBjb250ZW50LCBpbWFnZVVybCwgdmlkZW9VcmwsIGZlZWxpbmcgfHwgbnVsbCwgZmVlbGluZ0Vtb2ppIHx8IG51bGwsIHByaXZhY3ldXG4gICAgfSk7XG5cbiAgICAvLyBHZXQgdGhlIGNyZWF0ZWQgcG9zdCB3aXRoIHVzZXIgaW5mb1xuICAgIGNvbnN0IHBvc3RzID0gYXdhaXQgZXhlY3V0ZVF1ZXJ5PFBvc3RbXT4oe1xuICAgICAgcXVlcnk6IGBcbiAgICAgICAgU0VMRUNUXG4gICAgICAgICAgcC4qLFxuICAgICAgICAgIHUuaWQgYXMgdXNlcl9pZCxcbiAgICAgICAgICB1LnVzZXJuYW1lLFxuICAgICAgICAgIHUuZmlyc3RfbmFtZSxcbiAgICAgICAgICB1Lmxhc3RfbmFtZSxcbiAgICAgICAgICB1LnByb2ZpbGVfcGljdHVyZSxcbiAgICAgICAgICAwIEFTIGxpa2VzX2NvdW50LFxuICAgICAgICAgIDAgQVMgZGlzbGlrZXNfY291bnQsXG4gICAgICAgICAgMCBBUyBjb21tZW50c19jb3VudCxcbiAgICAgICAgICBGQUxTRSBBUyBsaWtlZF9ieV91c2VyLFxuICAgICAgICAgIEZBTFNFIEFTIGRpc2xpa2VkX2J5X3VzZXIsXG4gICAgICAgICAgTlVMTCBBUyB1c2VyX3JlYWN0aW9uXG4gICAgICAgIEZST00gcG9zdHMgcFxuICAgICAgICBKT0lOIHVzZXJzIHUgT04gcC51c2VyX2lkID0gdS5pZFxuICAgICAgICBXSEVSRSBwLmlkID0gP1xuICAgICAgYCxcbiAgICAgIHZhbHVlczogW3Bvc3RJZF1cbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgbWVzc2FnZTogJ1Bvc3QgY3JlYXRlZCBzdWNjZXNzZnVsbHknLCBwb3N0OiBwb3N0c1swXSB9LFxuICAgICAgeyBzdGF0dXM6IDIwMSB9XG4gICAgKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwb3N0OicsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IG1lc3NhZ2U6ICdJbnRlcm5hbCBzZXJ2ZXIgZXJyb3InIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiZ2V0U2VydmVyU2Vzc2lvbiIsImF1dGhPcHRpb25zIiwidjQiLCJ1dWlkdjQiLCJleGVjdXRlUXVlcnkiLCJlbnN1cmVVcGxvYWREaXJlY3RvcmllcyIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VySWQiLCJ1c2VyIiwiaWQiLCJ1cmwiLCJVUkwiLCJsaW1pdCIsInBhcnNlSW50Iiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwib2Zmc2V0IiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwicG9zdHMiLCJ2YWx1ZXMiLCJsZW5ndGgiLCJwcm9maWxlX3BpY3R1cmUiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwic3RhdHVzIiwiUE9TVCIsImZvcm1EYXRhIiwiY29udGVudCIsInByaXZhY3kiLCJkaXJlY3RJbWFnZVVybCIsImRpcmVjdFZpZGVvVXJsIiwiZmVlbGluZyIsImZlZWxpbmdFbW9qaSIsIm1lZGlhIiwiaW1hZ2VVcmwiLCJ2aWRlb1VybCIsInVwbG9hZEZpbGUiLCJyZXN1bHQiLCJzdWNjZXNzIiwiZmlsZVR5cGUiLCJwb3N0SWQiLCJwb3N0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/posts/route.ts\n");

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

/***/ "(rsc)/./src/lib/ensureUploadDirs.ts":
/*!*************************************!*\
  !*** ./src/lib/ensureUploadDirs.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ensureUploadDirectories: () => (/* binding */ ensureUploadDirectories)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/**\n * Ensures that the upload directories exist\n */ function ensureUploadDirectories() {\n    try {\n        // Get upload directory from environment variable or use default\n        const uploadDir = process.env.UPLOAD_DIR || 'public/uploads';\n        const imagesDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), uploadDir, 'images');\n        const videosDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), uploadDir, 'videos');\n        const profilesDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), uploadDir, 'profiles');\n        const commentsDir = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), uploadDir, 'comments');\n        // Create directories if they don't exist\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), uploadDir))) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), uploadDir), {\n                recursive: true\n            });\n        }\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(imagesDir)) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(imagesDir, {\n                recursive: true\n            });\n        }\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(videosDir)) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(videosDir, {\n                recursive: true\n            });\n        }\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(profilesDir)) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(profilesDir, {\n                recursive: true\n            });\n        }\n        if (!fs__WEBPACK_IMPORTED_MODULE_0___default().existsSync(commentsDir)) {\n            fs__WEBPACK_IMPORTED_MODULE_0___default().mkdirSync(commentsDir, {\n                recursive: true\n            });\n        }\n    } catch (error) {\n        console.error('Error ensuring upload directories exist:', error);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2Vuc3VyZVVwbG9hZERpcnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBb0I7QUFDSTtBQUV4Qjs7Q0FFQyxHQUNNLFNBQVNFO0lBQ2QsSUFBSTtRQUNGLGdFQUFnRTtRQUNoRSxNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLFVBQVUsSUFBSTtRQUM1QyxNQUFNQyxZQUFZTixnREFBUyxDQUFDRyxRQUFRSyxHQUFHLElBQUlOLFdBQVc7UUFDdEQsTUFBTU8sWUFBWVQsZ0RBQVMsQ0FBQ0csUUFBUUssR0FBRyxJQUFJTixXQUFXO1FBQ3RELE1BQU1RLGNBQWNWLGdEQUFTLENBQUNHLFFBQVFLLEdBQUcsSUFBSU4sV0FBVztRQUN4RCxNQUFNUyxjQUFjWCxnREFBUyxDQUFDRyxRQUFRSyxHQUFHLElBQUlOLFdBQVc7UUFFeEQseUNBQXlDO1FBQ3pDLElBQUksQ0FBQ0gsb0RBQWEsQ0FBQ0MsZ0RBQVMsQ0FBQ0csUUFBUUssR0FBRyxJQUFJTixhQUFhO1lBQ3ZESCxtREFBWSxDQUFDQyxnREFBUyxDQUFDRyxRQUFRSyxHQUFHLElBQUlOLFlBQVk7Z0JBQUVZLFdBQVc7WUFBSztRQUN0RTtRQUVBLElBQUksQ0FBQ2Ysb0RBQWEsQ0FBQ08sWUFBWTtZQUM3QlAsbURBQVksQ0FBQ08sV0FBVztnQkFBRVEsV0FBVztZQUFLO1FBQzVDO1FBRUEsSUFBSSxDQUFDZixvREFBYSxDQUFDVSxZQUFZO1lBQzdCVixtREFBWSxDQUFDVSxXQUFXO2dCQUFFSyxXQUFXO1lBQUs7UUFDNUM7UUFFQSxJQUFJLENBQUNmLG9EQUFhLENBQUNXLGNBQWM7WUFDL0JYLG1EQUFZLENBQUNXLGFBQWE7Z0JBQUVJLFdBQVc7WUFBSztRQUM5QztRQUVBLElBQUksQ0FBQ2Ysb0RBQWEsQ0FBQ1ksY0FBYztZQUMvQlosbURBQVksQ0FBQ1ksYUFBYTtnQkFBRUcsV0FBVztZQUFLO1FBQzlDO0lBQ0YsRUFBRSxPQUFPQyxPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyw0Q0FBNENBO0lBQzVEO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbXJpaHJcXERlc2t0b3BcXGhpZm5mX25leHRqc19teXNxbFxcc3JjXFxsaWJcXGVuc3VyZVVwbG9hZERpcnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCB0aGUgdXBsb2FkIGRpcmVjdG9yaWVzIGV4aXN0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbnN1cmVVcGxvYWREaXJlY3RvcmllcygpOiB2b2lkIHtcbiAgdHJ5IHtcbiAgICAvLyBHZXQgdXBsb2FkIGRpcmVjdG9yeSBmcm9tIGVudmlyb25tZW50IHZhcmlhYmxlIG9yIHVzZSBkZWZhdWx0XG4gICAgY29uc3QgdXBsb2FkRGlyID0gcHJvY2Vzcy5lbnYuVVBMT0FEX0RJUiB8fCAncHVibGljL3VwbG9hZHMnO1xuICAgIGNvbnN0IGltYWdlc0RpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCB1cGxvYWREaXIsICdpbWFnZXMnKTtcbiAgICBjb25zdCB2aWRlb3NEaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgdXBsb2FkRGlyLCAndmlkZW9zJyk7XG4gICAgY29uc3QgcHJvZmlsZXNEaXIgPSBwYXRoLmpvaW4ocHJvY2Vzcy5jd2QoKSwgdXBsb2FkRGlyLCAncHJvZmlsZXMnKTtcbiAgICBjb25zdCBjb21tZW50c0RpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCB1cGxvYWREaXIsICdjb21tZW50cycpO1xuXG4gICAgLy8gQ3JlYXRlIGRpcmVjdG9yaWVzIGlmIHRoZXkgZG9uJ3QgZXhpc3RcbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIHVwbG9hZERpcikpKSB7XG4gICAgICBmcy5ta2RpclN5bmMocGF0aC5qb2luKHByb2Nlc3MuY3dkKCksIHVwbG9hZERpciksIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIGlmICghZnMuZXhpc3RzU3luYyhpbWFnZXNEaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMoaW1hZ2VzRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWZzLmV4aXN0c1N5bmModmlkZW9zRGlyKSkge1xuICAgICAgZnMubWtkaXJTeW5jKHZpZGVvc0RpciwgeyByZWN1cnNpdmU6IHRydWUgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFmcy5leGlzdHNTeW5jKHByb2ZpbGVzRGlyKSkge1xuICAgICAgZnMubWtkaXJTeW5jKHByb2ZpbGVzRGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KTtcbiAgICB9XG5cbiAgICBpZiAoIWZzLmV4aXN0c1N5bmMoY29tbWVudHNEaXIpKSB7XG4gICAgICBmcy5ta2RpclN5bmMoY29tbWVudHNEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBlbnN1cmluZyB1cGxvYWQgZGlyZWN0b3JpZXMgZXhpc3Q6JywgZXJyb3IpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiZnMiLCJwYXRoIiwiZW5zdXJlVXBsb2FkRGlyZWN0b3JpZXMiLCJ1cGxvYWREaXIiLCJwcm9jZXNzIiwiZW52IiwiVVBMT0FEX0RJUiIsImltYWdlc0RpciIsImpvaW4iLCJjd2QiLCJ2aWRlb3NEaXIiLCJwcm9maWxlc0RpciIsImNvbW1lbnRzRGlyIiwiZXhpc3RzU3luYyIsIm1rZGlyU3luYyIsInJlY3Vyc2l2ZSIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/ensureUploadDirs.ts\n");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/mysql2","vendor-chunks/aws-ssl-profiles","vendor-chunks/iconv-lite","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/long","vendor-chunks/oauth","vendor-chunks/lru-cache","vendor-chunks/object-hash","vendor-chunks/denque","vendor-chunks/preact","vendor-chunks/is-property","vendor-chunks/lru.min","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/cookie","vendor-chunks/sqlstring","vendor-chunks/seq-queue","vendor-chunks/named-placeholders","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/generate-function","vendor-chunks/safer-buffer","vendor-chunks/uuid"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fposts%2Froute&page=%2Fapi%2Fposts%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.ts&appDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cmrihr%5CDesktop%5Chifnf_nextjs_mysql&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();