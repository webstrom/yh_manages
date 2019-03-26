/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "47feae16881d3df0240e";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"manages": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
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
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index/js/manage.js":
/*!***********************************!*\
  !*** ./public/index/js/manage.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _index = __webpack_require__(/*! ../scss/index.scss */ "./public/index/scss/index.scss");

var _index2 = _interopRequireDefault(_index);

var _vue = __webpack_require__(/*! vue */ "./node_modules/_vue@2.6.6@vue/dist/vue.esm.js");

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(/*! ./layui */ "./public/index/js/layui.js");

var _common = __webpack_require__(/*! ./common */ "./public/index/js/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
	el: '#manages',
	data: {
		cancellation: false,
		manageMeun: [],
		// manageMeun:[
		// 	{
		// 		text:'系统管理',
		// 		meunOpen:true,
		// 		children:[
		// 			{
		// 				text:'机构管理',
		// 				class:true,
		// 				id:1,
		// 			},
		// 			{
		// 				text:'后台账号管理',
		// 				class:false,
		// 				id:2
		// 			},
		// 			{
		// 				text:'角色管理',
		// 				class:false,
		// 				id:3
		// 			},
		// 			{
		// 				text:'服务设置',
		// 				class:false,
		// 				id:4
		// 			},
		// 			{
		// 				text:'服务设置2',
		// 				class:false,
		// 				id:5
		// 			},
		// 			{
		// 				text:'业务员管理(分销)',
		// 				class:false,
		// 				id:6
		// 			},
		// 			{
		// 				text:'公众号服务设置',
		// 				class:false,
		// 				id:7
		// 			},
		// 			{
		// 				text:'代理商管理',
		// 				class:false,
		// 				id:8
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'用户管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'注册用户',
		// 				class:false,
		// 				id:9
		// 			},
		// 			{
		// 				text:'借款用户',
		// 				class:false,
		// 				id:10
		// 			},
		// 			{
		// 				text:'历史借款用户',
		// 				class:false,
		// 				id:11
		// 			},
		// 			{
		// 				text:'借款黑名单用户',
		// 				class:false,
		// 				id:12
		// 			},
		// 			{
		// 				text:'认证未申请用户',
		// 				class:false,
		// 				id:13
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'风控管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'待审核用户',
		// 				class:false,
		// 				id:14
		// 			},
		// 			{
		// 				text:'渠道待复审用户',
		// 				class:false,
		// 				id:15
		// 			},
		// 			{
		// 				text:'渠道审核成功',
		// 				class:false,
		// 				id:16
		// 			},
		// 			{
		// 				text:'审核不成功',
		// 				class:false,
		// 				id:17
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'渠道管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'渠道统计',
		// 				class:false,
		// 				id:18
		// 			},
		// 			{
		// 				text:'渠道隐藏率',
		// 				class:false,
		// 				id:19
		// 			},
		// 			{
		// 				text:'渠道注册',
		// 				class:false,
		// 				id:20
		// 			},
		// 			{
		// 				text:'渠道借款中用户',
		// 				class:false,
		// 				id:21
		// 			},
		// 			{
		// 				text:'渠道历史借款用户',
		// 				class:false,
		// 				id:22
		// 			},
		// 			{
		// 				text:'渠道待复审',
		// 				class:false,
		// 				id:23
		// 			},
		// 			{
		// 				text:'渠道渠道审核成功',
		// 				class:false,
		// 				id:24
		// 			},
		// 			{
		// 				text:'渠道审核不成功',
		// 				class:false,
		// 				id:25
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'财务管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'待放款',
		// 				class:false,
		// 				id:26
		// 			},
		// 			{
		// 				text:'放款中记录',
		// 				class:false,
		// 				id:27
		// 			},
		// 			{
		// 				text:'放款记录-支出',
		// 				class:false,
		// 				id:28
		// 			},
		// 			{
		// 				text:'待还款',
		// 				class:false,
		// 				id:29
		// 			},
		// 			{
		// 				text:'还款记录-收入',
		// 				class:false,
		// 				id:30
		// 			},
		// 			{
		// 				text:'提现待审核',
		// 				class:false,
		// 				id:31
		// 			},
		// 			{
		// 				text:'提现已审核',
		// 				class:false,
		// 				id:32
		// 			},
		// 			{
		// 				text:'提现审核不成功',
		// 				class:false,
		// 				id:33
		// 			},
		// 			{
		// 				text:'红包提现待审核',
		// 				class:false,
		// 				id:34
		// 			},
		// 			{
		// 				text:'红包提现已审核',
		// 				class:false,
		// 				id:35
		// 			},
		// 			{
		// 				text:'用户充值记录',
		// 				class:false,
		// 				id:36
		// 			},
		// 			{
		// 				text:'机构充值提现记录',
		// 				class:false,
		// 				id:37
		// 			},
		// 			{
		// 				text:'服务费充值记录',
		// 				class:false,
		// 				id:38
		// 			},
		// 			{
		// 				text:'资金变动明细',
		// 				class:false,
		// 				id:39
		// 			},
		// 			{
		// 				text:'垫资解冻',
		// 				class:false,
		// 				id:40
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'数据统计',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'每日数据统计',
		// 				class:false,
		// 				id:41
		// 			},
		// 			{
		// 				text:'服务使用记录',
		// 				class:false,
		// 				id:42
		// 			},
		// 			{
		// 				text:'财务对账',
		// 				class:false,
		// 				id:43
		// 			},
		// 			{
		// 				text:'机构服务使用记录',
		// 				class:false,
		// 				id:44
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'产品管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'红包管理',
		// 				class:false,
		// 				id:45
		// 			},
		// 			{
		// 				text:'公告管理',
		// 				class:false,
		// 				id:46
		// 			},
		// 			{
		// 				text:'联系CEO',
		// 				class:false,
		// 				id:47
		// 			},
		// 			{
		// 				text:'信息流管理',
		// 				class:false,
		// 				id:48
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'贷款大全',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'攻略管理',
		// 				class:false,
		// 				id:49
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'催债管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'逾期催收管理',
		// 				class:false,
		// 				id:50
		// 			},
		// 			{
		// 				text:'催收组',
		// 				class:false,
		// 				id:51
		// 			},
		// 			{
		// 				text:'逾期催收分组',
		// 				class:false,
		// 				id:52
		// 			},
		// 			{
		// 				text:'扣款失败记录',
		// 				class:false,
		// 				id:53
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'圆圆风控',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'用户信息',
		// 				class:false,
		// 				id:54
		// 			},
		// 			{
		// 				text:'订单信息',
		// 				class:false,
		// 				id:55
		// 			},
		// 			{
		// 				text:'手机型号评估清单',
		// 				class:false,
		// 				id:56
		// 			}
		// 		]
		// 	},
		// 	{
		// 		text:'设置管理',
		// 		meunOpen:false,
		// 		children:[
		// 			{
		// 				text:'日志管理',
		// 				class:false,
		// 				id:57
		// 			},
		// 			{
		// 				text:'菜单管理',
		// 				class:false,
		// 				id:58
		// 			},
		// 			{
		// 				text:'banner管理',
		// 				class:false,
		// 				id:59
		// 			},
		// 			{
		// 				text:'短信配置',
		// 				class:false,
		// 				id:60
		// 			},
		// 			{
		// 				text:'系统配置',
		// 				class:false,
		// 				id:61
		// 			},
		// 			{
		// 				text:'贷超管理',
		// 				class:false,
		// 				id:62
		// 			},
		// 			{
		// 				text:'垫资设置',
		// 				class:false,
		// 				id:63
		// 			}
		// 		]
		// 	}
		// ],
		userNaves: [],
		naverWidth: 0
	},
	methods: {
		meunList: function meunList() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			_common2.default.tokensNoLogin(token);
			console.log(token);
			var classAdd = ['icon-xitongshezhi', 'icon-yonghuguanli', 'icon-fengkongguanli', 'icon-qudaoguanli', 'icon-caiwuguanli', 'icon-shujutongji', 'icon-chanpinguanli', 'icon-daikuandaquan', 'icon-cuizhaiguanli', 'icon-zhuxiaodenglu', 'icon-shezhiguanli'];
			var data = {
				token: token,
				parentId: -1
			};
			$.ajax({
				url: _common2.default.manage_url + 'menuTree.htm',
				data: data,
				type: 'post',
				success: function success(res) {
					var jsonPack = JSON.stringify(res.replace(/[ ]/g, "").trim());
					var parseInit = JSON.parse(jsonPack);
					var LastIndex = parseInit.lastIndexOf('}');
					var succ = parseInit.lastIndexOf('success=');
					var errorMsg = parseInit.lastIndexOf('Msg=');
					var alerts = parseInit.substring(errorMsg + 4, LastIndex);
					var error = parseInit.lastIndexOf('error');
					var Ress = parseInit.substring(succ + 8, error - 1);
					if (Ress === 'false') {
						_common2.default.layerMsg(alerts, 2);
						return false;
					}
					res = JSON.parse(res);
					if (res instanceof Array) {
						_vue2.default.set(that, 'manageMeun', res[0].children);
						$.each(that.manageMeun, function (i) {
							_vue2.default.set(that.manageMeun[i], 'iconCls', classAdd[i]);
							_vue2.default.set(that.manageMeun[i], 'meunOpen', false);
							$.each(that.manageMeun[i].children, function (n) {
								_vue2.default.set(that.manageMeun[i].children[n], 'class', false);
							});
						});
						_vue2.default.set(that.manageMeun[0], 'meunOpen', true);
						_vue2.default.set(that.manageMeun[0].children[0], 'class', true);
						that.userNaves.push(that.manageMeun[0].children[0]);
						console.log(that.manageMeun);
						console.log(that.userNaves);
					} else {
						_common2.default.layerMsg('数据格式返回错误', 2);
						return false;
					}
				},
				error: function error(_error) {
					_common2.default.layerMsg('请求错误！', 2);
					console.log(_error);
				}
			});
		},
		OpenMenu: function OpenMenu(index) {
			var that = this;
			if (that.manageMeun[index].meunOpen) {
				_vue2.default.set(that.manageMeun[index], 'meunOpen', false);
			} else {
				$.each(that.manageMeun, function (i) {
					_vue2.default.set(that.manageMeun[i], 'meunOpen', false);
					$.each(that.manageMeun[i].children, function (n) {
						_vue2.default.set(that.manageMeun[i].children[n], 'class', false);
					});
				});
				_vue2.default.set(that.manageMeun[index], 'meunOpen', true);
				_vue2.default.set(that.manageMeun[index].children[0], 'class', true);
				if (that.userNaves.indexOf(that.manageMeun[index].children[0]) === -1) {
					that.userNaves.push(that.manageMeun[index].children[0]);
					var wid = 0;
					that.$nextTick(function () {
						$.each($('#yh_width_auto p a'), function (i) {
							console.log($(this).length);
							console.log($(this).width() + 57);
							wid += $(this).width() + 57;
						});
						_vue2.default.set(that, 'naverWidth', wid);
						$('#yh_width_auto p').css({ width: that.naverWidth + 'px' });
						if ($('#yh_width_auto p').width() > $('#yh_width_auto').width()) {
							$('#yh_width_auto p').animate({ marginLeft: -($('#yh_width_auto p').width() - $('#yh_width_auto').width()) });
						} else {
							$('#yh_width_auto p').css({ marginLeft: 0 });
						}
					});
				}
				switch (that.manageMeun[index].children[0].text) {
					case '机构管理':
						document.getElementById('myiframe').src = './manages_system_institution.html';
						break;
					case '后台账号管理':
						document.getElementById('myiframe').src = './manages_system_account.html';
						break;
					case '角色管理':
						document.getElementById('myiframe').src = './manages_system_role.html';
						break;
					case '服务设置':
						document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
						break;
					case '服务设置2':
						document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
						break;
					case '业务员管理(分销)':
						document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
						break;
					case '公众号服务设置':
						document.getElementById('myiframe').src = './manages_system_publicSettings.html';
						break;
					case '代理商管理':
						document.getElementById('myiframe').src = './manages_system_agent.html';
						break;
					case '注册用户':
						document.getElementById('myiframe').src = './manages_users_register.html';
						break;
					case '借款中用户':
						document.getElementById('myiframe').src = './manages_users_worrower.html';
						break;
					case '历史借款用户':
						document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
						break;
					case '借款黑名单用户':
						document.getElementById('myiframe').src = './manages_users_blacklist.html';
						break;
					case '认证未申请用户':
						document.getElementById('myiframe').src = './manages_users_noApplication.html';
						break;
					case '待审核用户':
						document.getElementById('myiframe').src = './manages_risk_audited.html';
						break;
					case '渠道待复审用户':
						document.getElementById('myiframe').src = './manages_risk_retrial.html';
						break;
					case '渠道审核成功':
						document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
						break;
					case '审核不成功':
						document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
						break;
					case '渠道统计':
						document.getElementById('myiframe').src = './manages_channel_statistics.html';
						break;
					case '渠道隐藏率':
						document.getElementById('myiframe').src = './manages_channel_hide.html';
						break;
					case '渠道注册':
						document.getElementById('myiframe').src = './manages_channel_registration.html';
						break;
					case '渠道借款中用户':
						document.getElementById('myiframe').src = './manages_channel_borrowing.html';
						break;
					case '渠道历史借款用户':
						document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
						break;
					case '渠道待复审':
						document.getElementById('myiframe').src = './manages_channel_reviewed.html';
						break;
					case '渠道渠道审核成功':
						document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
						break;
					case '渠道审核不成功':
						document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
						break;
					case '待放款':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款中记录':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款记录-支出':
						document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
						break;
					case '待还款':
						document.getElementById('myiframe').src = './manages_finance_repayment.html';
						break;
					case '还款记录-收入':
						document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
						break;
					case '提现待审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
						break;
					case '提现已审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
						break;
					case '提现审核不成功':
						document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
						break;
					case '红包提现待审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
						break;
					case '红包提现已审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
						break;
					case '用户充值记录':
						document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
						break;
					case '机构充值提现记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
						break;
					case '服务费充值记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
						break;
					case '垫资解冻':
						document.getElementById('myiframe').src = './manages_finance_advance.html';
						break;
					case '每日数据统计':
						document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
						break;
					case '服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
						break;
					case '财务对账':
						document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
						break;
					case '机构服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_record.html';
						break;
					case '红包管理':
						document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
						break;
					case '公告管理':
						document.getElementById('myiframe').src = './manages_product_notice.html';
						break;
					case '联系CEO':
						document.getElementById('myiframe').src = './manages_product_customerService.html';
						break;
					case '信息流管理':
						document.getElementById('myiframe').src = './manages_product_information.html';
						break;
					case '攻略管理':
						document.getElementById('myiframe').src = './manages_loan_strategy.html';
						break;
					case '逾期催收管理':
						document.getElementById('myiframe').src = './manages_collection.html';
						break;
					case '催收组':
						document.getElementById('myiframe').src = './manages_collection_team.html';
						break;
					case '逾期催收分组':
						document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
						break;
					case '扣款失败记录':
						document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
						break;
					case '用户信息':
						document.getElementById('myiframe').src = './manages_yy_userinformation.html';
						break;
					case '订单信息':
						document.getElementById('myiframe').src = './manages_yy_productinformation.html';
						break;
					case '手机型号评估清单':
						document.getElementById('myiframe').src = './manages_yy_evaluating.html';
						break;
					case '日志管理':
						document.getElementById('myiframe').src = './manages_setup_journal.html';
						break;
					case '菜单管理':
						document.getElementById('myiframe').src = './manages_setup_meun.html';
						break;
					case 'banner管理':
						document.getElementById('myiframe').src = './manages_setup_banner.html';
						break;
					case '短信配置':
						document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
						break;
					case '系统配置':
						document.getElementById('myiframe').src = './manages_setup_system.html';
						break;
					case '贷超管理':
						document.getElementById('myiframe').src = './manages_setup_exceeding.html';
						break;
					case '垫资设置':
						document.getElementById('myiframe').src = './manages_setup_advance.html';
						break;
					default:
				}
			}
		},
		changeClick: function changeClick(index) {
			var that = this;
			$.each(that.userNaves, function (i) {
				_vue2.default.set(that.userNaves[i], 'class', false);
			});
			_vue2.default.set(that.userNaves[index], 'class', true);
			$.each(that.userNaves, function (i) {
				if (that.userNaves[i].class) {
					$.each(that.manageMeun, function (n) {
						_vue2.default.set(that.manageMeun[n], 'meunOpen', false);
						$.each(that.manageMeun[n].children, function (y) {
							if (that.manageMeun[n].children[y].text === that.userNaves[i].text) {
								_vue2.default.set(that.manageMeun[n], 'meunOpen', true);
								_vue2.default.set(that.manageMeun[n].children[y], 'class', true);
							}
						});
					});
				}
			});
			switch (that.userNaves[index].text) {
				case '机构管理':
					document.getElementById('myiframe').src = './manages_system_institution.html';
					break;
				case '后台账号管理':
					document.getElementById('myiframe').src = './manages_system_account.html';
					break;
				case '角色管理':
					document.getElementById('myiframe').src = './manages_system_role.html';
					break;
				case '服务设置':
					document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
					break;
				case '服务设置2':
					document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
					break;
				case '业务员管理(分销)(分销)':
					document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
					break;
				case '公众号服务设置':
					document.getElementById('myiframe').src = './manages_system_publicSettings.html';
					break;
				case '代理商管理':
					document.getElementById('myiframe').src = './manages_system_agent.html';
					break;
				case '注册用户':
					document.getElementById('myiframe').src = './manages_users_register.html';
					break;
				case '借款中用户':
					document.getElementById('myiframe').src = './manages_users_worrower.html';
					break;
				case '历史借款用户':
					document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
					break;
				case '借款黑名单用户用户':
					document.getElementById('myiframe').src = './manages_users_blacklist.html';
					break;
				case '认证未申请用户':
					document.getElementById('myiframe').src = './manages_users_noApplication.html';
					break;
				case '待审核用户':
					document.getElementById('myiframe').src = './manages_risk_audited.html';
					break;
				case '渠道待复审用户':
					document.getElementById('myiframe').src = './manages_risk_retrial.html';
					break;
				case '渠道审核成功':
					document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
					break;
				case '审核不成功':
					document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
					break;
				case '渠道统计':
					document.getElementById('myiframe').src = './manages_channel_statistics.html';
					break;
				case '渠道隐藏率':
					document.getElementById('myiframe').src = './manages_channel_hide.html';
					break;
				case '渠道注册':
					document.getElementById('myiframe').src = './manages_channel_registration.html';
					break;
				case '渠道借款中用户':
					document.getElementById('myiframe').src = './manages_channel_borrowing.html';
					break;
				case '渠道历史借款用户':
					document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
					break;
				case '渠道待复审':
					document.getElementById('myiframe').src = './manages_channel_reviewed.html';
					break;
				case '渠道渠道审核成功':
					document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
					break;
				case '渠道审核不成功':
					document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
					break;
				case '待放款':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款中记录':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款记录-支出':
					document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
					break;
				case '待还款':
					document.getElementById('myiframe').src = './manages_finance_repayment.html';
					break;
				case '还款记录-收入':
					document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
					break;
				case '提现待审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
					break;
				case '提现已审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
					break;
				case '提现审核不成功':
					document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
					break;
				case '红包提现待审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
					break;
				case '红包提现已审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
					break;
				case '用户充值记录':
					document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
					break;
				case '机构充值提现记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
					break;
				case '服务费充值记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
					break;
				case '垫资解冻':
					document.getElementById('myiframe').src = './manages_finance_advance.html';
					break;
				case '每日数据统计':
					document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
					break;
				case '服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
					break;
				case '财务对账':
					document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
					break;
				case '机构服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_record.html';
					break;
				case '红包管理':
					document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
					break;
				case '公告管理':
					document.getElementById('myiframe').src = './manages_product_notice.html';
					break;
				case '联系CEO':
					document.getElementById('myiframe').src = './manages_product_customerService.html';
					break;
				case '信息流管理':
					document.getElementById('myiframe').src = './manages_product_information.html';
					break;
				case '攻略管理':
					document.getElementById('myiframe').src = './manages_loan_strategy.html';
					break;
				case '逾期催收管理':
					document.getElementById('myiframe').src = './manages_collection.html';
					break;
				case '催收组':
					document.getElementById('myiframe').src = './manages_collection_team.html';
					break;
				case '逾期催收分组':
					document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
					break;
				case '扣款失败记录':
					document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
					break;
				case '用户信息':
					document.getElementById('myiframe').src = './manages_yy_userinformation.html';
					break;
				case '订单信息':
					document.getElementById('myiframe').src = './manages_yy_productinformation.html';
					break;
				case '手机型号评估清单':
					document.getElementById('myiframe').src = './manages_yy_evaluating.html';
					break;
				case '日志管理':
					document.getElementById('myiframe').src = './manages_setup_journal.html';
					break;
				case '菜单管理':
					document.getElementById('myiframe').src = './manages_setup_meun.html';
					break;
				case 'banner管理':
					document.getElementById('myiframe').src = './manages_setup_banner.html';
					break;
				case '短信配置':
					document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
					break;
				case '系统配置':
					document.getElementById('myiframe').src = './manages_setup_system.html';
					break;
				case '贷超管理':
					document.getElementById('myiframe').src = './manages_setup_exceeding.html';
					break;
				case '垫资设置':
					document.getElementById('myiframe').src = './manages_setup_advance.html';
					break;
				default:
			}
		},
		closeCurrent: function closeCurrent(e, index) {
			var that = this;
			e.stopPropagation();
			if (that.userNaves.length > 1) {
				that.userNaves.splice(index, 1);
			} else {
				window.parent.layui.use('layer', function () {
					var layer = window.parent.layui.layer;
					layer.msg('已经是最后一个，无法删除！', { icon: 5 });
				});
			}
			if (index < that.userNaves.length - 1) {
				$.each(that.manageMeun, function (i) {
					$.each(that.manageMeun[i].children, function (n) {
						_vue2.default.set(that.manageMeun[i].children[n], 'class', false);
					});
				});
				$.each(that.userNaves, function (i) {
					_vue2.default.set(that.userNaves[i], 'class', false);
				});
				$.each(that.manageMeun, function (i) {
					$.each(that.manageMeun[i].children, function (n) {
						_vue2.default.set(that.manageMeun[i].children[n], 'class', false);
					});
				});
				_vue2.default.set(that.userNaves[index], 'class', true);

				switch (that.userNaves[index].text) {
					case '机构管理':
						document.getElementById('myiframe').src = './manages_system_institution.html';
						break;
					case '后台账号管理':
						document.getElementById('myiframe').src = './manages_system_account.html';
						break;
					case '角色管理':
						document.getElementById('myiframe').src = './manages_system_role.html';
						break;
					case '服务设置':
						document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
						break;
					case '服务设置2':
						document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
						break;
					case '业务员管理(分销)':
						document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
						break;
					case '公众号服务设置':
						document.getElementById('myiframe').src = './manages_system_publicSettings.html';
						break;
					case '代理商管理':
						document.getElementById('myiframe').src = './manages_system_agent.html';
						break;
					case '注册用户':
						document.getElementById('myiframe').src = './manages_users_register.html';
						break;
					case '借款中用户':
						document.getElementById('myiframe').src = './manages_users_worrower.html';
						break;
					case '历史借款用户':
						document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
						break;
					case '借款黑名单用户':
						document.getElementById('myiframe').src = './manages_users_blacklist.html';
						break;
					case '认证未申请用户':
						document.getElementById('myiframe').src = './manages_users_noApplication.html';
						break;
					case '待审核用户':
						document.getElementById('myiframe').src = './manages_risk_audited.html';
						break;
					case '渠道待复审用户':
						document.getElementById('myiframe').src = './manages_risk_retrial.html';
						break;
					case '渠道审核成功':
						document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
						break;
					case '审核不成功':
						document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
						break;
					case '渠道统计':
						document.getElementById('myiframe').src = './manages_channel_statistics.html';
						break;
					case '渠道隐藏率':
						document.getElementById('myiframe').src = './manages_channel_hide.html';
						break;
					case '渠道注册':
						document.getElementById('myiframe').src = './manages_channel_registration.html';
						break;
					case '渠道借款中用户中用户':
						document.getElementById('myiframe').src = './manages_channel_borrowing.html';
						break;
					case '渠道历史借款用户用户':
						document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
						break;
					case '渠道待复审':
						document.getElementById('myiframe').src = './manages_channel_reviewed.html';
						break;
					case '渠道渠道审核成功':
						document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
						break;
					case '渠道审核不成功':
						document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
						break;
					case '待放款':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款中记录':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款记录-支出':
						document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
						break;
					case '待还款':
						document.getElementById('myiframe').src = './manages_finance_repayment.html';
						break;
					case '还款记录-收入':
						document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
						break;
					case '提现待审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
						break;
					case '提现已审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
						break;
					case '提现审核不成功':
						document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
						break;
					case '红包提现待审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
						break;
					case '红包提现已审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
						break;
					case '用户充值记录':
						document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
						break;
					case '机构充值提现记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
						break;
					case '服务费充值记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
						break;
					case '垫资解冻':
						document.getElementById('myiframe').src = './manages_finance_advance.html';
						break;
					case '每日数据统计':
						document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
						break;
					case '服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
						break;
					case '财务对账':
						document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
						break;
					case '机构服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_record.html';
						break;
					case '红包管理':
						document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
						break;
					case '公告管理':
						document.getElementById('myiframe').src = './manages_product_notice.html';
						break;
					case '联系CEO':
						document.getElementById('myiframe').src = './manages_product_customerService.html';
						break;
					case '信息流管理':
						document.getElementById('myiframe').src = './manages_product_information.html';
						break;
					case '攻略管理':
						document.getElementById('myiframe').src = './manages_loan_strategy.html';
						break;
					case '逾期催收管理':
						document.getElementById('myiframe').src = './manages_collection.html';
						break;
					case '催收组':
						document.getElementById('myiframe').src = './manages_collection_team.html';
						break;
					case '逾期催收分组':
						document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
						break;
					case '扣款失败记录':
						document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
						break;
					case '用户信息':
						document.getElementById('myiframe').src = './manages_yy_userinformation.html';
						break;
					case '订单信息':
						document.getElementById('myiframe').src = './manages_yy_productinformation.html';
						break;
					case '手机型号评估清单':
						document.getElementById('myiframe').src = './manages_yy_evaluating.html';
						break;
					case '日志管理':
						document.getElementById('myiframe').src = './manages_setup_journal.html';
						break;
					case '菜单管理':
						document.getElementById('myiframe').src = './manages_setup_meun.html';
						break;
					case 'banner管理':
						document.getElementById('myiframe').src = './manages_setup_banner.html';
						break;
					case '短信配置':
						document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
						break;
					case '系统配置':
						document.getElementById('myiframe').src = './manages_setup_system.html';
						break;
					case '贷超管理':
						document.getElementById('myiframe').src = './manages_setup_exceeding.html';
						break;
					case '垫资设置':
						document.getElementById('myiframe').src = './manages_setup_advance.html';
						break;
					default:
				}
				console.log(that.userNaves[index]);
			} else {
				$.each(that.userNaves, function (y) {
					_vue2.default.set(that.userNaves[y], 'class', false);
				});
				$.each(that.manageMeun, function (i) {
					$.each(that.manageMeun[i].children, function (n) {
						_vue2.default.set(that.manageMeun[i].children[n], 'class', false);
					});
				});
				_vue2.default.set(that.userNaves[that.userNaves.length - 1], 'class', true);

				switch (that.userNaves[that.userNaves.length - 1].text) {
					case '机构管理':
						document.getElementById('myiframe').src = './manages_system_institution.html';
						break;
					case '后台账号管理':
						document.getElementById('myiframe').src = './manages_system_account.html';
						break;
					case '角色管理':
						document.getElementById('myiframe').src = './manages_system_role.html';
						break;
					case '服务设置':
						document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
						break;
					case '服务设置2':
						document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
						break;
					case '业务员管理(分销)':
						document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
						break;
					case '公众号服务设置':
						document.getElementById('myiframe').src = './manages_system_publicSettings.html';
						break;
					case '代理商管理':
						document.getElementById('myiframe').src = './manages_system_agent.html';
						break;
					case '注册用户':
						document.getElementById('myiframe').src = './manages_users_register.html';
						break;
					case '借款中用户':
						document.getElementById('myiframe').src = './manages_users_worrower.html';
						break;
					case '历史借款用户':
						document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
						break;
					case '借款黑名单用户':
						document.getElementById('myiframe').src = './manages_users_blacklist.html';
						break;
					case '认证未申请用户用户':
						document.getElementById('myiframe').src = './manages_users_noApplication.html';
						break;
					case '待审核用户':
						document.getElementById('myiframe').src = './manages_risk_audited.html';
						break;
					case '渠道待复审用户':
						document.getElementById('myiframe').src = './manages_risk_retrial.html';
						break;
					case '渠道审核成功':
						document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
						break;
					case '审核不成功':
						document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
						break;
					case '渠道统计':
						document.getElementById('myiframe').src = './manages_channel_statistics.html';
						break;
					case '渠道隐藏率':
						document.getElementById('myiframe').src = './manages_channel_hide.html';
						break;
					case '渠道注册':
						document.getElementById('myiframe').src = './manages_channel_registration.html';
						break;
					case '渠道借款中用户中用户':
						document.getElementById('myiframe').src = './manages_channel_borrowing.html';
						break;
					case '渠道历史借款用户':
						document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
						break;
					case '渠道待复审':
						document.getElementById('myiframe').src = './manages_channel_reviewed.html';
						break;
					case '渠道渠道审核成功':
						document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
						break;
					case '渠道审核不成功':
						document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
						break;
					case '待放款':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款中记录':
						document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
						break;
					case '放款记录-支出':
						document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
						break;
					case '待还款':
						document.getElementById('myiframe').src = './manages_finance_repayment.html';
						break;
					case '还款记录-收入':
						document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
						break;
					case '提现待审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
						break;
					case '提现已审核':
						document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
						break;
					case '提现审核不成功':
						document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
						break;
					case '红包提现待审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
						break;
					case '红包提现已审核':
						document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
						break;
					case '用户充值记录':
						document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
						break;
					case '机构充值提现记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
						break;
					case '服务费充值记录':
						document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
						break;
					case '垫资解冻':
						document.getElementById('myiframe').src = './manages_finance_advance.html';
						break;
					case '每日数据统计':
						document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
						break;
					case '服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
						break;
					case '财务对账':
						document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
						break;
					case '机构服务使用记录':
						document.getElementById('myiframe').src = './manages_statistics_record.html';
						break;
					case '红包管理':
						document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
						break;
					case '公告管理':
						document.getElementById('myiframe').src = './manages_product_notice.html';
						break;
					case '联系CEO':
						document.getElementById('myiframe').src = './manages_product_customerService.html';
						break;
					case '信息流管理':
						document.getElementById('myiframe').src = './manages_product_information.html';
						break;
					case '攻略管理':
						document.getElementById('myiframe').src = './manages_loan_strategy.html';
						break;
					case '逾期催收管理':
						document.getElementById('myiframe').src = './manages_collection.html';
						break;
					case '催收组':
						document.getElementById('myiframe').src = './manages_collection_team.html';
						break;
					case '逾期催收分组':
						document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
						break;
					case '扣款失败记录':
						document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
						break;
					case '用户信息':
						document.getElementById('myiframe').src = './manages_yy_userinformation.html';
						break;
					case '订单信息':
						document.getElementById('myiframe').src = './manages_yy_productinformation.html';
						break;
					case '手机型号评估清单':
						document.getElementById('myiframe').src = './manages_yy_evaluating.html';
						break;
					case '日志管理':
						document.getElementById('myiframe').src = './manages_setup_journal.html';
						break;
					case '菜单管理':
						document.getElementById('myiframe').src = './manages_setup_meun.html';
						break;
					case 'banner管理':
						document.getElementById('myiframe').src = './manages_setup_banner.html';
						break;
					case '短信配置':
						document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
						break;
					case '系统配置':
						document.getElementById('myiframe').src = './manages_setup_system.html';
						break;
					case '贷超管理':
						document.getElementById('myiframe').src = './manages_setup_exceeding.html';
						break;
					case '垫资设置':
						document.getElementById('myiframe').src = './manages_setup_advance.html';
						break;
					default:
				}
			}
			$.each(that.userNaves, function (i) {
				if (that.userNaves[i].class) {
					$.each(that.manageMeun, function (n) {
						_vue2.default.set(that.manageMeun[n], 'meunOpen', false);
						$.each(that.manageMeun[n].children, function (y) {
							if (that.manageMeun[n].children[y].text === that.userNaves[i].text) {
								_vue2.default.set(that.manageMeun[n], 'meunOpen', true);
								_vue2.default.set(that.manageMeun[n].children[y], 'class', true);
							}
						});
					});
				}
			});
			var wid = 0;
			that.$nextTick(function () {
				$.each($('#yh_width_auto p a'), function (i) {
					console.log($(this).length);
					console.log($(this).width() + 57);
					wid += $(this).width() + 57;
				});
				_vue2.default.set(that, 'naverWidth', wid);
				if ($('#yh_width_auto p').width() > $('#yh_width_auto').width()) {
					$('#yh_width_auto p').animate({ marginLeft: -($('#yh_width_auto p').width() - $('#yh_width_auto').width()) });
				} else {
					$('#yh_width_auto p').css({ marginLeft: 0 });
				}
				$('#yh_width_auto p').css({ width: that.naverWidth + 'px' });
			});
		},
		scrollTabLeft: function scrollTabLeft() {
			var that = this;
			function calSumWidth(elements) {
				var width = 0;
				$(elements).each(function () {
					width += $(this).outerWidth(true);
				});
				return width;
			}
			var marginLeftVal = Math.abs(parseInt($('#yh_width_auto p').css('margin-left')));
			// 可视区域非tab宽度
			var tabOuterWidth = calSumWidth($("#yh_slide").children().not("#yh_width_auto"));
			//可视区域tab宽度
			var visibleWidth = $("#yh_width_auto").outerWidth(true) - tabOuterWidth;
			console.log(visibleWidth);

			//实际滚动宽度
			var scrollVal = 0;
			if ($("#yh_width_auto p").width() < visibleWidth) {
				return false;
			} else {
				var tabElement = $(".J_menuTab:first");
				console.log($(tabElement).html());
				var offsetVal = 0;
				console.log(tabElement);
				while (offsetVal + $(tabElement).outerWidth(true) <= marginLeftVal) {
					//找到离当前tab最近的元素
					offsetVal += $(tabElement).outerWidth(true);
					tabElement = $(tabElement).next();
					console.log(22222);
				}
				console.log(offsetVal + $(tabElement).outerWidth(true));
				console.log($(tabElement).next().outerWidth(true));
				console.log($(tabElement).outerWidth(true));
				console.log(marginLeftVal);
				offsetVal = 0;

				if (calSumWidth($(tabElement).prevAll()) > visibleWidth) {
					while (offsetVal + $(tabElement).outerWidth(true) < visibleWidth && tabElement.length > 0) {
						offsetVal += $(tabElement).outerWidth(true);
						tabElement = $(tabElement).prev();
						console.log(111111);
					}
					console.log(3333);
					console.log($(tabElement).prevAll());
					scrollVal = calSumWidth($(tabElement).prevAll());
				}
				console.log(scrollVal);
				console.log(tabElement);
			}
			$('#yh_width_auto p').animate({
				marginLeft: 0 - scrollVal + 'px'
			}, "fast");
		},
		scrollTabRight: function scrollTabRight() {
			function calSumWidth(elements) {
				var width = 0;
				$(elements).each(function () {
					width += $(this).outerWidth(true);
				});
				return width;
			}
			var marginLeftVal = Math.abs(parseInt($('#yh_width_auto p').css('margin-left')));
			// 可视区域非tab宽度
			var tabOuterWidth = calSumWidth($("#yh_slide").children().not("#yh_width_auto"));
			//可视区域tab宽度
			var visibleWidth = $("#yh_width_auto").outerWidth(true) - tabOuterWidth;
			//实际滚动宽度
			var scrollVal = 0;
			if ($("#yh_width_auto p").width() < visibleWidth) {
				return false;
			} else {
				var tabElement = $(".J_menuTab:first");
				var offsetVal = 0;
				while (offsetVal + $(tabElement).outerWidth(true) <= marginLeftVal) {
					//找到离当前tab最近的元素
					offsetVal += $(tabElement).outerWidth(true);
					tabElement = $(tabElement).next();
				}
				offsetVal = 0;
				while (offsetVal + $(tabElement).outerWidth(true) < visibleWidth && tabElement.length > 0) {
					offsetVal += $(tabElement).outerWidth(true);
					tabElement = $(tabElement).next();
				}
				scrollVal = calSumWidth($(tabElement).prevAll());
				if (scrollVal > 0) {
					$('#yh_width_auto p').animate({
						marginLeft: 0 - scrollVal + 'px'
					}, "fast");
				}
			}
		},
		meundistre: function meundistre(index, cur) {
			var that = this;
			console.log(12354564456465);
			$.each(that.manageMeun[index].children, function (i) {
				_vue2.default.set(that.manageMeun[index].children[i], 'class', false);
			});
			_vue2.default.set(that.manageMeun[index].children[cur], 'class', true);

			console.log(that.userNaves.indexOf(that.manageMeun[index].children[cur]));

			if (that.userNaves.indexOf(that.manageMeun[index].children[cur]) === -1) {
				that.userNaves.push(that.manageMeun[index].children[cur]);
				var wid = 0;
				that.$nextTick(function () {
					$.each($('#yh_width_auto p a'), function (i) {
						console.log($(this).length);
						console.log($(this).width() + 57);
						wid += $(this).width() + 57;
					});
					_vue2.default.set(that, 'naverWidth', wid);
					$('#yh_width_auto p').css({ width: that.naverWidth + 'px' });
					if ($('#yh_width_auto p').width() > $('#yh_width_auto').width()) {
						$('#yh_width_auto p').animate({ marginLeft: -($('#yh_width_auto p').width() - $('#yh_width_auto').width()) });
					} else {
						$('#yh_width_auto p').css({ marginLeft: 0 });
					}
				});
			} else {
				$.each();
				$.each(that.userNaves, function (i) {
					_vue2.default.set(that.userNaves[i], 'class', false);
				});
				_vue2.default.set(that.userNaves[that.userNaves.indexOf(that.manageMeun[index].children[cur])], 'class', true);
			}

			console.log(that.naverWidth);
			switch (that.manageMeun[index].children[cur].text) {
				case '机构管理':
					document.getElementById('myiframe').src = './manages_system_institution.html';
					break;
				case '后台账号管理':
					document.getElementById('myiframe').src = './manages_system_account.html';
					break;
				case '角色管理':
					document.getElementById('myiframe').src = './manages_system_role.html';
					break;
				case '服务设置':
					document.getElementById('myiframe').src = './manages_system_serviceSettings.html';
					break;
				case '服务设置2':
					document.getElementById('myiframe').src = './manages_system_multiServiceSettings.html';
					break;
				case '业务员管理(分销)':
					document.getElementById('myiframe').src = './manages_system_salesmanManagement.html';
					break;
				case '公众号服务设置':
					document.getElementById('myiframe').src = './manages_system_publicSettings.html';
					break;
				case '代理商管理':
					document.getElementById('myiframe').src = './manages_system_agent.html';
					break;
				case '注册用户':
					document.getElementById('myiframe').src = './manages_users_register.html';
					break;
				case '借款中用户':
					document.getElementById('myiframe').src = './manages_users_worrower.html';
					break;
				case '历史借款用户':
					document.getElementById('myiframe').src = './manages_users_historyWorrower.html';
					break;
				case '借款黑名单用户':
					document.getElementById('myiframe').src = './manages_users_blacklist.html';
					break;
				case '认证未申请用户':
					document.getElementById('myiframe').src = './manages_users_noApplication.html';
					break;
				case '待审核用户':
					document.getElementById('myiframe').src = './manages_risk_audited.html';
					break;
				case '渠道待复审用户':
					document.getElementById('myiframe').src = './manages_risk_retrial.html';
					break;
				case '渠道审核成功':
					document.getElementById('myiframe').src = './manages_risk_auditSuccess.html';
					break;
				case '审核不成功':
					document.getElementById('myiframe').src = './manages_risk_unsuccessful.html';
					break;
				case '渠道统计':
					document.getElementById('myiframe').src = './manages_channel_statistics.html';
					break;
				case '渠道隐藏率':
					document.getElementById('myiframe').src = './manages_channel_hide.html';
					break;
				case '渠道注册':
					document.getElementById('myiframe').src = './manages_channel_registration.html';
					break;
				case '渠道借款中用户':
					document.getElementById('myiframe').src = './manages_channel_borrowing.html';
					break;
				case '渠道历史借款用户':
					document.getElementById('myiframe').src = './manages_channel_historicalBorrowing.html';
					break;
				case '渠道待复审':
					document.getElementById('myiframe').src = './manages_channel_reviewed.html';
					break;
				case '渠道渠道审核成功':
					document.getElementById('myiframe').src = './manages_channel_auditSuccess.html';
					break;
				case '渠道审核不成功':
					document.getElementById('myiframe').src = './manages_channel_verifyUnsuccessful.html';
					break;
				case '待放款':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款中记录':
					document.getElementById('myiframe').src = './manages_finance_pendingLoan.html';
					break;
				case '放款记录-支出':
					document.getElementById('myiframe').src = './manages_finance_expenditureRecord.html';
					break;
				case '待还款':
					document.getElementById('myiframe').src = './manages_finance_repayment.html';
					break;
				case '还款记录-收入':
					document.getElementById('myiframe').src = './manages_finance_revenueRecords.html';
					break;
				case '提现待审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudit.html';
					break;
				case '提现已审核':
					document.getElementById('myiframe').src = './manages_finance_withdrawalAudited.html';
					break;
				case '提现审核不成功':
					document.getElementById('myiframe').src = './manages_finance_widthdralUnsuccessful.html';
					break;
				case '红包提现待审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelope.html';
					break;
				case '红包提现已审核':
					document.getElementById('myiframe').src = './manages_finance_widthredEnvelopesAudit.html';
					break;
				case '用户充值记录':
					document.getElementById('myiframe').src = './manages_finance_rechargeRecord.html';
					break;
				case '机构充值提现记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecord.html';
					break;
				case '服务费充值记录':
					document.getElementById('myiframe').src = './manages_finance_withdrawalsRecharge.html';
					break;
				case '垫资解冻':
					document.getElementById('myiframe').src = './manages_finance_advance.html';
					break;
				case '每日数据统计':
					document.getElementById('myiframe').src = './manages_statistics_advanceThaw.html';
					break;
				case '服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_rsageRecord.html';
					break;
				case '财务对账':
					document.getElementById('myiframe').src = './manages_statistics_reconciliation.html';
					break;
				case '机构服务使用记录':
					document.getElementById('myiframe').src = './manages_statistics_record.html';
					break;
				case '红包管理':
					document.getElementById('myiframe').src = './manages_product_redenvelopes.html';
					break;
				case '公告管理':
					document.getElementById('myiframe').src = './manages_product_notice.html';
					break;
				case '联系CEO':
					document.getElementById('myiframe').src = './manages_product_customerService.html';
					break;
				case '信息流管理':
					document.getElementById('myiframe').src = './manages_product_information.html';
					break;
				case '攻略管理':
					document.getElementById('myiframe').src = './manages_loan_strategy.html';
					break;
				case '逾期催收管理':
					document.getElementById('myiframe').src = './manages_collection.html';
					break;
				case '催收组':
					document.getElementById('myiframe').src = './manages_collection_team.html';
					break;
				case '逾期催收分组':
					document.getElementById('myiframe').src = './manages_collection_groupCustomer.html';
					break;
				case '扣款失败记录':
					document.getElementById('myiframe').src = './manages_collection_deductionFailure.html';
					break;
				case '用户信息':
					document.getElementById('myiframe').src = './manages_yy_userinformation.html';
					break;
				case '订单信息':
					document.getElementById('myiframe').src = './manages_yy_productinformation.html';
					break;
				case '手机型号评估清单':
					document.getElementById('myiframe').src = './manages_yy_evaluating.html';
					break;
				case '日志管理':
					document.getElementById('myiframe').src = './manages_setup_journal.html';
					break;
				case '菜单管理':
					document.getElementById('myiframe').src = './manages_setup_meun.html';
					break;
				case 'banner管理':
					document.getElementById('myiframe').src = './manages_setup_banner.html';
					break;
				case '短信配置':
					document.getElementById('myiframe').src = './manages_setup_shortmessage.html';
					break;
				case '系统配置':
					document.getElementById('myiframe').src = './manages_setup_system.html';
					break;
				case '贷超管理':
					document.getElementById('myiframe').src = './manages_setup_exceeding.html';
					break;
				case '垫资设置':
					document.getElementById('myiframe').src = './manages_setup_advance.html';
					break;
				default:
			}
		},
		loginCancellation: function loginCancellation() {
			if (this.cancellation) {
				_vue2.default.set(this, 'cancellation', false);
			} else {
				_vue2.default.set(this, 'cancellation', true);
			}
		},
		selfAdaption: function selfAdaption() {
			function setIframeHeight(iframe) {
				if (iframe) {
					var iframeWin = iframe.contentWindow || iframe.contentDocument.parentWindow;
					if (iframeWin.document.body) {
						iframe.height = document.documentElement.clientHeight - 206;
					}
				}
			}
			window.onload = function () {
				setIframeHeight(document.getElementById('myiframe'));
			};
			window.onresize = function () {
				setIframeHeight(document.getElementById('myiframe'));
			};
		}
	},
	mounted: function mounted() {
		this.selfAdaption();
		this.meunList();
	}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ }),

/***/ 1:
/*!***************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/_webpack-dev-server@3.1.14@webpack-dev-server/client?http://127.0.0.1:8088 (webpack)/hot/dev-server.js ./public/index/js/manage.js ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\web\yh_manages\node_modules\_webpack-dev-server@3.1.14@webpack-dev-server\client\index.js?http://127.0.0.1:8088 */"./node_modules/_webpack-dev-server@3.1.14@webpack-dev-server/client/index.js?http://127.0.0.1:8088");
__webpack_require__(/*! E:\web\yh_manages\node_modules\_webpack@4.29.5@webpack\hot\dev-server.js */"./node_modules/_webpack@4.29.5@webpack/hot/dev-server.js");
module.exports = __webpack_require__(/*! E:\web\yh_manages\public\index\js\manage.js */"./public/index/js/manage.js");


/***/ })

/******/ });
//# sourceMappingURL=manages.js.map