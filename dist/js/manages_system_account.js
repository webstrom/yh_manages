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
/******/ 		"manages_system_account": 0
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
/******/ 	deferredModules.push([2,"common"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/index/js/manages_system_account.js":
/*!***************************************************!*\
  !*** ./public/index/js/manages_system_account.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _index = __webpack_require__(/*! ../scss/index.scss */ "./public/index/scss/index.scss");

var _index2 = _interopRequireDefault(_index);

var _vue = __webpack_require__(/*! vue */ "./node_modules/_vue@2.6.6@vue/dist/vue.esm.js");

var _vue2 = _interopRequireDefault(_vue);

__webpack_require__(/*! ./layui */ "./public/index/js/layui.js");

var _package = __webpack_require__(/*! ./package */ "./public/index/js/package.json");

var _package2 = _interopRequireDefault(_package);

var _common = __webpack_require__(/*! ./common */ "./public/index/js/common.js");

var _common2 = _interopRequireDefault(_common);

var _jsMd = __webpack_require__(/*! js-md5 */ "./node_modules/_js-md5@0.7.3@js-md5/src/md5.js");

var _jsMd2 = _interopRequireDefault(_jsMd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _vue2.default({
	el: '#manages_system_account',
	data: {
		province: _package2.default,
		checkboxData: [{
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}, {
			sik: 1,
			loginname: '111',
			role: '宗荣华',
			phone: '1234567890',
			name: '宗荣华',
			jgbh: '123456',
			qd: '123456@qq.com',
			state: 1,
			sf: '显示',
			dis: '李世建'
		}],
		checkboxList: [],
		checked: false,
		userauthorize: [{
			name: '超级管理员',
			codcod: '9999',
			qudao: '123'
		}, {
			name: '超级管理员',
			cod: '9999',
			qudao: '123'
		}, {
			name: '超级管理员',
			cod: '9999',
			qudao: '123'
		}, {
			name: '超级管理员',
			cod: '9999',
			qudao: '123'
		}, {
			name: '超级管理员',
			cod: '9999',
			qudao: '123'
		}],
		role: [],
		rows: 10,
		page: 1,
		total: 0,
		quDao: false
	},
	watch: {
		//深度 watcher
		checkboxList: {
			handler: function handler(val, oldVal) {
				if (this.checkboxList.length === this.checkboxData.length) {
					this.checked = true;
				} else {
					this.checked = false;
				}
				//判断修改是否可以使用

				console.log(this.checkboxList);
			},
			deep: true
		}
	},
	methods: {
		checkedAll: function checkedAll() {
			var _this = this;

			if (!this.checked) {
				this.checkboxList = [];
				this.checkboxData.forEach(function (index, item) {
					_this.checkboxList.push(item);
				});
			} else {
				this.checkboxList = [];
			}
			console.log('全选/反选：' + this.checkboxList);
		},
		accountList: function accountList() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			_common2.default.tokensNoLogin(token);

			var data = {
				token: token,
				page: that.page,
				rows: that.rows
			};
			$.ajax({
				url: _common2.default.manage_url + 'user/userList.htm',
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
					//res = JSON.parse(JSON.stringify(res));
					var rowsData = new Array(JSON.parse(JSON.parse(JSON.stringify(res))));
					//console.log(JSON.stringify(res));
					console.log(JSON.parse(res));
					console.log(rowsData);
					//res = JSON.parse(res);
					if (rowsData instanceof Array) {
						_vue2.default.set(that, 'checkboxData', rowsData[0].rows);
						_vue2.default.set(that, 'total', rowsData[0].total);
						that.managesPage();
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
		RoleList: function RoleList() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			_common2.default.tokensNoLogin(token);
			var data = {
				token: token
			};
			$.ajax({
				url: _common2.default.manage_url + 'role/roleCombobox.htm',
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
						_vue2.default.set(that, 'role', res);
					} else {
						_common2.default.layerMsg('数据格式返回错误', 2);
						return false;
					}
				},
				error: function error(_error2) {
					_common2.default.layerMsg('请求错误！', 2);
					console.log(_error2);
				}
			});
		},
		roleClick: function roleClick(e) {
			e.stopPropagation();
			console.log($(e.target).find('option:selected').val());
		},
		modifyUser: function modifyUser() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			var vm;
			if (that.checkboxList.length !== 1) {
				_common2.default.layerMsg('请选择单个用户进行操作', 2);
				return false;
			}
			_vue2.default.set(that, 'quDao', false);
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['800px', 'auto'],
					title: ['修改用户信息', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id: 'layer-role',
					shade: .3,
					btn: ["确定", "取消"],
					btnAlign: 'c',
					shadeClose: true, //开启遮罩关闭
					content: $('#yh_layer_1').html(),
					success: function success(layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
						btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
						btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
						btn.find('#userName').attr('disabled', true);
						vm = new _vue2.default({
							data: {
								userName: '',
								roleId: '',
								mobile: '',
								channel: '',
								password: '',
								nick: '',
								companyId: '',
								userDescription: '',

								roleName: '',
								checkbox: [],
								managesList: [],
								quDao: that.quDao,
								disabled: true
							},
							methods: {
								initUser: function initUser() {
									var current = this;
									_vue2.default.set(current, 'userName', that.checkboxData[that.checkboxList[0]].userName);
									_vue2.default.set(current, 'roleId', that.checkboxData[that.checkboxList[0]].roleId);
									_vue2.default.set(current, 'mobile', that.checkboxData[that.checkboxList[0]].mobile);
									_vue2.default.set(current, 'channel', that.checkboxData[that.checkboxList[0]].channel);
									_vue2.default.set(current, 'password', that.checkboxData[that.checkboxList[0]].password);
									_vue2.default.set(current, 'nick', that.checkboxData[that.checkboxList[0]].nick);
									_vue2.default.set(current, 'companyId', that.checkboxData[that.checkboxList[0]].companyId);
									_vue2.default.set(current, 'userDescription', that.checkboxData[that.checkboxList[0]].userDescription);
									_vue2.default.set(current, 'roleName', that.checkboxData[that.checkboxList[0]].roleName);
								},
								AddUser: function AddUser() {
									var current = this;
									window.parent.layui.use('layer', function () {
										var layer = window.parent.layui.layer;
										var vm2;
										layer.open({
											type: 1,
											area: ['1000px', '600px'],
											title: ['选择角色', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
											id: 'layer-role_1',
											shade: .3,
											btn: ["确定", "取消"],
											btnAlign: 'c',
											shadeClose: true, //开启遮罩关闭
											content: $('#yh_manages_jump').html(),
											success: function success(lay) {
												lay.css({ paddingBottom: ' 30px', background: '#ffffff' });
												var bt = lay.find('.layui-layer-btn');
												bt.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
												bt.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
												bt.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
												vm2 = new _vue2.default({
													data: {
														managesList: [],
														checkbox: [],
														checkeds: false
													},
													watch: {
														checkbox: {
															handler: function handler(val, oldVal) {
																var curr = this;
																if (curr.checkbox.length === curr.managesList.length) {
																	curr.checkeds = true;
																} else {
																	curr.checkeds = false;
																}
																//判断修改是否可以使用
																console.log(curr.checkbox);
																_vue2.default.set(current, 'checkbox', curr.checkbox);
															},
															deep: true
														}
													},
													methods: {
														userList: function userList() {
															var cur = this;
															var token = _common2.default.getLocalStorage('USERTOKEN');
															_common2.default.tokensNoLogin(token);
															if (current.checkbox.length > 0) {
																_vue2.default.set(cur, 'checkbox', current.checkbox);
															}
															var data = {
																token: token
															};
															$.ajax({
																url: _common2.default.manage_url + 'role/roleCombobox.htm',
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
																		_vue2.default.set(cur, 'managesList', res);
																		_vue2.default.set(current, 'managesList', res);
																		$.each(cur.managesList, function (i) {
																			if (current.roleId === cur.managesList[i].roleId) {
																				console.log(i);
																				_vue2.default.set(cur, 'checkbox', [i]);
																			}
																		});
																		cur.layerManagesPage();
																	} else {
																		_common2.default.layerMsg('数据格式返回错误', 2);
																		return false;
																	}
																},
																error: function error(_error3) {
																	_common2.default.layerMsg('请求错误！', 2);
																	console.log(_error3);
																}
															});
														},
														layerManagesPage: function layerManagesPage() {
															window.parent.layui.use('laypage', function () {
																var laypage = window.parent.layui.laypage;
																//执行一个laypage实例
																laypage.render({
																	elem: 'yh_manages_lauerpages' //注意，这里的 test1 是 ID，不用加 # 号
																	, count: 50 //数据总数，从服务端得到
																	, theme: 'manages',
																	limit: 10,
																	limits: [10, 20, 50, 100],
																	prev: "上一页",
																	next: "下一页",
																	first: 1,
																	groups: 3,
																	last: 50,
																	layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
																	jump: function jump(obj, first) {
																		console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
																		console.log(obj.limit); //得到每页显示的条数
																		console.log(first);
																	}
																});
															});
														}
													},
													mounted: function mounted() {
														this.userList();
													}
												});
												vm2.$mount(lay[0].childNodes[1]);
											},
											yes: function yes(index, lay) {
												console.log(current.checkbox.length);
												if (current.checkbox.length < 1) {
													_common2.default.layerMsg('请选择一个角色', 7);
													return false;
												}
												if (current.checkbox.length > 1) {
													_common2.default.layerMsg('只能选择一个角色', 7);
													return false;
												}
												_vue2.default.set(current, 'roleName', current.managesList[current.checkbox[0]].roleName);
												_vue2.default.set(current, 'roleId', current.managesList[current.checkbox[0]].roleId);
												layer.close(index);
											},
											end: function end(lay) {
												vm2.$destroy();
											}
										});
									});
								}
							},
							mounted: function mounted() {
								this.initUser();
							}
						});
						vm.$mount(layero[0].childNodes[1]);
					},
					yes: function yes(number, determine) {
						if (vm.userName === '') {
							_common2.default.layerMsg('用户名不能为空！', 2);
							return false;
						}
						if (vm.roleId === '' || vm.roleName === '') {
							_common2.default.layerMsg('请选择角色！', 2);
							return false;
						}
						if (vm.mobile === '') {
							_common2.default.layerMsg('请输入手机号！', 2);
							return false;
						}
						if (!/^1(3|4|5|7|8)\d{9}$/.test(vm.mobile)) {
							_common2.default.layerMsg('手机号码有误，请重新输入', { icon: 2 });
							return false;
						}
						if (vm.companyId === '') {
							_common2.default.layerMsg('请输机构识别码！', 2);
							return false;
						}
						if (vm.userDescription === '') {
							_common2.default.layerMsg('请输备注！', 2);
							return false;
						}
						if (vm.password === '') {
							_common2.default.layerMsg('请输入密码！', 2);
							return false;
						}
						var addUserData = {
							token: token,
							userId: that.checkboxData[that.checkboxList[0]].userId,
							userName: vm.userName,
							roleId: vm.roleId,
							mobile: vm.mobile,
							channel: vm.channel,
							password: vm.password,
							nick: vm.nick,
							companyId: vm.companyId,
							userDescription: vm.userDescription,
							userType: 2,
							roleName: vm.roleName
						};
						console.log(addUserData);
						$.ajax({
							url: _common2.default.manage_url + 'user/reserveUser.htm',
							data: addUserData,
							type: 'post',
							success: function success(res) {
								console.log(res.errorMsg);
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
								console.log(res.errorMsg);
								console.log(res);
								if (res.errorMsg === undefined) {
									_common2.default.layerMsg('修改成功', 1);
									that.accountList();
									layer.close(number);
								} else {
									_common2.default.layerMsg(res.errorMsg, 2);
								}
								console.log(res);
							},
							error: function error(_error4) {
								_common2.default.layerMsg('请求错误！', 2);
								console.log(_error4);
							}
						});
						console.log(vm.userName);
						console.log(vm.mobile);
					},
					end: function end(layero) {
						vm.$destroy();
					}
				});
			});
		},
		addUser: function addUser(e) {
			var that = this;
			_vue2.default.set(that, 'quDao', false);
			that.AddQuDao();
		},
		AddQuDao: function AddQuDao() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			var vm;
			var title = that.quDao ? '新增渠道用户' : '添加用户信息';
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['800px', 'auto'],
					title: [title, 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id: 'layer-role',
					shade: .3,
					btn: ["确定", "取消"],
					btnAlign: 'c',
					shadeClose: true, //开启遮罩关闭
					content: $('#yh_layer_1').html(),
					success: function success(layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
						btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
						btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
						vm = new _vue2.default({
							data: {
								userName: '',
								roleId: '',
								mobile: '',
								channel: '',
								password: '',
								nick: '',
								companyId: '',
								userDescription: '',

								roleName: '',
								checkbox: [],
								managesList: [],
								quDao: that.quDao,
								disabled: false
							},
							methods: {
								AddUser: function AddUser() {
									var current = this;
									//that.RoleList();
									window.parent.layui.use('layer', function () {
										var layer = window.parent.layui.layer;
										var vm2;
										layer.open({
											type: 1,
											area: ['1000px', '600px'],
											title: ['选择角色', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
											id: 'layer-role_1',
											shade: .3,
											btn: ["确定", "取消"],
											btnAlign: 'c',
											shadeClose: true, //开启遮罩关闭
											content: $('#yh_manages_jump').html(),
											success: function success(lay) {
												lay.css({ paddingBottom: ' 30px', background: '#ffffff' });
												var bt = lay.find('.layui-layer-btn');
												bt.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
												bt.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
												bt.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
												vm2 = new _vue2.default({
													data: {
														managesList: [],
														checkbox: [],
														checkeds: false
													},
													watch: {
														checkbox: {
															handler: function handler(val, oldVal) {
																var curr = this;
																if (curr.checkbox.length === curr.managesList.length) {
																	curr.checkeds = true;
																} else {
																	curr.checkeds = false;
																}
																//判断修改是否可以使用
																console.log(curr.checkbox);
																_vue2.default.set(current, 'checkbox', curr.checkbox);
															},
															deep: true
														}
													},
													methods: {
														userList: function userList() {
															var cur = this;
															var token = _common2.default.getLocalStorage('USERTOKEN');
															_common2.default.tokensNoLogin(token);
															if (current.checkbox.length > 0) {
																_vue2.default.set(cur, 'checkbox', current.checkbox);
															}
															var data = {
																token: token
															};
															$.ajax({
																url: _common2.default.manage_url + 'role/roleCombobox.htm',
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
																		_vue2.default.set(cur, 'managesList', res);
																		_vue2.default.set(current, 'managesList', res);
																		cur.layerManagesPage();
																	} else {
																		_common2.default.layerMsg('数据格式返回错误', 2);
																		return false;
																	}
																},
																error: function error(_error5) {
																	_common2.default.layerMsg('请求错误！', 2);
																	console.log(_error5);
																}
															});
														},
														layerManagesPage: function layerManagesPage() {
															window.parent.layui.use('laypage', function () {
																var laypage = window.parent.layui.laypage;
																//执行一个laypage实例
																laypage.render({
																	elem: 'yh_manages_lauerpages' //注意，这里的 test1 是 ID，不用加 # 号
																	, count: 50 //数据总数，从服务端得到
																	, theme: 'manages',
																	limit: 10,
																	limits: [10, 20, 50, 100],
																	prev: "上一页",
																	next: "下一页",
																	first: 1,
																	groups: 3,
																	last: 50,
																	layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
																	jump: function jump(obj, first) {
																		console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
																		console.log(obj.limit); //得到每页显示的条数
																		console.log(first);
																	}
																});
															});
														}
													},
													mounted: function mounted() {
														this.userList();
													}
												});
												vm2.$mount(lay[0].childNodes[1]);
											},
											yes: function yes(index, lay) {
												console.log(current.checkbox.length);
												if (current.checkbox.length < 1) {
													_common2.default.layerMsg('请选择一个角色', 7);
													return false;
												}
												if (current.checkbox.length > 1) {
													_common2.default.layerMsg('只能选择一个角色', 7);
													return false;
												}
												_vue2.default.set(current, 'roleName', current.managesList[current.checkbox[0]].roleName);
												_vue2.default.set(current, 'roleId', current.managesList[current.checkbox[0]].roleId);
												layer.close(index);
											},
											end: function end(lay) {
												vm2.$destroy();
											}
										});
									});
								}
							}
						});
						vm.$mount(layero[0].childNodes[1]);
					},
					yes: function yes(number, determine) {
						if (vm.userName === '') {
							_common2.default.layerMsg('用户名不能为空！', 2);
							return false;
						}
						if (vm.roleId === '' || vm.roleName === '') {
							_common2.default.layerMsg('请选择角色！', 2);
							return false;
						}
						if (vm.mobile === '') {
							_common2.default.layerMsg('请输入手机号！', 2);
							return false;
						}
						if (!/^1(3|4|5|7|8)\d{9}$/.test(vm.mobile)) {
							_common2.default.layerMsg('手机号码有误，请重新输入', { icon: 2 });
							return false;
						}
						if (vm.companyId === '') {
							_common2.default.layerMsg('请输机构识别码！', 2);
							return false;
						}
						if (vm.userDescription === '') {
							_common2.default.layerMsg('请输备注！', 2);
							return false;
						}
						if (vm.password === '') {
							_common2.default.layerMsg('请输入密码！', 2);
							return false;
						}
						var addUserData = {
							token: token,
							userName: vm.userName,
							roleId: vm.roleId,
							mobile: vm.mobile,
							channel: vm.channel,
							password: vm.password,
							nick: vm.nick,
							companyId: vm.companyId,
							userDescription: vm.userDescription,
							userType: 2,
							roleName: vm.roleName
						};
						console.log(addUserData);
						$.ajax({
							url: _common2.default.manage_url + 'user/reserveUser.htm',
							data: addUserData,
							type: 'post',
							success: function success(res) {
								console.log(res.errorMsg);
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
								console.log(res.errorMsg);
								console.log(res);
								if (res.errorMsg === undefined) {
									_common2.default.layerMsg('添加成功', 1);
									that.accountList();
									layer.close(number);
								} else {
									_common2.default.layerMsg(res.errorMsg, 2);
								}
								console.log(res);
							},
							error: function error(_error6) {
								_common2.default.layerMsg('请求错误！', 2);
								console.log(_error6);
							}
						});
						console.log(vm.userName);
						console.log(vm.mobile);
					},
					end: function end(layero) {
						vm.$destroy();
					}
				});
			});
		},
		addRole: function addRole() {
			var that = this;
			_vue2.default.set(that, 'quDao', true);
			that.AddQuDao();
		},
		enaBle: function enaBle() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			if (that.checkboxList.length < 1) {
				_common2.default.layerMsg('请勾选您需要操作的用户！', 7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList, function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId);
			});
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px', 'auto'],
					title: ['启用', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id: 'layer-role-center',
					shade: .3,
					btn: ["确定", "取消"],
					btnAlign: 'c',
					shadeClose: true, //开启遮罩关闭
					content: '是否启用该用户？',
					success: function success(layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
						btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
						btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
					},
					yes: function yes(number) {
						var data = {
							token: token,
							ids: $push.join()
						};
						console.log(data);
						$.ajax({
							url: _common2.default.manage_url + 'user/inUse.htm',
							type: 'post',
							data: data,
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
								if (res.success) {
									_common2.default.layerMsg('启用成功!', 1);
									that.accountList();
									layer.close(number);
								} else {
									_common2.default.layerMsg(res.errorMsg, 2);
								}
							},
							error: function error(_error7) {
								_common2.default.layerMsg('请求错误！', 2);
								console.log(_error7);
							}
						});
					}
				});
			});
		},
		prohibit: function prohibit() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			if (that.checkboxList.length < 1) {
				_common2.default.layerMsg('请勾选您需要操作的用户！', 7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList, function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId);
			});
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px', 'auto'],
					title: ['禁用', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id: 'layer-role-center',
					shade: .3,
					btn: ["确定", "取消"],
					btnAlign: 'c',
					shadeClose: true, //开启遮罩关闭
					content: '是否禁用该用户？',
					success: function success(layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
						btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
						btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
					},
					yes: function yes(number) {
						var data = {
							token: token,
							ids: $push.join()
						};
						console.log(data);
						$.ajax({
							url: _common2.default.manage_url + 'user/forb.htm',
							type: 'post',
							data: data,
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
								if (res.success) {
									_common2.default.layerMsg('禁用成功!', 1);
									that.accountList();
									layer.close(number);
								} else {
									_common2.default.layerMsg(res.errorMsg, 2);
								}
							},
							error: function error(_error8) {
								_common2.default.layerMsg('请求错误！', 2);
								console.log(_error8);
							}
						});
					}
				});
			});
		},
		deleteUser: function deleteUser() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			if (that.checkboxList.length < 1) {
				_common2.default.layerMsg('请勾选您需要操作的用户！', 7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList, function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId);
			});
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px', 'auto'],
					title: ['删除', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id: 'layer-role-center',
					shade: .3,
					btn: ["确定", "取消"],
					btnAlign: 'c',
					shadeClose: true, //开启遮罩关闭
					content: '是否删除该用户？',
					success: function success(layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
						btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
						btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
					},
					yes: function yes(number) {
						var data = {
							token: token,
							ids: $push.join()
						};
						console.log(data);
						$.ajax({
							url: _common2.default.manage_url + 'user/deleteUser.htm',
							type: 'post',
							data: data,
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
								if (res.success) {
									_common2.default.layerMsg('删除成功!', 1);
									_vue2.default.set(that, 'checkboxList', []);
									that.accountList();
									layer.close(number);
								} else {
									_common2.default.layerMsg(res.errorMsg, 2);
								}
							},
							error: function error(_error9) {
								_common2.default.layerMsg('请求错误！', 2);
								console.log(_error9);
							}
						});
					}
				});
			});
		},
		authorize: function authorize() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			if (that.checkboxList.length !== 1) {
				_common2.default.layerMsg('请勾选单个用户进行操作', 7);
				return false;
			}
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				var vm;
				layer.ready(function () {
					layer.open({
						type: 1,
						area: ['1100px', '600px'],
						title: ['渠道授权查看', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
						id: 'layer-role',
						shade: .3,
						btn: ["授权", "取消"],
						btnAlign: 'c',
						shadeClose: true, //开启遮罩关闭
						content: $('#yh_layer_3').html(),
						success: function success(layero) {
							layero.css({ paddingBottom: ' 30px', background: '#ffffff' });
							var btn = layero.find('.layui-layer-btn');
							btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
							btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF', fontsize: '12px' });
							btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
							vm = new _vue2.default({
								data: {
									userauthorize: [],
									page: 1,
									rows: 10,
									checkboxList: [],
									checked: false
								},
								watch: {
									//深度 watcher
									checkboxList: {
										handler: function handler(val, oldVal) {
											if (this.checkboxList.length === this.userauthorize.length) {
												this.checked = true;
											} else {
												this.checked = false;
											}
											//判断修改是否可以使用
											console.log(this.checkboxList);
										},
										deep: true
									}
								},
								methods: {
									checkedAll: function checkedAll() {
										var _this2 = this;

										if (!this.checked) {
											this.checkboxList = [];
											this.userauthorize.forEach(function (index, item) {
												_this2.checkboxList.push(item);
											});
										} else {
											this.checkboxList = [];
										}
										console.log('全选/反选：' + this.checkboxList);
									},
									reserveList: function reserveList() {
										var current = this;
										var reserveData = {
											token: token,
											companyId: that.checkboxData[that.checkboxList[0]].companyId,
											page: current.page,
											rows: current.rows
										};
										$.ajax({
											url: _common2.default.manage_url + 'user/userByChannel.htm',
											data: reserveData,
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
												if (res.rows instanceof Array) {
													_vue2.default.set(current, 'userauthorize', res.rows);
												}
											},
											error: function error(_error10) {
												_common2.default.layerMsg('请求错误！', 2);
												console.log(_error10);
											}
										});
									},
									alertPage: function alertPage() {
										window.parent.layui.use('laypage', function () {
											var laypage = window.parent.layui.laypage;

											//执行一个laypage实例
											laypage.render({
												elem: 'yh_detailed_page_1' //注意，这里的 test1 是 ID，不用加 # 号
												, count: 50 //数据总数，从服务端得到
												, theme: 'manages',
												limit: 10,
												limits: [10, 20, 50, 100],
												prev: "上一页",
												next: "下一页",
												first: 1,
												last: 50,
												layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
												jump: function jump(obj, first) {
													console.log(obj.curr); //得到当前页，以便向服务端请求对应页的数据。
													console.log(obj.limit); //得到每页显示的条数
													console.log(first);
												}
											});
										});
									}
								},
								mounted: function mounted() {
									this.reserveList();
									this.alertPage();
								}
							});
							vm.$mount(layero[0].childNodes[1]);
						},
						yes: function yes(number) {
							var channel = [];
							$.each(vm.checkboxList, function (i) {
								channel.push(vm.userauthorize[vm.checkboxList[i]].channel);
							});
							console.log(channel.join());
							var data = {
								token: token,
								userId: that.checkboxData[that.checkboxList[0]].userId,
								channel: channel.join() + ','
							};
							$.ajax({
								url: _common2.default.manage_url + 'user/reserveOperation.htm',
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
									console.log(res.errorMsg);
									if (res.errorMsg === undefined) {
										_common2.default.layerMsg('授权成功', 1);
										that.accountList();
									} else {
										_common2.default.layerMsg(res.errorMsg, 2);
									}
								},
								error: function error(_error11) {
									_common2.default.layerMsg('请求错误！', 2);
									console.log(_error11);
								}
							});
							layer.close(number);
						},
						end: function end() {
							vm.$destroy();
						}
					});
				});
			});
		},
		hidePhone: function hidePhone() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			if (that.checkboxList.length < 1) {
				_common2.default.layerMsg('请勾选您需要操作的用户！', 7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList, function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId);
			});
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px', 'auto'],
					title: ['隐藏手机号', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id: 'layer-role-center',
					shade: .3,
					btn: ["确定", "取消"],
					btnAlign: 'c',
					shadeClose: true, //开启遮罩关闭
					content: '是否隐藏该用户手机号？',
					success: function success(layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
						btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
						btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
					},
					yes: function yes(number) {
						var data = {
							token: token,
							ids: $push.join()
						};
						console.log(data);
						$.ajax({
							url: _common2.default.manage_url + 'user/hideTypeUser.htm',
							type: 'post',
							data: data,
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
								if (res.success) {
									_common2.default.layerMsg('隐藏成功!', 1);
									that.accountList();
									layer.close(number);
								} else {
									_common2.default.layerMsg(res.errorMsg, 2);
								}
							},
							error: function error(_error12) {
								_common2.default.layerMsg('请求错误！', 2);
								console.log(_error12);
							}
						});
					}
				});
			});
		},
		showPhone: function showPhone() {
			var that = this;
			var token = _common2.default.getLocalStorage('USERTOKEN');
			if (that.checkboxList.length < 1) {
				_common2.default.layerMsg('请勾选您需要操作的用户！', 7);
				return false;
			}
			var $push = [];
			$.each(that.checkboxList, function (i) {
				$push.push(that.checkboxData[that.checkboxList[i]].userId);
			});
			window.parent.layui.use('layer', function () {
				var layer = window.parent.layui.layer;
				layer.open({
					type: 1,
					area: ['400px', 'auto'],
					title: ['显示手机号', 'background:#4A8BF5;color:#fff;font-size:24px;height:50px'],
					id: 'layer-role-center',
					shade: .3,
					btn: ["确定", "取消"],
					btnAlign: 'c',
					shadeClose: true, //开启遮罩关闭
					content: '是否显示该用户手机号？',
					success: function success(layero) {
						var btn = layero.find('.layui-layer-btn');
						btn.css({ paddingBottom: '50px', zIndex: '1000', position: 'relative' });
						btn.find('a').css({ padding: '8px 40px', border: '2px solid #1E9FFF' });
						btn.find('.layui-layer-btn1').css({ color: '#1E9FFF' });
					},
					yes: function yes(number, determine) {
						var data = {
							token: token,
							ids: $push.join()
						};
						console.log(data);
						$.ajax({
							url: _common2.default.manage_url + 'user/showTypeUser.htm',
							type: 'post',
							data: data,
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
								if (res.success) {
									_common2.default.layerMsg('显示成功!', 1);
									that.accountList();
									layer.close(number);
								} else {
									_common2.default.layerMsg(res.errorMsg, 2);
								}
							},
							error: function error(_error13) {
								_common2.default.layerMsg('请求错误！', 2);
								console.log(_error13);
							}
						});
					}
				});
			});
		},
		managesPage: function managesPage() {
			var that = this;
			layui.use('laypage', function () {
				var laypage = layui.laypage;
				//执行一个laypage实例
				laypage.render({
					elem: 'yh_manages_lauerpage' //注意，这里的 test1 是 ID，不用加 # 号
					, count: that.total //数据总数，从服务端得到
					, theme: 'manages',
					limit: that.rows,
					limits: [10, 20, 50, 100],
					first: 1,
					curr: that.page,
					last: Math.ceil(that.total / that.rows),
					prev: "上一页",
					next: "下一页",
					layout: ['count', 'prev', 'page', 'next', 'limit', 'skip'],
					jump: function jump(obj, first) {
						_vue2.default.set(that, 'page', obj.curr);
						_vue2.default.set(that, 'rows', obj.limit);
						if (!first) {
							that.accountList();
							_vue2.default.set(that, 'checkboxList', []);
						}
					}
				});
			});
		}
	},
	mounted: function mounted() {
		this.accountList();
		this.RoleList();
	}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/_jquery@3.3.1@jquery/dist/jquery.js")))

/***/ }),

/***/ 2:
/*!*******************************************************************************************************************************************************************************!*\
  !*** multi ./node_modules/_webpack-dev-server@3.1.14@webpack-dev-server/client?http://127.0.0.1:8088 (webpack)/hot/dev-server.js ./public/index/js/manages_system_account.js ***!
  \*******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! E:\web\yh_manages\node_modules\_webpack-dev-server@3.1.14@webpack-dev-server\client\index.js?http://127.0.0.1:8088 */"./node_modules/_webpack-dev-server@3.1.14@webpack-dev-server/client/index.js?http://127.0.0.1:8088");
__webpack_require__(/*! E:\web\yh_manages\node_modules\_webpack@4.29.5@webpack\hot\dev-server.js */"./node_modules/_webpack@4.29.5@webpack/hot/dev-server.js");
module.exports = __webpack_require__(/*! E:\web\yh_manages\public\index\js\manages_system_account.js */"./public/index/js/manages_system_account.js");


/***/ })

/******/ });
//# sourceMappingURL=manages_system_account.js.map