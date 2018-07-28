/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../pulsar-pathfinding/dist/index.js":
/*!*******************************************!*\
  !*** ../pulsar-pathfinding/dist/index.js ***!
  \*******************************************/
/*! exports provided: Grid, Navigator, NavigatorTile, Triangulation, Vector, Line, Triangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pathfinding_Grid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pathfinding/Grid */ "../pulsar-pathfinding/dist/pathfinding/Grid.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return _pathfinding_Grid__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _pathfinding_Navigator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathfinding/Navigator */ "../pulsar-pathfinding/dist/pathfinding/Navigator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navigator", function() { return _pathfinding_Navigator__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _pathfinding_NavigatorTile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pathfinding/NavigatorTile */ "../pulsar-pathfinding/dist/pathfinding/NavigatorTile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigatorTile", function() { return _pathfinding_NavigatorTile__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _triangulation_Triangulation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./triangulation/Triangulation */ "../pulsar-pathfinding/dist/triangulation/Triangulation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangulation", function() { return _triangulation_Triangulation__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _triangulation_Vector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./triangulation/Vector */ "../pulsar-pathfinding/dist/triangulation/Vector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _triangulation_Vector__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _triangulation_Line__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./triangulation/Line */ "../pulsar-pathfinding/dist/triangulation/Line.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _triangulation_Line__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _triangulation_Triangle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./triangulation/Triangle */ "../pulsar-pathfinding/dist/triangulation/Triangle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Triangle", function() { return _triangulation_Triangle__WEBPACK_IMPORTED_MODULE_6__["default"]; });









//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/pathfinding/Grid.js":
/*!******************************************************!*\
  !*** ../pulsar-pathfinding/dist/pathfinding/Grid.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Grid; });
/* harmony import */ var _NavigatorTile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavigatorTile */ "../pulsar-pathfinding/dist/pathfinding/NavigatorTile.js");
/* harmony import */ var _triangulation_Vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../triangulation/Vector */ "../pulsar-pathfinding/dist/triangulation/Vector.js");
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/random */ "../pulsar-pathfinding/dist/util/random.js");
/* harmony import */ var _Obstacles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Obstacles */ "../pulsar-pathfinding/dist/pathfinding/Obstacles.js");




const defaultSize = { width: 10, height: 10 };
class Grid {
    constructor(size = defaultSize) {
        this.size = size;
        this.tiles = [];
        this.rows = [];
        this.obstacles = new _Obstacles__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.makeGrid();
    }
    /** Returns a random tile, can be an obstacle or not. */
    randomTile() {
        const x = Object(_util_random__WEBPACK_IMPORTED_MODULE_2__["int"])(0, this.size.width - 1);
        const y = Object(_util_random__WEBPACK_IMPORTED_MODULE_2__["int"])(0, this.size.height - 1);
        return this.findTile(new _triangulation_Vector__WEBPACK_IMPORTED_MODULE_1__["default"]({ x, y }));
    }
    /** Returns a random non-obstacle tile, if it exists. */
    randomFreeTile() {
        return this.obstacles.getRandomOpen();
    }
    /** Returns a tile at the specified coordinates. */
    findTile({ x, y }) {
        const row = this.rows[y];
        return row && row.length > x ? row[x] : null;
    }
    makeGrid() {
        for (let y = 0; y < this.size.height; y++) {
            const row = [];
            for (let x = 0; x < this.size.width; x++) {
                const position = new _triangulation_Vector__WEBPACK_IMPORTED_MODULE_1__["default"]({ x, y });
                const tile = new _NavigatorTile__WEBPACK_IMPORTED_MODULE_0__["default"](position);
                this.tiles.push(tile);
                row.push(tile);
            }
            this.rows.push(row);
        }
    }
}
//# sourceMappingURL=Grid.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/pathfinding/Navigator.js":
/*!***********************************************************!*\
  !*** ../pulsar-pathfinding/dist/pathfinding/Navigator.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigator; });
/* harmony import */ var _triangulation_Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../triangulation/Vector */ "../pulsar-pathfinding/dist/triangulation/Vector.js");
/* harmony import */ var _util_uniqueID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/uniqueID */ "../pulsar-pathfinding/dist/util/uniqueID.js");
/* harmony import */ var _util_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/id */ "../pulsar-pathfinding/dist/util/id.js");



class Navigator {
    constructor(grid, begin, end, onExplore = () => { }, onComplete = Navigator.defaultOnComplete) {
        this.grid = grid;
        this.begin = begin;
        this.end = end;
        this.onExplore = onExplore;
        this.onComplete = onComplete;
        this.id = Object(_util_uniqueID__WEBPACK_IMPORTED_MODULE_1__["default"])();
        this._path = [];
        this.verticalCost = 1;
        this.diagonalCost = 1.4;
        this.neighborsCount = 9;
        this.tiles = [];
        this.open = [];
        this.closed = [];
    }
    get path() {
        return this._path;
    }
    /** Begin the pathfinding process. Does not start if destination is an obstacle. */
    start() {
        if (this.end.isObstacle) {
            return false;
        }
        this.registerOpenTiles(this.grid);
        this.calculateH();
        this.closed.push(this.begin);
        const beginNavData = this.begin.getNavigatorData(this);
        beginNavData.gVal = 0;
        this.calculateG(this.begin);
        return true;
    }
    registerOpenTiles(grid) {
        grid.rows.forEach((row) => {
            row.forEach((tile) => {
                tile.registerNavigatorData(this);
            });
            this.tiles.push(...row);
        });
    }
    calculateH() {
        this.tiles.forEach((tile) => {
            // manhattan distance
            const navData = tile.getNavigatorData(this);
            const colVal = Math.abs(tile.position.x - this.end.position.x);
            const rowVal = Math.abs(tile.position.y - this.end.position.y);
            navData.hVal = colVal + rowVal;
        });
    }
    calculateG(tile) {
        const tileNavData = tile.getNavigatorData(this);
        for (let i = 0; i < this.neighborsCount; i++) {
            const x = tile.position.x + Navigator.getColOffset(i);
            const y = tile.position.y + this.getRowOffset(i);
            const exploring = this.grid.findTile(new _triangulation_Vector__WEBPACK_IMPORTED_MODULE_0__["default"]({ x, y }));
            if (!exploring) {
                continue;
            }
            const exploringNavData = exploring.getNavigatorData(this);
            if (exploring.isObstacle) {
                continue;
            }
            if (Object(_util_id__WEBPACK_IMPORTED_MODULE_2__["contains"])(this.closed, exploring)) {
                continue;
            }
            if (tile.id === exploring.id) {
                this.closed.push(exploring);
            }
            else {
                if (!this.getParent(tile, exploring)) {
                    continue;
                }
                if (!Object(_util_id__WEBPACK_IMPORTED_MODULE_2__["contains"])(this.open, exploring)) {
                    this.open.push(exploring);
                }
                if (tile.isDiagonal(exploring)) {
                    exploringNavData.gVal = tileNavData.gVal + this.diagonalCost;
                }
                else {
                    exploringNavData.gVal = tileNavData.gVal + this.verticalCost;
                }
            }
            exploringNavData.fVal = this.calculateF(exploring);
        }
        const next = this.chooseNext();
        if (next) {
            this.onExplore(next);
            this.calculateG(next);
        }
        else {
            const path = this.getPath();
            this.onComplete(path);
        }
    }
    calculateF(tile) {
        const { gVal, hVal } = tile.getNavigatorData(this);
        return gVal + hVal;
    }
    getRowOffset(iteration) {
        /*
           iteration = 0, 1, or 2: [-1][-1][-1]
           iteration = 3, 4, or 5: [ 0][ 0][ 0]
           iteration = 6, 7, or 8: [+1][+1][+1]
         */
        return this.neighborsCount + -Math.floor((32 - iteration) / 3);
    }
    static getColOffset(iteration) {
        /*
           iteration = 0, 1, or 2: [-1][ 0][+1]
           iteration = 3, 4, or 5: [-1][ 0][+1]
           iteration = 6, 7, or 8: [-1][ 0][+1]
         */
        return (iteration % 3) - 1;
    }
    getParent(tile, checkTile) {
        const tileNavData = tile.getNavigatorData(this);
        const checkNavData = checkTile.getNavigatorData(this);
        if (!checkNavData.parent) {
            checkNavData.parent = tile;
            return tile;
        }
        const moveCost = tile.isDiagonal(checkTile)
            ? this.diagonalCost
            : this.verticalCost;
        if (tileNavData.gVal + moveCost < checkNavData.gVal) {
            checkNavData.parent = tile;
            return tile;
        }
        return null;
    }
    chooseNext() {
        this.open.sort((a, b) => {
            const aNavData = a.getNavigatorData(this);
            const bNavData = b.getNavigatorData(this);
            return aNavData.fVal - bNavData.fVal;
        });
        const next = this.open[0];
        if (!next) {
            return null;
        }
        this.open.shift();
        this.closed.push(next);
        if (next.id === this.end.id) {
            return null;
        }
        return next;
    }
    getPath() {
        this._path = [];
        let current = this.end;
        while (current.id !== this.begin.id) {
            const currentNavData = current.getNavigatorData(this);
            this._path.push(current);
            if (currentNavData.parent) {
                current = currentNavData.parent;
            }
            else {
                return null;
            }
        }
        this._path.reverse();
        return this._path;
    }
    static defaultOnComplete(path) {
        console.log(path);
    }
}
//# sourceMappingURL=Navigator.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/pathfinding/NavigatorData.js":
/*!***************************************************************!*\
  !*** ../pulsar-pathfinding/dist/pathfinding/NavigatorData.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigatorData; });
/* harmony import */ var _util_uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/uniqueID */ "../pulsar-pathfinding/dist/util/uniqueID.js");

class NavigatorData {
    constructor(navigator) {
        this.navigator = navigator;
        this.id = Object(_util_uniqueID__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
}
//# sourceMappingURL=NavigatorData.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/pathfinding/NavigatorTile.js":
/*!***************************************************************!*\
  !*** ../pulsar-pathfinding/dist/pathfinding/NavigatorTile.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavigatorTile; });
/* harmony import */ var _util_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/id */ "../pulsar-pathfinding/dist/util/id.js");
/* harmony import */ var _util_uniqueID__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/uniqueID */ "../pulsar-pathfinding/dist/util/uniqueID.js");
/* harmony import */ var _NavigatorData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigatorData */ "../pulsar-pathfinding/dist/pathfinding/NavigatorData.js");



class NavigatorTile {
    constructor(position) {
        this.position = position;
        this.id = Object(_util_uniqueID__WEBPACK_IMPORTED_MODULE_1__["default"])();
        this.isObstacle = false;
        this.navigators = [];
    }
    registerNavigatorData(navigator) {
        const navigationData = new _NavigatorData__WEBPACK_IMPORTED_MODULE_2__["default"](navigator);
        if (Object(_util_id__WEBPACK_IMPORTED_MODULE_0__["contains"])(this.navigators, navigationData)) {
            return false;
        }
        this.navigators.push(navigationData);
        return true;
    }
    getNavigatorData(navigator) {
        const navData = this.navigators.find((navigationData) => {
            return navigationData.navigator.id === navigator.id;
        });
        return navData ? navData : null;
    }
    isDiagonal({ position }) {
        return this.position.x !== position.x && this.position.y !== position.y;
    }
}
//# sourceMappingURL=NavigatorTile.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/pathfinding/Obstacles.js":
/*!***********************************************************!*\
  !*** ../pulsar-pathfinding/dist/pathfinding/Obstacles.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Obstacles; });
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/random */ "../pulsar-pathfinding/dist/util/random.js");
/* harmony import */ var _util_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/id */ "../pulsar-pathfinding/dist/util/id.js");


class Obstacles {
    constructor(grid) {
        this.grid = grid;
        this.openList = [];
        this.closedList = [];
        this.openList = grid.tiles;
    }
    get list() {
        return this.closedList;
    }
    add(tile) {
        return this.manipulate(true, tile);
    }
    remove(tile) {
        return this.manipulate(false, tile);
    }
    addRandom(count = 1) {
        return this.manipulateMultipleRandom(true, count);
    }
    removeRandom(count = 1) {
        return this.manipulateMultipleRandom(false, count);
    }
    getRandomOpen() {
        return this.getRandom(true);
    }
    getRandom(open) {
        const list = open ? this.openList : this.closedList;
        const random = Object(_util_random__WEBPACK_IMPORTED_MODULE_0__["int"])(0, list.length - 1);
        const tile = list[random];
        return tile ? tile : null;
    }
    manipulateMultipleRandom(add, count) {
        const tiles = [];
        if (count > 0) {
            for (let i = 0; i < count; i++) {
                const tile = this.manipulateSingleRandom(add);
                tiles.push(tile);
            }
            return count === 1 ? tiles[0] : tiles;
        }
        return null;
    }
    manipulateSingleRandom(add) {
        const tile = this.getRandom(add);
        if (tile) {
            this.manipulate(add, tile);
            return tile;
        }
        return null;
    }
    manipulate(add, tile) {
        const isInvalid = add ? tile.isObstacle : !tile.isObstacle;
        if (isInvalid) {
            return false;
        }
        let list;
        let otherList;
        if (add) {
            list = this.openList;
            otherList = this.closedList;
        }
        else {
            list = this.closedList;
            otherList = this.openList;
        }
        if (Object(_util_id__WEBPACK_IMPORTED_MODULE_1__["contains"])(list, tile)) {
            tile.isObstacle = add;
            const index = Object(_util_id__WEBPACK_IMPORTED_MODULE_1__["findIndex"])(list, tile);
            list.splice(index, 1);
            otherList.push(tile);
            return true;
        }
        return false;
    }
}
//# sourceMappingURL=Obstacles.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/DisjoinedSet.js":
/*!****************************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/DisjoinedSet.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DisjoinedSet; });
/* harmony import */ var _util_uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/uniqueID */ "../pulsar-pathfinding/dist/util/uniqueID.js");

class DisjoinedSet {
    constructor(point) {
        this.id = Object(_util_uniqueID__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.points = [point];
    }
    equals({ id }) {
        return this.id === id;
    }
    merge({ points }) {
        points.forEach((point) => {
            point.set = this;
            this.points.push(point);
        });
        return this;
    }
}
//# sourceMappingURL=DisjoinedSet.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/Hull.js":
/*!********************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/Hull.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Hull; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "../pulsar-pathfinding/dist/triangulation/Vector.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "../pulsar-pathfinding/dist/triangulation/Line.js");


class Hull {
    constructor({ triangles }) {
        this.lines = [];
        this.triangles = triangles;
    }
    get points() {
        return this._points;
    }
    start() {
        const uniqueLines = _Line__WEBPACK_IMPORTED_MODULE_1__["default"].GetUniqueLines(this.triangles);
        const uniquePoints = _Line__WEBPACK_IMPORTED_MODULE_1__["default"].PointsFromArray(uniqueLines);
        const ccwPoints = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].ArrangePointsCCW(uniquePoints);
        this._points = _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].UniqueFromArray(ccwPoints);
        for (let i = 1; i < this._points.length; i++) {
            const line = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](this._points[i - 1], this._points[i]);
            this.lines.push(line);
        }
        const closingLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](this._points[this._points.length - 1], this._points[0]);
        this.lines.push(closingLine);
    }
}
//# sourceMappingURL=Hull.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/Line.js":
/*!********************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/Line.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony import */ var _util_uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/uniqueID */ "../pulsar-pathfinding/dist/util/uniqueID.js");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Triangle */ "../pulsar-pathfinding/dist/triangulation/Triangle.js");
/* harmony import */ var _DisjoinedSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DisjoinedSet */ "../pulsar-pathfinding/dist/triangulation/DisjoinedSet.js");



class Line {
    constructor(a, b) {
        this.a = a;
        this.b = b;
        this.id = Object(_util_uniqueID__WEBPACK_IMPORTED_MODULE_0__["default"])();
        Line.AllLines.push(this);
    }
    get length() {
        return this.a.sub(this.b).magnitude();
    }
    clone() {
        return new Line(this.a, this.b);
    }
    equals(line) {
        const equalsNormal = this.a.equals(line.a) && this.b.equals(line.b);
        const equalsReverse = this.a.equals(line.b) && this.b.equals(line.a);
        return equalsNormal || equalsReverse;
    }
    makeDisjoinedSets() {
        this.a.set = new _DisjoinedSet__WEBPACK_IMPORTED_MODULE_2__["default"](this.a);
        this.b.set = new _DisjoinedSet__WEBPACK_IMPORTED_MODULE_2__["default"](this.b);
    }
    static GetUniqueLines(triangles) {
        const lines = _Triangle__WEBPACK_IMPORTED_MODULE_1__["default"].LinesFromArray(triangles);
        return lines.filter((line) => Line.IsUnique(line, lines));
    }
    static PointsFromArray(lines) {
        return lines.reduce((accumulator, line) => {
            accumulator.push(...[line.a, line.b]);
            return accumulator;
        }, []);
    }
    static IsUnique(line, lines) {
        return (lines.find((currentLine) => {
            return line.id === currentLine.id ? false : line.equals(currentLine);
        }) === undefined);
    }
    static RemoveDuplicates(lines) {
        let clone = [...lines];
        clone.sort((a, b) => a.length - b.length);
        for (let i = clone.length - 1; i >= 1; i--) {
            const a = clone[i];
            const b = clone[i - 1];
            if (a.equals(b)) {
                clone.splice(i, 1);
            }
        }
        return clone;
    }
}
Line.AllLines = [];
//# sourceMappingURL=Line.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/Matrix.js":
/*!**********************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/Matrix.js ***!
  \**********************************************************/
/*! exports provided: Matrix2, Matrix3, Matrix4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix2", function() { return Matrix2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix3", function() { return Matrix3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix4", function() { return Matrix4; });
class Matrix2 {
    constructor(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    determine() {
        return this.a * this.d - this.b * this.c;
    }
}
class Matrix3 extends Matrix2 {
    constructor(a, b, c, d, e, f, g, h, i) {
        super(a, b, c, d);
        this.e = e;
        this.f = f;
        this.g = g;
        this.h = h;
        this.i = i;
    }
    determine() {
        return (this.a * new Matrix2(this.e, this.f, this.h, this.i).determine() -
            this.b * new Matrix2(this.d, this.f, this.g, this.i).determine() +
            this.c * new Matrix2(this.d, this.e, this.g, this.h).determine());
    }
}
class Matrix4 extends Matrix3 {
    constructor(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
        super(a, b, c, d, e, f, g, h, i);
        this.j = j;
        this.k = k;
        this.l = l;
        this.m = m;
        this.n = n;
        this.o = o;
        this.p = p;
    }
    determine() {
        return (this.a *
            new Matrix3(this.f, this.g, this.h, this.j, this.k, this.l, this.n, this.o, this.p).determine() -
            this.b *
                new Matrix3(this.e, this.g, this.h, this.i, this.k, this.l, this.m, this.o, this.p).determine() +
            this.c *
                new Matrix3(this.e, this.f, this.h, this.i, this.j, this.l, this.m, this.n, this.p).determine() -
            this.d *
                new Matrix3(this.e, this.f, this.g, this.i, this.j, this.k, this.m, this.n, this.o).determine());
    }
}

//# sourceMappingURL=Matrix.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/MinimumSpanningTree.js":
/*!***********************************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/MinimumSpanningTree.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MinimumSpanningTree; });
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Line */ "../pulsar-pathfinding/dist/triangulation/Line.js");

class MinimumSpanningTree {
    constructor({ lines }) {
        this.lines = [];
        this._nonMinSpanLines = [];
        this.uniqueLines = [];
        this.triangulationLines = [];
        this.triangulationLines = lines;
    }
    get nonMinSpanLines() {
        return this._nonMinSpanLines;
    }
    start() {
        this.getLines();
        this.uniqueLines.forEach((line) => line.makeDisjoinedSets());
        this.uniqueLines.forEach((line, i) => {
            if (!line.a.set.equals(line.b.set)) {
                line.b.set = line.a.set.merge(line.b.set);
                this.lines.push(line);
                this._nonMinSpanLines[i] = null;
            }
        });
        this._nonMinSpanLines = this._nonMinSpanLines.filter((line) => line);
    }
    getLines() {
        let lines = _Line__WEBPACK_IMPORTED_MODULE_0__["default"].RemoveDuplicates(this.triangulationLines);
        this.uniqueLines = [...lines];
        this._nonMinSpanLines = [...lines];
    }
}
//# sourceMappingURL=MinimumSpanningTree.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/Triangle.js":
/*!************************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/Triangle.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Triangle; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "../pulsar-pathfinding/dist/triangulation/Vector.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "../pulsar-pathfinding/dist/triangulation/Line.js");
/* harmony import */ var _util_uniqueID__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/uniqueID */ "../pulsar-pathfinding/dist/util/uniqueID.js");
/* harmony import */ var _Matrix__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Matrix */ "../pulsar-pathfinding/dist/triangulation/Matrix.js");




class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.id = Object(_util_uniqueID__WEBPACK_IMPORTED_MODULE_2__["default"])();
        const ab = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](a, b);
        const bc = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](b, c);
        const ca = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](c, a);
        this.lines = { ab, bc, ca };
    }
    get centroid() {
        return _Vector__WEBPACK_IMPORTED_MODULE_0__["default"].FindPolyCentroid(this.points);
    }
    get points() {
        return [this.a, this.b, this.c];
    }
    get linesArray() {
        return [this.lines.ab, this.lines.bc, this.lines.ca];
    }
    equals(triangle) {
        const { ab, bc, ca } = this.lines;
        const sameAB = ab.equals(triangle.lines.ab) ||
            ab.equals(triangle.lines.bc) ||
            ab.equals(triangle.lines.ca);
        const sameBC = bc.equals(triangle.lines.ab) ||
            bc.equals(triangle.lines.bc) ||
            bc.equals(triangle.lines.ca);
        const sameCA = ca.equals(triangle.lines.ab) ||
            ca.equals(triangle.lines.bc) ||
            ca.equals(triangle.lines.ca);
        return sameAB || sameBC || sameCA;
    }
    isPointInCircumcircle(point) {
        const ax = this.a.x;
        const ay = this.a.y;
        const bx = this.b.x;
        const by = this.b.y;
        const cx = this.c.x;
        const cy = this.c.y;
        const a = ax;
        const b = ay;
        const c = ax * ax + ay * ay;
        const d = 1;
        const e = bx;
        const f = by;
        const g = bx * bx + by * by;
        const h = 1;
        const i = cx;
        const j = cy;
        const k = cx * cx + cy * cy;
        const l = 1;
        const m = point.x;
        const n = point.y;
        const o = point.x * point.x + point.y * point.y;
        const p = 1;
        const matrix = new _Matrix__WEBPACK_IMPORTED_MODULE_3__["Matrix4"](a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p);
        return matrix.determine() < 0;
    }
    hasPoint(point) {
        return this.a.equals(point) || this.b.equals(point) || this.c.equals(point);
    }
    hasAnyPoint(points) {
        return (points.filter((point) => {
            return this.hasPoint(point);
        }).length !== 0);
    }
    static LinesFromArray(triangles) {
        return triangles.reduce((accumulator, triangle) => {
            accumulator.push(...triangle.linesArray);
            return accumulator;
        }, []);
    }
}
//# sourceMappingURL=Triangle.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/Triangulation.js":
/*!*****************************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/Triangulation.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Triangulation; });
/* harmony import */ var _Vector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Vector */ "../pulsar-pathfinding/dist/triangulation/Vector.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "../pulsar-pathfinding/dist/triangulation/Line.js");
/* harmony import */ var _Triangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Triangle */ "../pulsar-pathfinding/dist/triangulation/Triangle.js");
/* harmony import */ var _Hull__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hull */ "../pulsar-pathfinding/dist/triangulation/Hull.js");
/* harmony import */ var _MinimumSpanningTree__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MinimumSpanningTree */ "../pulsar-pathfinding/dist/triangulation/MinimumSpanningTree.js");





class Triangulation {
    constructor(points) {
        this.points = points;
        this.lines = [];
        this.triangles = [];
        this.holderTriangle = Triangulation.MakeHolderTriangle();
        this.triangles.push(this.holderTriangle);
        this.hull = new _Hull__WEBPACK_IMPORTED_MODULE_3__["default"](this);
        this.MST = new _MinimumSpanningTree__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    }
    start() {
        this.points.forEach((point) => {
            const badTriangles = [];
            for (let i = this.triangles.length - 1; i >= 0; i--) {
                const triangle = this.triangles[i];
                if (triangle.isPointInCircumcircle(point)) {
                    this.triangles.splice(i, 1);
                    badTriangles.push(triangle);
                }
            }
            const uniqueLines = _Line__WEBPACK_IMPORTED_MODULE_1__["default"].GetUniqueLines(badTriangles);
            uniqueLines.forEach((line) => {
                const triangle = new _Triangle__WEBPACK_IMPORTED_MODULE_2__["default"](point, line.a, line.b);
                this.triangles.push(triangle);
            });
        });
        this.cleanHolderTriangle();
        this.addFinishedTriangulationLines();
    }
    static MakeHolderTriangle() {
        const side = Number.MAX_SAFE_INTEGER;
        const a = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"]({ x: side / 2, y: -side });
        const b = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"]({ x: -side, y: side });
        const c = new _Vector__WEBPACK_IMPORTED_MODULE_0__["default"]({ x: side, y: side });
        return new _Triangle__WEBPACK_IMPORTED_MODULE_2__["default"](a, b, c);
    }
    cleanHolderTriangle() {
        const { a, b, c } = this.holderTriangle;
        for (let i = this.triangles.length - 1; i >= 0; i--) {
            const triangle = this.triangles[i];
            if (triangle.hasAnyPoint([a, b, c])) {
                this.triangles.splice(i, 1);
            }
        }
    }
    addFinishedTriangulationLines() {
        this.triangles.forEach((triangle) => {
            this.lines.push(...triangle.linesArray);
        });
    }
}
//# sourceMappingURL=Triangulation.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/triangulation/Vector.js":
/*!**********************************************************!*\
  !*** ../pulsar-pathfinding/dist/triangulation/Vector.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vector; });
class Vector {
    constructor({ x, y } = { x: 0, y: 0 }) {
        this.floatPrecision = 2;
        this.x = x;
        this.y = y;
    }
    clone() {
        return new Vector({ x: this.x, y: this.y });
    }
    magnitude() {
        const x = this.x * this.x;
        const y = this.y * this.y;
        const magnitude = Math.sqrt(x + y);
        return Number(magnitude.toFixed(this.floatPrecision));
    }
    dotProduct({ x, y }) {
        return this.x * x + this.y * y;
    }
    add(vector) {
        const x = this.x + vector.x;
        const y = this.y + vector.y;
        return new Vector({ x, y });
    }
    sub(vector) {
        const x = this.x + -vector.x;
        const y = this.y + -vector.y;
        return new Vector({ x, y });
    }
    normalize() {
        const magnitude = this.magnitude();
        const x = this.x / magnitude;
        const y = this.y / magnitude;
        return new Vector({ x, y });
    }
    negative() {
        const x = -this.x;
        const y = -this.y;
        return new Vector({ x, y });
    }
    perpendicular() {
        const right = new Vector({ x: -this.y, y: this.x });
        const left = new Vector({ x: this.y, y: -this.x });
        return { left, right };
    }
    scale(length) {
        const normalized = this.normalize();
        const x = normalized.x * length;
        const y = normalized.y * length;
        return new Vector({ x, y });
    }
    angle(vector) {
        const product = this.dotProduct(vector);
        const cosAngle = product / (this.magnitude() * vector.magnitude());
        return Vector.RadToDeg(Math.acos(cosAngle));
    }
    bisector(vector) {
        const normalized = this.normalize();
        const normalizedVector = vector.normalize();
        const sum = normalized.add(normalizedVector);
        const magnitude = (this.magnitude() + vector.magnitude()) / 2;
        return sum.scale(magnitude);
    }
    equals(vector) {
        return this.x === vector.x && this.y === vector.y;
    }
    static RadToDeg(rad) {
        return rad * (180 / Math.PI);
    }
    static DegToRad(deg) {
        return deg * (Math.PI / 180);
    }
    static FindPolyCentroid(points) {
        let x = 0;
        let y = 0;
        points.forEach((point) => {
            x += point.x;
            y += point.y;
        });
        x /= points.length;
        y /= points.length;
        return new Vector({ x, y });
    }
    static ArrangePointsCCW(points) {
        const centroid = Vector.FindPolyCentroid(points);
        let clone = [...points];
        clone.sort((a, b) => {
            const angleA = Math.atan2(a.y - centroid.y, a.x - centroid.x);
            const angleB = Math.atan2(b.y - centroid.y, b.x - centroid.x);
            return angleA - angleB;
        });
        return clone;
    }
    static UniqueFromArray(points) {
        return points.filter((pointFilter) => {
            return (points.findIndex((pointIndex) => pointFilter.equals(pointIndex)) !== -1);
        });
    }
}
//# sourceMappingURL=Vector.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/util/id.js":
/*!*********************************************!*\
  !*** ../pulsar-pathfinding/dist/util/id.js ***!
  \*********************************************/
/*! exports provided: contains, findIndex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIndex", function() { return findIndex; });
const contains = (array, element) => {
    return findIndex(array, element) !== -1;
};
const findIndex = (array, find) => {
    return array.findIndex((element) => element.id === find.id);
};

//# sourceMappingURL=id.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/util/random.js":
/*!*************************************************!*\
  !*** ../pulsar-pathfinding/dist/util/random.js ***!
  \*************************************************/
/*! exports provided: int, float, color */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float", function() { return float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
const int = (min, max) => {
    return Math.round(float(min, max));
};
const float = (min, max) => {
    return Math.random() * (max - min) + min;
};
const color = () => {
    const r = int(0, 255);
    const g = int(0, 255);
    const b = int(0, 255);
    return `rgb(${r},${g},${b})`;
};

//# sourceMappingURL=random.js.map

/***/ }),

/***/ "../pulsar-pathfinding/dist/util/uniqueID.js":
/*!***************************************************!*\
  !*** ../pulsar-pathfinding/dist/util/uniqueID.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let id = 0;
const uniqueId = () => id++;
/* harmony default export */ __webpack_exports__["default"] = (uniqueId);
//# sourceMappingURL=uniqueID.js.map

/***/ }),

/***/ "./src/classes/Canvas.ts":
/*!*******************************!*\
  !*** ./src/classes/Canvas.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Canvas; });
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "./src/classes/Tile.ts");
/* harmony import */ var _Draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Draw */ "./src/classes/Draw.ts");


class Canvas {
    constructor(selector, size) {
        this.size = size;
        this.rows = [];
        this._canvas = document.querySelector(selector);
        this.context = this._canvas.getContext('2d');
        this.setSize(size);
        this.draw = new _Draw__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
    get canvas() {
        return this._canvas;
    }
    drawGrid(gridSize, tileSize) {
        this.boundingBox = this.getBoundingBox(gridSize, tileSize);
        for (let y = 0; y < gridSize.height; y++) {
            const row = [];
            for (let x = 0; x < gridSize.width; x++) {
                const coords = { x, y };
                const position = this.getTilePosition(coords, tileSize);
                const tile = new _Tile__WEBPACK_IMPORTED_MODULE_0__["default"](tileSize, position, coords, this.context);
                row.push(tile);
            }
            this.rows.push(row);
        }
    }
    getTile({ x, y }) {
        const row = this.rows[y];
        if (!row) {
            return null;
        }
        else if (row.length < x) {
            return null;
        }
        return row[x];
    }
    setSize({ width, height }) {
        this._canvas.width = width;
        this._canvas.height = height;
    }
    getTilePosition(coords, size) {
        const offset = {
            x: coords.x * size.width,
            y: coords.y * size.height,
        };
        return {
            x: this.boundingBox.left + offset.x,
            y: this.boundingBox.top + offset.y,
        };
    }
    getBoundingBox(gridSize, tileSize) {
        const center = {
            x: Math.round(this.canvas.width / 2),
            y: Math.round(this.canvas.height / 2),
        };
        const { width, height } = Canvas.getGridSizeInPixels(gridSize, tileSize);
        const halfHeight = Math.round(height / 2);
        const halfWidth = Math.round(width / 2);
        return {
            top: center.y - halfHeight,
            bottom: center.y + halfHeight,
            left: center.x - halfWidth,
            right: center.x + halfWidth,
        };
    }
    static getGridSizeInPixels(gridSize, tileSize) {
        return {
            width: gridSize.width * tileSize.width,
            height: gridSize.height * tileSize.height,
        };
    }
}


/***/ }),

/***/ "./src/classes/Draw.ts":
/*!*****************************!*\
  !*** ./src/classes/Draw.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draw; });
/* harmony import */ var _const_draw__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/draw */ "./src/const/draw.ts");

class Draw {
    constructor({ context }) {
        this.context = context;
    }
    point({ x, y }, strokeColor = _const_draw__WEBPACK_IMPORTED_MODULE_0__["c_pointStroke"], fillColor = _const_draw__WEBPACK_IMPORTED_MODULE_0__["c_pointFill"], size = _const_draw__WEBPACK_IMPORTED_MODULE_0__["s_point"]) {
        this.context.beginPath();
        this.context.arc(x, y, size, 0, 2 * Math.PI);
        this.context.strokeStyle = strokeColor;
        this.context.fillStyle = fillColor;
        this.context.lineWidth = 1;
        this.context.fill();
        this.context.stroke();
        this.context.closePath();
    }
    points(points, strokeColor, fillColor, size) {
        points.forEach((point) => {
            this.point(point, strokeColor, fillColor, size);
        });
    }
    line({ a, b }, color = _const_draw__WEBPACK_IMPORTED_MODULE_0__["c_line"], size = _const_draw__WEBPACK_IMPORTED_MODULE_0__["s_line"]) {
        this.context.beginPath();
        this.context.strokeStyle = color;
        this.context.lineWidth = size;
        this.context.moveTo(a.x, a.y);
        this.context.lineTo(b.x, b.y);
        this.context.stroke();
    }
    lines(lines, color, size) {
        lines.forEach((line) => this.line(line, color, size));
    }
    triangle({ lines, a, b, c }, strokeColor = _const_draw__WEBPACK_IMPORTED_MODULE_0__["c_triangleLine"], fillColor = _const_draw__WEBPACK_IMPORTED_MODULE_0__["c_triangleFill"], size = _const_draw__WEBPACK_IMPORTED_MODULE_0__["s_triangle"]) {
        this.context.beginPath();
        this.context.moveTo(a.x, a.y);
        this.context.lineTo(b.x, b.y);
        this.context.lineTo(c.x, c.y);
        this.context.closePath();
        this.context.fillStyle = fillColor;
        this.context.fill();
        this.lines([lines.ab, lines.bc, lines.ca], strokeColor, size);
    }
    triangles(triangles, strokeColor, fillColor, size) {
        triangles.forEach((triangle) => {
            this.triangle(triangle, strokeColor, fillColor, size);
        });
    }
    square({ a, b, c, d }) {
        this.context.beginPath();
        this.context.moveTo(a.x, a.y);
        this.context.lineTo(b.x, b.y);
        this.context.lineTo(c.x, c.y);
        this.context.lineTo(d.x, d.y);
        this.context.closePath();
        this.context.fill();
    }
}


/***/ }),

/***/ "./src/classes/Tile.ts":
/*!*****************************!*\
  !*** ./src/classes/Tile.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tile; });
/* harmony import */ var _util_uniqueID__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/uniqueID */ "./src/util/uniqueID.ts");
/* harmony import */ var pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pulsar-pathfinding */ "../pulsar-pathfinding/dist/index.js");
/* harmony import */ var _const_draw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const/draw */ "./src/const/draw.ts");



class Tile {
    constructor(size, position, _gridCoords, context) {
        this.size = size;
        this.position = position;
        this._gridCoords = _gridCoords;
        this.context = context;
        this.id = Object(_util_uniqueID__WEBPACK_IMPORTED_MODULE_0__["default"])();
        this.navigatorTile = null;
        this._isObstacle = false;
        this._isStart = false;
        this.navigatorTile = new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_1__["NavigatorTile"](new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_1__["Vector"](_gridCoords));
        this.stroke(_const_draw__WEBPACK_IMPORTED_MODULE_2__["outline"]);
    }
    get isObstacle() {
        return this._isObstacle;
    }
    get isStart() {
        return this._isStart;
    }
    get canBeStart() {
        return !this.isObstacle && !this.isStart;
    }
    get gridCoords() {
        return this._gridCoords;
    }
    becomeStart() {
        if (!this.canBeStart) {
            return false;
        }
        this.fill(_const_draw__WEBPACK_IMPORTED_MODULE_2__["start"]);
        this.stroke(_const_draw__WEBPACK_IMPORTED_MODULE_2__["outline"]);
        return true;
    }
    reset() {
        this._isStart = false;
        this.fill(_const_draw__WEBPACK_IMPORTED_MODULE_2__["empty"]);
        this.stroke(_const_draw__WEBPACK_IMPORTED_MODULE_2__["outline"]);
    }
    becomeObstacle() {
        this._isObstacle = true;
        this.fill(_const_draw__WEBPACK_IMPORTED_MODULE_2__["obstacle"]);
    }
    containsPoint({ x, y }) {
        return (x >= this.position.x &&
            x <= this.position.x + this.size.width &&
            y >= this.position.y &&
            y <= this.position.y + this.size.height);
    }
    fill(color) {
        this.draw(() => {
            this.context.fillStyle = color;
            this.context.fill();
        });
    }
    stroke(color = 'black') {
        this.draw(() => {
            this.context.strokeStyle = color;
            this.context.lineWidth = 1;
            this.context.stroke();
        });
    }
    draw(drawAction) {
        const { x, y } = this.position;
        const { width, height } = this.size;
        this.context.beginPath();
        //this.context.arc(x, y , width, 0, 2*Math.PI);
        this.context.rect(x, y, width, height);
        drawAction();
        this.context.closePath();
    }
}


/***/ }),

/***/ "./src/const/draw.ts":
/*!***************************!*\
  !*** ./src/const/draw.ts ***!
  \***************************/
/*! exports provided: start, obstacle, outline, empty, c_pointStroke, c_pointFill, s_point, c_line, s_line, c_triangleLine, c_triangleFill, s_triangle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "obstacle", function() { return obstacle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "outline", function() { return outline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_pointStroke", function() { return c_pointStroke; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_pointFill", function() { return c_pointFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_point", function() { return s_point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_line", function() { return c_line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_line", function() { return s_line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_triangleLine", function() { return c_triangleLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c_triangleFill", function() { return c_triangleFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_triangle", function() { return s_triangle; });
const start = 'red';
const obstacle = 'black';
const outline = 'black';
const empty = 'white';
//point
const c_pointStroke = 'black';
const c_pointFill = 'rgb(102, 219, 249)';
const s_point = 3;
//line
const c_line = 'red';
const s_line = 1;
//triangle
const c_triangleLine = 'rgb(102, 219, 249)';
const c_triangleFill = 'rgb(41, 44, 52)';
const s_triangle = 1;


/***/ }),

/***/ "./src/debug/pathfinding/index.ts":
/*!****************************************!*\
  !*** ./src/debug/pathfinding/index.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Debug_pathfinding; });
/* harmony import */ var pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pulsar-pathfinding */ "../pulsar-pathfinding/dist/index.js");

class Debug_pathfinding {
    constructor(canvas) {
        this.canvas = canvas;
        this.gridSize = { width: 30, height: 70 };
        this.tileSide = 10;
        this.obstacleCount = 150;
        this.navigatorsCount = 1;
        this.tileSize = { width: this.tileSide, height: this.tileSide };
        this.grid = new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__["Grid"](this.gridSize);
        this.canvas.drawGrid(this.gridSize, this.tileSize);
        this.makeNavigators(this.navigatorsCount);
    }
    onNavExplore({ position }) {
        const tile = this.canvas.getTile(position);
        tile.fill('blue');
        tile.stroke();
    }
    ;
    onNavComplete(path) {
        if (path === null) {
            console.error('no valid path');
            return;
        }
        path.forEach(({ position }) => {
            const tile = this.canvas.getTile(position);
            tile.fill('green');
            tile.stroke();
        });
    }
    ;
    makeNavigators(count) {
        for (let i = 0; i < count; i++) {
            //const navBegin: NavigatorTile = grid.randomFreeTile();
            //const navEnd: NavigatorTile = grid.randomFreeTile();
            const navBegin = this.grid.findTile(new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: 0, y: 0 }));
            const navEnd = this.grid.findTile(new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x: this.gridSize.width - 1, y: this.gridSize.height - 1 }));
            const navigator = new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__["Navigator"](this.grid, navBegin, navEnd, undefined, this.onNavComplete.bind(this));
            navigator.start();
        }
    }
    ;
}


/***/ }),

/***/ "./src/debug/triangulation/index.ts":
/*!******************************************!*\
  !*** ./src/debug/triangulation/index.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Debug_triangulation; });
/* harmony import */ var pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pulsar-pathfinding */ "../pulsar-pathfinding/dist/index.js");

class Debug_triangulation {
    constructor(points, canvas) {
        this.points = points;
        this.canvas = canvas;
        this.triangulation = new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__["Triangulation"](this.points);
        this.start();
    }
    start() {
        console.time('triangulation');
        this.triangulation.start();
        this.triangulation.MST.start();
        this.triangulation.hull.start();
        this.canvas.draw.triangles(this.triangulation.triangles);
        this.canvas.draw.points(this.points);
        //this.canvas.draw.lines(this.triangulation.lines);
        //this.canvas.draw.lines(this.triangulation.MST.lines);
        this.canvas.draw.lines(this.triangulation.hull.lines);
        //this.canvas.draw.point(Vector.FindPolyCentroid(this.points), 'red', 'red', 10);
        console.timeEnd('triangulation');
    }
    ;
}


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Canvas */ "./src/classes/Canvas.ts");
/* harmony import */ var _util_random__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/random */ "./src/util/random.ts");
/* harmony import */ var _debug_triangulation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug/triangulation */ "./src/debug/triangulation/index.ts");
/* harmony import */ var _debug_pathfinding__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debug/pathfinding */ "./src/debug/pathfinding/index.ts");




const canvasSize = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const canvas = new _classes_Canvas__WEBPACK_IMPORTED_MODULE_0__["default"]('#canvas', canvasSize);
const padding = 100;
const box = {
    top: padding,
    bottom: canvasSize.height - padding,
    left: padding,
    right: canvasSize.width - padding,
};
const points = Object(_util_random__WEBPACK_IMPORTED_MODULE_1__["points"])(100, box);
new _debug_triangulation__WEBPACK_IMPORTED_MODULE_2__["default"](points, canvas);
new _debug_pathfinding__WEBPACK_IMPORTED_MODULE_3__["default"](canvas);


/***/ }),

/***/ "./src/util/random.ts":
/*!****************************!*\
  !*** ./src/util/random.ts ***!
  \****************************/
/*! exports provided: int, float, color, point, points */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "int", function() { return int; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "float", function() { return float; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "color", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "points", function() { return points; });
/* harmony import */ var pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pulsar-pathfinding */ "../pulsar-pathfinding/dist/index.js");

const int = (min, max) => {
    return Math.round(float(min, max));
};
const float = (min, max) => {
    return Math.random() * (max - min) + min;
};
const color = () => {
    const r = int(0, 255);
    const g = 0; //int(0, 255);
    const b = 0; //int(0, 255);
    return `rgb(${r},${g},${b})`;
};
const point = ({ top, bottom, left, right }) => {
    const x = int(left, right);
    const y = int(top, bottom);
    return new pulsar_pathfinding__WEBPACK_IMPORTED_MODULE_0__["Vector"]({ x, y });
};
const points = (count, box) => {
    const points = [];
    for (let i = 0; i < count; i++) {
        points.push(point(box));
    }
    return points;
};



/***/ }),

/***/ "./src/util/uniqueID.ts":
/*!******************************!*\
  !*** ./src/util/uniqueID.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let id = 0;
const uniqueId = () => id++;
/* harmony default export */ __webpack_exports__["default"] = (uniqueId);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL3B1bHNhci1wYXRoZmluZGluZy9kaXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uLi9wdWxzYXItcGF0aGZpbmRpbmcvZGlzdC9wYXRoZmluZGluZy9HcmlkLmpzIiwid2VicGFjazovLy8uLi9wdWxzYXItcGF0aGZpbmRpbmcvZGlzdC9wYXRoZmluZGluZy9OYXZpZ2F0b3IuanMiLCJ3ZWJwYWNrOi8vLy4uL3B1bHNhci1wYXRoZmluZGluZy9kaXN0L3BhdGhmaW5kaW5nL05hdmlnYXRvckRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4uL3B1bHNhci1wYXRoZmluZGluZy9kaXN0L3BhdGhmaW5kaW5nL05hdmlnYXRvclRpbGUuanMiLCJ3ZWJwYWNrOi8vLy4uL3B1bHNhci1wYXRoZmluZGluZy9kaXN0L3BhdGhmaW5kaW5nL09ic3RhY2xlcy5qcyIsIndlYnBhY2s6Ly8vLi4vcHVsc2FyLXBhdGhmaW5kaW5nL2Rpc3QvdHJpYW5ndWxhdGlvbi9EaXNqb2luZWRTZXQuanMiLCJ3ZWJwYWNrOi8vLy4uL3B1bHNhci1wYXRoZmluZGluZy9kaXN0L3RyaWFuZ3VsYXRpb24vSHVsbC5qcyIsIndlYnBhY2s6Ly8vLi4vcHVsc2FyLXBhdGhmaW5kaW5nL2Rpc3QvdHJpYW5ndWxhdGlvbi9MaW5lLmpzIiwid2VicGFjazovLy8uLi9wdWxzYXItcGF0aGZpbmRpbmcvZGlzdC90cmlhbmd1bGF0aW9uL01hdHJpeC5qcyIsIndlYnBhY2s6Ly8vLi4vcHVsc2FyLXBhdGhmaW5kaW5nL2Rpc3QvdHJpYW5ndWxhdGlvbi9NaW5pbXVtU3Bhbm5pbmdUcmVlLmpzIiwid2VicGFjazovLy8uLi9wdWxzYXItcGF0aGZpbmRpbmcvZGlzdC90cmlhbmd1bGF0aW9uL1RyaWFuZ2xlLmpzIiwid2VicGFjazovLy8uLi9wdWxzYXItcGF0aGZpbmRpbmcvZGlzdC90cmlhbmd1bGF0aW9uL1RyaWFuZ3VsYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4uL3B1bHNhci1wYXRoZmluZGluZy9kaXN0L3RyaWFuZ3VsYXRpb24vVmVjdG9yLmpzIiwid2VicGFjazovLy8uLi9wdWxzYXItcGF0aGZpbmRpbmcvZGlzdC91dGlsL2lkLmpzIiwid2VicGFjazovLy8uLi9wdWxzYXItcGF0aGZpbmRpbmcvZGlzdC91dGlsL3JhbmRvbS5qcyIsIndlYnBhY2s6Ly8vLi4vcHVsc2FyLXBhdGhmaW5kaW5nL2Rpc3QvdXRpbC91bmlxdWVJRC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9DYW52YXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvRHJhdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9UaWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb25zdC9kcmF3LnRzIiwid2VicGFjazovLy8uL3NyYy9kZWJ1Zy9wYXRoZmluZGluZy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGVidWcvdHJpYW5ndWxhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvcmFuZG9tLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsL3VuaXF1ZUlELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ1E7QUFDUixpQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNjO0FBQ2Q7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0dBQXlDLE9BQU87QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxPQUFPO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBLDJCQUEyQixxQkFBcUI7QUFDaEQsb0dBQTZDLE9BQU87QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUNBO0FBQ21CO0FBQ25CO0FBQ0EscURBQXFELEVBQUU7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIseUJBQXlCO0FBQ2hEO0FBQ0E7QUFDQSxvSEFBNkQsT0FBTztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsYUFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7O0FDMUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUG1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLHlDOzs7Ozs7Ozs7Ozs7Ozs7O0FDNUJjO0FBQ2dCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLFdBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQzs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksS0FBSztBQUNqQjtBQUNBO0FBQ0EsV0FBVyxTQUFTO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSx3Qzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHlCQUF5QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsUUFBUTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDOzs7Ozs7Ozs7Ozs7Ozs7QUN0REE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDUTtBQUNSLGtDOzs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFDQTtBQUNBLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQUNBO0FBQ0E7QUFDa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGFBQWE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QVEsRUFBQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC50c1wiKTtcbiIsImltcG9ydCBHcmlkIGZyb20gJy4vcGF0aGZpbmRpbmcvR3JpZCc7XG5pbXBvcnQgTmF2aWdhdG9yIGZyb20gJy4vcGF0aGZpbmRpbmcvTmF2aWdhdG9yJztcbmltcG9ydCBOYXZpZ2F0b3JUaWxlIGZyb20gJy4vcGF0aGZpbmRpbmcvTmF2aWdhdG9yVGlsZSc7XG5pbXBvcnQgVHJpYW5ndWxhdGlvbiBmcm9tICcuL3RyaWFuZ3VsYXRpb24vVHJpYW5ndWxhdGlvbic7XG5pbXBvcnQgVmVjdG9yIGZyb20gJy4vdHJpYW5ndWxhdGlvbi9WZWN0b3InO1xuaW1wb3J0IExpbmUgZnJvbSAnLi90cmlhbmd1bGF0aW9uL0xpbmUnO1xuaW1wb3J0IFRyaWFuZ2xlIGZyb20gJy4vdHJpYW5ndWxhdGlvbi9UcmlhbmdsZSc7XG5leHBvcnQgeyBHcmlkLCBOYXZpZ2F0b3IsIE5hdmlnYXRvclRpbGUsIFRyaWFuZ3VsYXRpb24sIFZlY3RvciwgTGluZSwgVHJpYW5nbGUsIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgTmF2aWdhdG9yVGlsZSBmcm9tICcuL05hdmlnYXRvclRpbGUnO1xuaW1wb3J0IFZlY3RvciBmcm9tICcuLi90cmlhbmd1bGF0aW9uL1ZlY3Rvcic7XG5pbXBvcnQgeyBpbnQgfSBmcm9tICcuLi91dGlsL3JhbmRvbSc7XG5pbXBvcnQgT2JzdGFjbGVzIGZyb20gJy4vT2JzdGFjbGVzJztcbmNvbnN0IGRlZmF1bHRTaXplID0geyB3aWR0aDogMTAsIGhlaWdodDogMTAgfTtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyaWQge1xuICAgIGNvbnN0cnVjdG9yKHNpemUgPSBkZWZhdWx0U2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuICAgICAgICB0aGlzLnRpbGVzID0gW107XG4gICAgICAgIHRoaXMucm93cyA9IFtdO1xuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IG5ldyBPYnN0YWNsZXModGhpcyk7XG4gICAgICAgIHRoaXMubWFrZUdyaWQoKTtcbiAgICB9XG4gICAgLyoqIFJldHVybnMgYSByYW5kb20gdGlsZSwgY2FuIGJlIGFuIG9ic3RhY2xlIG9yIG5vdC4gKi9cbiAgICByYW5kb21UaWxlKCkge1xuICAgICAgICBjb25zdCB4ID0gaW50KDAsIHRoaXMuc2l6ZS53aWR0aCAtIDEpO1xuICAgICAgICBjb25zdCB5ID0gaW50KDAsIHRoaXMuc2l6ZS5oZWlnaHQgLSAxKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZFRpbGUobmV3IFZlY3Rvcih7IHgsIHkgfSkpO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyBhIHJhbmRvbSBub24tb2JzdGFjbGUgdGlsZSwgaWYgaXQgZXhpc3RzLiAqL1xuICAgIHJhbmRvbUZyZWVUaWxlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vYnN0YWNsZXMuZ2V0UmFuZG9tT3BlbigpO1xuICAgIH1cbiAgICAvKiogUmV0dXJucyBhIHRpbGUgYXQgdGhlIHNwZWNpZmllZCBjb29yZGluYXRlcy4gKi9cbiAgICBmaW5kVGlsZSh7IHgsIHkgfSkge1xuICAgICAgICBjb25zdCByb3cgPSB0aGlzLnJvd3NbeV07XG4gICAgICAgIHJldHVybiByb3cgJiYgcm93Lmxlbmd0aCA+IHggPyByb3dbeF0gOiBudWxsO1xuICAgIH1cbiAgICBtYWtlR3JpZCgpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnNpemUuaGVpZ2h0OyB5KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLnNpemUud2lkdGg7IHgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uID0gbmV3IFZlY3Rvcih7IHgsIHkgfSk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGlsZSA9IG5ldyBOYXZpZ2F0b3JUaWxlKHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgICAgICAgICAgcm93LnB1c2godGlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnJvd3MucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9R3JpZC5qcy5tYXAiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4uL3RyaWFuZ3VsYXRpb24vVmVjdG9yJztcbmltcG9ydCB1bmlxdWVJRCBmcm9tICcuLi91dGlsL3VuaXF1ZUlEJztcbmltcG9ydCB7IGNvbnRhaW5zIH0gZnJvbSAnLi4vdXRpbC9pZCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOYXZpZ2F0b3Ige1xuICAgIGNvbnN0cnVjdG9yKGdyaWQsIGJlZ2luLCBlbmQsIG9uRXhwbG9yZSA9ICgpID0+IHsgfSwgb25Db21wbGV0ZSA9IE5hdmlnYXRvci5kZWZhdWx0T25Db21wbGV0ZSkge1xuICAgICAgICB0aGlzLmdyaWQgPSBncmlkO1xuICAgICAgICB0aGlzLmJlZ2luID0gYmVnaW47XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgICAgICB0aGlzLm9uRXhwbG9yZSA9IG9uRXhwbG9yZTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICAgICAgdGhpcy5pZCA9IHVuaXF1ZUlEKCk7XG4gICAgICAgIHRoaXMuX3BhdGggPSBbXTtcbiAgICAgICAgdGhpcy52ZXJ0aWNhbENvc3QgPSAxO1xuICAgICAgICB0aGlzLmRpYWdvbmFsQ29zdCA9IDEuNDtcbiAgICAgICAgdGhpcy5uZWlnaGJvcnNDb3VudCA9IDk7XG4gICAgICAgIHRoaXMudGlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5vcGVuID0gW107XG4gICAgICAgIHRoaXMuY2xvc2VkID0gW107XG4gICAgfVxuICAgIGdldCBwYXRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgLyoqIEJlZ2luIHRoZSBwYXRoZmluZGluZyBwcm9jZXNzLiBEb2VzIG5vdCBzdGFydCBpZiBkZXN0aW5hdGlvbiBpcyBhbiBvYnN0YWNsZS4gKi9cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZW5kLmlzT2JzdGFjbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlZ2lzdGVyT3BlblRpbGVzKHRoaXMuZ3JpZCk7XG4gICAgICAgIHRoaXMuY2FsY3VsYXRlSCgpO1xuICAgICAgICB0aGlzLmNsb3NlZC5wdXNoKHRoaXMuYmVnaW4pO1xuICAgICAgICBjb25zdCBiZWdpbk5hdkRhdGEgPSB0aGlzLmJlZ2luLmdldE5hdmlnYXRvckRhdGEodGhpcyk7XG4gICAgICAgIGJlZ2luTmF2RGF0YS5nVmFsID0gMDtcbiAgICAgICAgdGhpcy5jYWxjdWxhdGVHKHRoaXMuYmVnaW4pO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmVnaXN0ZXJPcGVuVGlsZXMoZ3JpZCkge1xuICAgICAgICBncmlkLnJvd3MuZm9yRWFjaCgocm93KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRpbGUucmVnaXN0ZXJOYXZpZ2F0b3JEYXRhKHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnRpbGVzLnB1c2goLi4ucm93KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZUgoKSB7XG4gICAgICAgIHRoaXMudGlsZXMuZm9yRWFjaCgodGlsZSkgPT4ge1xuICAgICAgICAgICAgLy8gbWFuaGF0dGFuIGRpc3RhbmNlXG4gICAgICAgICAgICBjb25zdCBuYXZEYXRhID0gdGlsZS5nZXROYXZpZ2F0b3JEYXRhKHRoaXMpO1xuICAgICAgICAgICAgY29uc3QgY29sVmFsID0gTWF0aC5hYnModGlsZS5wb3NpdGlvbi54IC0gdGhpcy5lbmQucG9zaXRpb24ueCk7XG4gICAgICAgICAgICBjb25zdCByb3dWYWwgPSBNYXRoLmFicyh0aWxlLnBvc2l0aW9uLnkgLSB0aGlzLmVuZC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIG5hdkRhdGEuaFZhbCA9IGNvbFZhbCArIHJvd1ZhbDtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNhbGN1bGF0ZUcodGlsZSkge1xuICAgICAgICBjb25zdCB0aWxlTmF2RGF0YSA9IHRpbGUuZ2V0TmF2aWdhdG9yRGF0YSh0aGlzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm5laWdoYm9yc0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aWxlLnBvc2l0aW9uLnggKyBOYXZpZ2F0b3IuZ2V0Q29sT2Zmc2V0KGkpO1xuICAgICAgICAgICAgY29uc3QgeSA9IHRpbGUucG9zaXRpb24ueSArIHRoaXMuZ2V0Um93T2Zmc2V0KGkpO1xuICAgICAgICAgICAgY29uc3QgZXhwbG9yaW5nID0gdGhpcy5ncmlkLmZpbmRUaWxlKG5ldyBWZWN0b3IoeyB4LCB5IH0pKTtcbiAgICAgICAgICAgIGlmICghZXhwbG9yaW5nKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBleHBsb3JpbmdOYXZEYXRhID0gZXhwbG9yaW5nLmdldE5hdmlnYXRvckRhdGEodGhpcyk7XG4gICAgICAgICAgICBpZiAoZXhwbG9yaW5nLmlzT2JzdGFjbGUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb250YWlucyh0aGlzLmNsb3NlZCwgZXhwbG9yaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRpbGUuaWQgPT09IGV4cGxvcmluZy5pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2VkLnB1c2goZXhwbG9yaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5nZXRQYXJlbnQodGlsZSwgZXhwbG9yaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWlucyh0aGlzLm9wZW4sIGV4cGxvcmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuLnB1c2goZXhwbG9yaW5nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRpbGUuaXNEaWFnb25hbChleHBsb3JpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGxvcmluZ05hdkRhdGEuZ1ZhbCA9IHRpbGVOYXZEYXRhLmdWYWwgKyB0aGlzLmRpYWdvbmFsQ29zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4cGxvcmluZ05hdkRhdGEuZ1ZhbCA9IHRpbGVOYXZEYXRhLmdWYWwgKyB0aGlzLnZlcnRpY2FsQ29zdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBleHBsb3JpbmdOYXZEYXRhLmZWYWwgPSB0aGlzLmNhbGN1bGF0ZUYoZXhwbG9yaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXh0ID0gdGhpcy5jaG9vc2VOZXh0KCk7XG4gICAgICAgIGlmIChuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLm9uRXhwbG9yZShuZXh0KTtcbiAgICAgICAgICAgIHRoaXMuY2FsY3VsYXRlRyhuZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSB0aGlzLmdldFBhdGgoKTtcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZShwYXRoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYWxjdWxhdGVGKHRpbGUpIHtcbiAgICAgICAgY29uc3QgeyBnVmFsLCBoVmFsIH0gPSB0aWxlLmdldE5hdmlnYXRvckRhdGEodGhpcyk7XG4gICAgICAgIHJldHVybiBnVmFsICsgaFZhbDtcbiAgICB9XG4gICAgZ2V0Um93T2Zmc2V0KGl0ZXJhdGlvbikge1xuICAgICAgICAvKlxuICAgICAgICAgICBpdGVyYXRpb24gPSAwLCAxLCBvciAyOiBbLTFdWy0xXVstMV1cbiAgICAgICAgICAgaXRlcmF0aW9uID0gMywgNCwgb3IgNTogWyAwXVsgMF1bIDBdXG4gICAgICAgICAgIGl0ZXJhdGlvbiA9IDYsIDcsIG9yIDg6IFsrMV1bKzFdWysxXVxuICAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHRoaXMubmVpZ2hib3JzQ291bnQgKyAtTWF0aC5mbG9vcigoMzIgLSBpdGVyYXRpb24pIC8gMyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRDb2xPZmZzZXQoaXRlcmF0aW9uKSB7XG4gICAgICAgIC8qXG4gICAgICAgICAgIGl0ZXJhdGlvbiA9IDAsIDEsIG9yIDI6IFstMV1bIDBdWysxXVxuICAgICAgICAgICBpdGVyYXRpb24gPSAzLCA0LCBvciA1OiBbLTFdWyAwXVsrMV1cbiAgICAgICAgICAgaXRlcmF0aW9uID0gNiwgNywgb3IgODogWy0xXVsgMF1bKzFdXG4gICAgICAgICAqL1xuICAgICAgICByZXR1cm4gKGl0ZXJhdGlvbiAlIDMpIC0gMTtcbiAgICB9XG4gICAgZ2V0UGFyZW50KHRpbGUsIGNoZWNrVGlsZSkge1xuICAgICAgICBjb25zdCB0aWxlTmF2RGF0YSA9IHRpbGUuZ2V0TmF2aWdhdG9yRGF0YSh0aGlzKTtcbiAgICAgICAgY29uc3QgY2hlY2tOYXZEYXRhID0gY2hlY2tUaWxlLmdldE5hdmlnYXRvckRhdGEodGhpcyk7XG4gICAgICAgIGlmICghY2hlY2tOYXZEYXRhLnBhcmVudCkge1xuICAgICAgICAgICAgY2hlY2tOYXZEYXRhLnBhcmVudCA9IHRpbGU7XG4gICAgICAgICAgICByZXR1cm4gdGlsZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtb3ZlQ29zdCA9IHRpbGUuaXNEaWFnb25hbChjaGVja1RpbGUpXG4gICAgICAgICAgICA/IHRoaXMuZGlhZ29uYWxDb3N0XG4gICAgICAgICAgICA6IHRoaXMudmVydGljYWxDb3N0O1xuICAgICAgICBpZiAodGlsZU5hdkRhdGEuZ1ZhbCArIG1vdmVDb3N0IDwgY2hlY2tOYXZEYXRhLmdWYWwpIHtcbiAgICAgICAgICAgIGNoZWNrTmF2RGF0YS5wYXJlbnQgPSB0aWxlO1xuICAgICAgICAgICAgcmV0dXJuIHRpbGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNob29zZU5leHQoKSB7XG4gICAgICAgIHRoaXMub3Blbi5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhTmF2RGF0YSA9IGEuZ2V0TmF2aWdhdG9yRGF0YSh0aGlzKTtcbiAgICAgICAgICAgIGNvbnN0IGJOYXZEYXRhID0gYi5nZXROYXZpZ2F0b3JEYXRhKHRoaXMpO1xuICAgICAgICAgICAgcmV0dXJuIGFOYXZEYXRhLmZWYWwgLSBiTmF2RGF0YS5mVmFsO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgbmV4dCA9IHRoaXMub3BlblswXTtcbiAgICAgICAgaWYgKCFuZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4uc2hpZnQoKTtcbiAgICAgICAgdGhpcy5jbG9zZWQucHVzaChuZXh0KTtcbiAgICAgICAgaWYgKG5leHQuaWQgPT09IHRoaXMuZW5kLmlkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dDtcbiAgICB9XG4gICAgZ2V0UGF0aCgpIHtcbiAgICAgICAgdGhpcy5fcGF0aCA9IFtdO1xuICAgICAgICBsZXQgY3VycmVudCA9IHRoaXMuZW5kO1xuICAgICAgICB3aGlsZSAoY3VycmVudC5pZCAhPT0gdGhpcy5iZWdpbi5pZCkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudE5hdkRhdGEgPSBjdXJyZW50LmdldE5hdmlnYXRvckRhdGEodGhpcyk7XG4gICAgICAgICAgICB0aGlzLl9wYXRoLnB1c2goY3VycmVudCk7XG4gICAgICAgICAgICBpZiAoY3VycmVudE5hdkRhdGEucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnROYXZEYXRhLnBhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BhdGgucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fcGF0aDtcbiAgICB9XG4gICAgc3RhdGljIGRlZmF1bHRPbkNvbXBsZXRlKHBhdGgpIHtcbiAgICAgICAgY29uc29sZS5sb2cocGF0aCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmF2aWdhdG9yLmpzLm1hcCIsImltcG9ydCB1bmlxdWVJRCBmcm9tICcuLi91dGlsL3VuaXF1ZUlEJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRvckRhdGEge1xuICAgIGNvbnN0cnVjdG9yKG5hdmlnYXRvcikge1xuICAgICAgICB0aGlzLm5hdmlnYXRvciA9IG5hdmlnYXRvcjtcbiAgICAgICAgdGhpcy5pZCA9IHVuaXF1ZUlEKCk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TmF2aWdhdG9yRGF0YS5qcy5tYXAiLCJpbXBvcnQgeyBjb250YWlucyB9IGZyb20gJy4uL3V0aWwvaWQnO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4uL3V0aWwvdW5pcXVlSUQnO1xuaW1wb3J0IE5hdmlnYXRvckRhdGEgZnJvbSAnLi9OYXZpZ2F0b3JEYXRhJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5hdmlnYXRvclRpbGUge1xuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICAgICAgdGhpcy5pZCA9IHVuaXF1ZUlkKCk7XG4gICAgICAgIHRoaXMuaXNPYnN0YWNsZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5hdmlnYXRvcnMgPSBbXTtcbiAgICB9XG4gICAgcmVnaXN0ZXJOYXZpZ2F0b3JEYXRhKG5hdmlnYXRvcikge1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uRGF0YSA9IG5ldyBOYXZpZ2F0b3JEYXRhKG5hdmlnYXRvcik7XG4gICAgICAgIGlmIChjb250YWlucyh0aGlzLm5hdmlnYXRvcnMsIG5hdmlnYXRpb25EYXRhKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubmF2aWdhdG9ycy5wdXNoKG5hdmlnYXRpb25EYXRhKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGdldE5hdmlnYXRvckRhdGEobmF2aWdhdG9yKSB7XG4gICAgICAgIGNvbnN0IG5hdkRhdGEgPSB0aGlzLm5hdmlnYXRvcnMuZmluZCgobmF2aWdhdGlvbkRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuYXZpZ2F0aW9uRGF0YS5uYXZpZ2F0b3IuaWQgPT09IG5hdmlnYXRvci5pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuYXZEYXRhID8gbmF2RGF0YSA6IG51bGw7XG4gICAgfVxuICAgIGlzRGlhZ29uYWwoeyBwb3NpdGlvbiB9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnggIT09IHBvc2l0aW9uLnggJiYgdGhpcy5wb3NpdGlvbi55ICE9PSBwb3NpdGlvbi55O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU5hdmlnYXRvclRpbGUuanMubWFwIiwiaW1wb3J0IHsgaW50IH0gZnJvbSAnLi4vdXRpbC9yYW5kb20nO1xuaW1wb3J0IHsgY29udGFpbnMsIGZpbmRJbmRleCB9IGZyb20gJy4uL3V0aWwvaWQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2JzdGFjbGVzIHtcbiAgICBjb25zdHJ1Y3RvcihncmlkKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IGdyaWQ7XG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBbXTtcbiAgICAgICAgdGhpcy5jbG9zZWRMaXN0ID0gW107XG4gICAgICAgIHRoaXMub3Blbkxpc3QgPSBncmlkLnRpbGVzO1xuICAgIH1cbiAgICBnZXQgbGlzdCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xvc2VkTGlzdDtcbiAgICB9XG4gICAgYWRkKHRpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuaXB1bGF0ZSh0cnVlLCB0aWxlKTtcbiAgICB9XG4gICAgcmVtb3ZlKHRpbGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuaXB1bGF0ZShmYWxzZSwgdGlsZSk7XG4gICAgfVxuICAgIGFkZFJhbmRvbShjb3VudCA9IDEpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFuaXB1bGF0ZU11bHRpcGxlUmFuZG9tKHRydWUsIGNvdW50KTtcbiAgICB9XG4gICAgcmVtb3ZlUmFuZG9tKGNvdW50ID0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYW5pcHVsYXRlTXVsdGlwbGVSYW5kb20oZmFsc2UsIGNvdW50KTtcbiAgICB9XG4gICAgZ2V0UmFuZG9tT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmFuZG9tKHRydWUpO1xuICAgIH1cbiAgICBnZXRSYW5kb20ob3Blbikge1xuICAgICAgICBjb25zdCBsaXN0ID0gb3BlbiA/IHRoaXMub3Blbkxpc3QgOiB0aGlzLmNsb3NlZExpc3Q7XG4gICAgICAgIGNvbnN0IHJhbmRvbSA9IGludCgwLCBsaXN0Lmxlbmd0aCAtIDEpO1xuICAgICAgICBjb25zdCB0aWxlID0gbGlzdFtyYW5kb21dO1xuICAgICAgICByZXR1cm4gdGlsZSA/IHRpbGUgOiBudWxsO1xuICAgIH1cbiAgICBtYW5pcHVsYXRlTXVsdGlwbGVSYW5kb20oYWRkLCBjb3VudCkge1xuICAgICAgICBjb25zdCB0aWxlcyA9IFtdO1xuICAgICAgICBpZiAoY291bnQgPiAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5tYW5pcHVsYXRlU2luZ2xlUmFuZG9tKGFkZCk7XG4gICAgICAgICAgICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb3VudCA9PT0gMSA/IHRpbGVzWzBdIDogdGlsZXM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIG1hbmlwdWxhdGVTaW5nbGVSYW5kb20oYWRkKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFJhbmRvbShhZGQpO1xuICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgICAgdGhpcy5tYW5pcHVsYXRlKGFkZCwgdGlsZSk7XG4gICAgICAgICAgICByZXR1cm4gdGlsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgbWFuaXB1bGF0ZShhZGQsIHRpbGUpIHtcbiAgICAgICAgY29uc3QgaXNJbnZhbGlkID0gYWRkID8gdGlsZS5pc09ic3RhY2xlIDogIXRpbGUuaXNPYnN0YWNsZTtcbiAgICAgICAgaWYgKGlzSW52YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBsaXN0O1xuICAgICAgICBsZXQgb3RoZXJMaXN0O1xuICAgICAgICBpZiAoYWRkKSB7XG4gICAgICAgICAgICBsaXN0ID0gdGhpcy5vcGVuTGlzdDtcbiAgICAgICAgICAgIG90aGVyTGlzdCA9IHRoaXMuY2xvc2VkTGlzdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxpc3QgPSB0aGlzLmNsb3NlZExpc3Q7XG4gICAgICAgICAgICBvdGhlckxpc3QgPSB0aGlzLm9wZW5MaXN0O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb250YWlucyhsaXN0LCB0aWxlKSkge1xuICAgICAgICAgICAgdGlsZS5pc09ic3RhY2xlID0gYWRkO1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBmaW5kSW5kZXgobGlzdCwgdGlsZSk7XG4gICAgICAgICAgICBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBvdGhlckxpc3QucHVzaCh0aWxlKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1PYnN0YWNsZXMuanMubWFwIiwiaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4uL3V0aWwvdW5pcXVlSUQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzam9pbmVkU2V0IHtcbiAgICBjb25zdHJ1Y3Rvcihwb2ludCkge1xuICAgICAgICB0aGlzLmlkID0gdW5pcXVlSWQoKTtcbiAgICAgICAgdGhpcy5wb2ludHMgPSBbcG9pbnRdO1xuICAgIH1cbiAgICBlcXVhbHMoeyBpZCB9KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlkID09PSBpZDtcbiAgICB9XG4gICAgbWVyZ2UoeyBwb2ludHMgfSkge1xuICAgICAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQpID0+IHtcbiAgICAgICAgICAgIHBvaW50LnNldCA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHBvaW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpc2pvaW5lZFNldC5qcy5tYXAiLCJpbXBvcnQgVmVjdG9yIGZyb20gJy4vVmVjdG9yJztcbmltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdWxsIHtcbiAgICBjb25zdHJ1Y3Rvcih7IHRyaWFuZ2xlcyB9KSB7XG4gICAgICAgIHRoaXMubGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy50cmlhbmdsZXMgPSB0cmlhbmdsZXM7XG4gICAgfVxuICAgIGdldCBwb2ludHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb2ludHM7XG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICBjb25zdCB1bmlxdWVMaW5lcyA9IExpbmUuR2V0VW5pcXVlTGluZXModGhpcy50cmlhbmdsZXMpO1xuICAgICAgICBjb25zdCB1bmlxdWVQb2ludHMgPSBMaW5lLlBvaW50c0Zyb21BcnJheSh1bmlxdWVMaW5lcyk7XG4gICAgICAgIGNvbnN0IGNjd1BvaW50cyA9IFZlY3Rvci5BcnJhbmdlUG9pbnRzQ0NXKHVuaXF1ZVBvaW50cyk7XG4gICAgICAgIHRoaXMuX3BvaW50cyA9IFZlY3Rvci5VbmlxdWVGcm9tQXJyYXkoY2N3UG9pbnRzKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLl9wb2ludHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBuZXcgTGluZSh0aGlzLl9wb2ludHNbaSAtIDFdLCB0aGlzLl9wb2ludHNbaV0pO1xuICAgICAgICAgICAgdGhpcy5saW5lcy5wdXNoKGxpbmUpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNsb3NpbmdMaW5lID0gbmV3IExpbmUodGhpcy5fcG9pbnRzW3RoaXMuX3BvaW50cy5sZW5ndGggLSAxXSwgdGhpcy5fcG9pbnRzWzBdKTtcbiAgICAgICAgdGhpcy5saW5lcy5wdXNoKGNsb3NpbmdMaW5lKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1IdWxsLmpzLm1hcCIsImltcG9ydCB1bmlxdWVJZCBmcm9tICcuLi91dGlsL3VuaXF1ZUlEJztcbmltcG9ydCBUcmlhbmdsZSBmcm9tICcuL1RyaWFuZ2xlJztcbmltcG9ydCBEaXNqb2luZWRTZXQgZnJvbSAnLi9EaXNqb2luZWRTZXQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG4gICAgY29uc3RydWN0b3IoYSwgYikge1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmlkID0gdW5pcXVlSWQoKTtcbiAgICAgICAgTGluZS5BbGxMaW5lcy5wdXNoKHRoaXMpO1xuICAgIH1cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hLnN1Yih0aGlzLmIpLm1hZ25pdHVkZSgpO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBMaW5lKHRoaXMuYSwgdGhpcy5iKTtcbiAgICB9XG4gICAgZXF1YWxzKGxpbmUpIHtcbiAgICAgICAgY29uc3QgZXF1YWxzTm9ybWFsID0gdGhpcy5hLmVxdWFscyhsaW5lLmEpICYmIHRoaXMuYi5lcXVhbHMobGluZS5iKTtcbiAgICAgICAgY29uc3QgZXF1YWxzUmV2ZXJzZSA9IHRoaXMuYS5lcXVhbHMobGluZS5iKSAmJiB0aGlzLmIuZXF1YWxzKGxpbmUuYSk7XG4gICAgICAgIHJldHVybiBlcXVhbHNOb3JtYWwgfHwgZXF1YWxzUmV2ZXJzZTtcbiAgICB9XG4gICAgbWFrZURpc2pvaW5lZFNldHMoKSB7XG4gICAgICAgIHRoaXMuYS5zZXQgPSBuZXcgRGlzam9pbmVkU2V0KHRoaXMuYSk7XG4gICAgICAgIHRoaXMuYi5zZXQgPSBuZXcgRGlzam9pbmVkU2V0KHRoaXMuYik7XG4gICAgfVxuICAgIHN0YXRpYyBHZXRVbmlxdWVMaW5lcyh0cmlhbmdsZXMpIHtcbiAgICAgICAgY29uc3QgbGluZXMgPSBUcmlhbmdsZS5MaW5lc0Zyb21BcnJheSh0cmlhbmdsZXMpO1xuICAgICAgICByZXR1cm4gbGluZXMuZmlsdGVyKChsaW5lKSA9PiBMaW5lLklzVW5pcXVlKGxpbmUsIGxpbmVzKSk7XG4gICAgfVxuICAgIHN0YXRpYyBQb2ludHNGcm9tQXJyYXkobGluZXMpIHtcbiAgICAgICAgcmV0dXJuIGxpbmVzLnJlZHVjZSgoYWNjdW11bGF0b3IsIGxpbmUpID0+IHtcbiAgICAgICAgICAgIGFjY3VtdWxhdG9yLnB1c2goLi4uW2xpbmUuYSwgbGluZS5iXSk7XG4gICAgICAgICAgICByZXR1cm4gYWNjdW11bGF0b3I7XG4gICAgICAgIH0sIFtdKTtcbiAgICB9XG4gICAgc3RhdGljIElzVW5pcXVlKGxpbmUsIGxpbmVzKSB7XG4gICAgICAgIHJldHVybiAobGluZXMuZmluZCgoY3VycmVudExpbmUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lLmlkID09PSBjdXJyZW50TGluZS5pZCA/IGZhbHNlIDogbGluZS5lcXVhbHMoY3VycmVudExpbmUpO1xuICAgICAgICB9KSA9PT0gdW5kZWZpbmVkKTtcbiAgICB9XG4gICAgc3RhdGljIFJlbW92ZUR1cGxpY2F0ZXMobGluZXMpIHtcbiAgICAgICAgbGV0IGNsb25lID0gWy4uLmxpbmVzXTtcbiAgICAgICAgY2xvbmUuc29ydCgoYSwgYikgPT4gYS5sZW5ndGggLSBiLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSBjbG9uZS5sZW5ndGggLSAxOyBpID49IDE7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgYSA9IGNsb25lW2ldO1xuICAgICAgICAgICAgY29uc3QgYiA9IGNsb25lW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChhLmVxdWFscyhiKSkge1xuICAgICAgICAgICAgICAgIGNsb25lLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xvbmU7XG4gICAgfVxufVxuTGluZS5BbGxMaW5lcyA9IFtdO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGluZS5qcy5tYXAiLCJjbGFzcyBNYXRyaXgyIHtcbiAgICBjb25zdHJ1Y3RvcihhLCBiLCBjLCBkKSB7XG4gICAgICAgIHRoaXMuYSA9IGE7XG4gICAgICAgIHRoaXMuYiA9IGI7XG4gICAgICAgIHRoaXMuYyA9IGM7XG4gICAgICAgIHRoaXMuZCA9IGQ7XG4gICAgfVxuICAgIGRldGVybWluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYSAqIHRoaXMuZCAtIHRoaXMuYiAqIHRoaXMuYztcbiAgICB9XG59XG5jbGFzcyBNYXRyaXgzIGV4dGVuZHMgTWF0cml4MiB7XG4gICAgY29uc3RydWN0b3IoYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSkge1xuICAgICAgICBzdXBlcihhLCBiLCBjLCBkKTtcbiAgICAgICAgdGhpcy5lID0gZTtcbiAgICAgICAgdGhpcy5mID0gZjtcbiAgICAgICAgdGhpcy5nID0gZztcbiAgICAgICAgdGhpcy5oID0gaDtcbiAgICAgICAgdGhpcy5pID0gaTtcbiAgICB9XG4gICAgZGV0ZXJtaW5lKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYSAqIG5ldyBNYXRyaXgyKHRoaXMuZSwgdGhpcy5mLCB0aGlzLmgsIHRoaXMuaSkuZGV0ZXJtaW5lKCkgLVxuICAgICAgICAgICAgdGhpcy5iICogbmV3IE1hdHJpeDIodGhpcy5kLCB0aGlzLmYsIHRoaXMuZywgdGhpcy5pKS5kZXRlcm1pbmUoKSArXG4gICAgICAgICAgICB0aGlzLmMgKiBuZXcgTWF0cml4Mih0aGlzLmQsIHRoaXMuZSwgdGhpcy5nLCB0aGlzLmgpLmRldGVybWluZSgpKTtcbiAgICB9XG59XG5jbGFzcyBNYXRyaXg0IGV4dGVuZHMgTWF0cml4MyB7XG4gICAgY29uc3RydWN0b3IoYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiwgbywgcCkge1xuICAgICAgICBzdXBlcihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpKTtcbiAgICAgICAgdGhpcy5qID0gajtcbiAgICAgICAgdGhpcy5rID0gaztcbiAgICAgICAgdGhpcy5sID0gbDtcbiAgICAgICAgdGhpcy5tID0gbTtcbiAgICAgICAgdGhpcy5uID0gbjtcbiAgICAgICAgdGhpcy5vID0gbztcbiAgICAgICAgdGhpcy5wID0gcDtcbiAgICB9XG4gICAgZGV0ZXJtaW5lKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuYSAqXG4gICAgICAgICAgICBuZXcgTWF0cml4Myh0aGlzLmYsIHRoaXMuZywgdGhpcy5oLCB0aGlzLmosIHRoaXMuaywgdGhpcy5sLCB0aGlzLm4sIHRoaXMubywgdGhpcy5wKS5kZXRlcm1pbmUoKSAtXG4gICAgICAgICAgICB0aGlzLmIgKlxuICAgICAgICAgICAgICAgIG5ldyBNYXRyaXgzKHRoaXMuZSwgdGhpcy5nLCB0aGlzLmgsIHRoaXMuaSwgdGhpcy5rLCB0aGlzLmwsIHRoaXMubSwgdGhpcy5vLCB0aGlzLnApLmRldGVybWluZSgpICtcbiAgICAgICAgICAgIHRoaXMuYyAqXG4gICAgICAgICAgICAgICAgbmV3IE1hdHJpeDModGhpcy5lLCB0aGlzLmYsIHRoaXMuaCwgdGhpcy5pLCB0aGlzLmosIHRoaXMubCwgdGhpcy5tLCB0aGlzLm4sIHRoaXMucCkuZGV0ZXJtaW5lKCkgLVxuICAgICAgICAgICAgdGhpcy5kICpcbiAgICAgICAgICAgICAgICBuZXcgTWF0cml4Myh0aGlzLmUsIHRoaXMuZiwgdGhpcy5nLCB0aGlzLmksIHRoaXMuaiwgdGhpcy5rLCB0aGlzLm0sIHRoaXMubiwgdGhpcy5vKS5kZXRlcm1pbmUoKSk7XG4gICAgfVxufVxuZXhwb3J0IHsgTWF0cml4MiwgTWF0cml4MywgTWF0cml4NCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWF0cml4LmpzLm1hcCIsImltcG9ydCBMaW5lIGZyb20gJy4vTGluZSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNaW5pbXVtU3Bhbm5pbmdUcmVlIHtcbiAgICBjb25zdHJ1Y3Rvcih7IGxpbmVzIH0pIHtcbiAgICAgICAgdGhpcy5saW5lcyA9IFtdO1xuICAgICAgICB0aGlzLl9ub25NaW5TcGFuTGluZXMgPSBbXTtcbiAgICAgICAgdGhpcy51bmlxdWVMaW5lcyA9IFtdO1xuICAgICAgICB0aGlzLnRyaWFuZ3VsYXRpb25MaW5lcyA9IFtdO1xuICAgICAgICB0aGlzLnRyaWFuZ3VsYXRpb25MaW5lcyA9IGxpbmVzO1xuICAgIH1cbiAgICBnZXQgbm9uTWluU3BhbkxpbmVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fbm9uTWluU3BhbkxpbmVzO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5nZXRMaW5lcygpO1xuICAgICAgICB0aGlzLnVuaXF1ZUxpbmVzLmZvckVhY2goKGxpbmUpID0+IGxpbmUubWFrZURpc2pvaW5lZFNldHMoKSk7XG4gICAgICAgIHRoaXMudW5pcXVlTGluZXMuZm9yRWFjaCgobGluZSwgaSkgPT4ge1xuICAgICAgICAgICAgaWYgKCFsaW5lLmEuc2V0LmVxdWFscyhsaW5lLmIuc2V0KSkge1xuICAgICAgICAgICAgICAgIGxpbmUuYi5zZXQgPSBsaW5lLmEuc2V0Lm1lcmdlKGxpbmUuYi5zZXQpO1xuICAgICAgICAgICAgICAgIHRoaXMubGluZXMucHVzaChsaW5lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9ub25NaW5TcGFuTGluZXNbaV0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fbm9uTWluU3BhbkxpbmVzID0gdGhpcy5fbm9uTWluU3BhbkxpbmVzLmZpbHRlcigobGluZSkgPT4gbGluZSk7XG4gICAgfVxuICAgIGdldExpbmVzKCkge1xuICAgICAgICBsZXQgbGluZXMgPSBMaW5lLlJlbW92ZUR1cGxpY2F0ZXModGhpcy50cmlhbmd1bGF0aW9uTGluZXMpO1xuICAgICAgICB0aGlzLnVuaXF1ZUxpbmVzID0gWy4uLmxpbmVzXTtcbiAgICAgICAgdGhpcy5fbm9uTWluU3BhbkxpbmVzID0gWy4uLmxpbmVzXTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1NaW5pbXVtU3Bhbm5pbmdUcmVlLmpzLm1hcCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcbmltcG9ydCB1bmlxdWVJZCBmcm9tICcuLi91dGlsL3VuaXF1ZUlEJztcbmltcG9ydCB7IE1hdHJpeDQgfSBmcm9tICcuL01hdHJpeCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUcmlhbmdsZSB7XG4gICAgY29uc3RydWN0b3IoYSwgYiwgYykge1xuICAgICAgICB0aGlzLmEgPSBhO1xuICAgICAgICB0aGlzLmIgPSBiO1xuICAgICAgICB0aGlzLmMgPSBjO1xuICAgICAgICB0aGlzLmlkID0gdW5pcXVlSWQoKTtcbiAgICAgICAgY29uc3QgYWIgPSBuZXcgTGluZShhLCBiKTtcbiAgICAgICAgY29uc3QgYmMgPSBuZXcgTGluZShiLCBjKTtcbiAgICAgICAgY29uc3QgY2EgPSBuZXcgTGluZShjLCBhKTtcbiAgICAgICAgdGhpcy5saW5lcyA9IHsgYWIsIGJjLCBjYSB9O1xuICAgIH1cbiAgICBnZXQgY2VudHJvaWQoKSB7XG4gICAgICAgIHJldHVybiBWZWN0b3IuRmluZFBvbHlDZW50cm9pZCh0aGlzLnBvaW50cyk7XG4gICAgfVxuICAgIGdldCBwb2ludHMoKSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5hLCB0aGlzLmIsIHRoaXMuY107XG4gICAgfVxuICAgIGdldCBsaW5lc0FycmF5KCkge1xuICAgICAgICByZXR1cm4gW3RoaXMubGluZXMuYWIsIHRoaXMubGluZXMuYmMsIHRoaXMubGluZXMuY2FdO1xuICAgIH1cbiAgICBlcXVhbHModHJpYW5nbGUpIHtcbiAgICAgICAgY29uc3QgeyBhYiwgYmMsIGNhIH0gPSB0aGlzLmxpbmVzO1xuICAgICAgICBjb25zdCBzYW1lQUIgPSBhYi5lcXVhbHModHJpYW5nbGUubGluZXMuYWIpIHx8XG4gICAgICAgICAgICBhYi5lcXVhbHModHJpYW5nbGUubGluZXMuYmMpIHx8XG4gICAgICAgICAgICBhYi5lcXVhbHModHJpYW5nbGUubGluZXMuY2EpO1xuICAgICAgICBjb25zdCBzYW1lQkMgPSBiYy5lcXVhbHModHJpYW5nbGUubGluZXMuYWIpIHx8XG4gICAgICAgICAgICBiYy5lcXVhbHModHJpYW5nbGUubGluZXMuYmMpIHx8XG4gICAgICAgICAgICBiYy5lcXVhbHModHJpYW5nbGUubGluZXMuY2EpO1xuICAgICAgICBjb25zdCBzYW1lQ0EgPSBjYS5lcXVhbHModHJpYW5nbGUubGluZXMuYWIpIHx8XG4gICAgICAgICAgICBjYS5lcXVhbHModHJpYW5nbGUubGluZXMuYmMpIHx8XG4gICAgICAgICAgICBjYS5lcXVhbHModHJpYW5nbGUubGluZXMuY2EpO1xuICAgICAgICByZXR1cm4gc2FtZUFCIHx8IHNhbWVCQyB8fCBzYW1lQ0E7XG4gICAgfVxuICAgIGlzUG9pbnRJbkNpcmN1bWNpcmNsZShwb2ludCkge1xuICAgICAgICBjb25zdCBheCA9IHRoaXMuYS54O1xuICAgICAgICBjb25zdCBheSA9IHRoaXMuYS55O1xuICAgICAgICBjb25zdCBieCA9IHRoaXMuYi54O1xuICAgICAgICBjb25zdCBieSA9IHRoaXMuYi55O1xuICAgICAgICBjb25zdCBjeCA9IHRoaXMuYy54O1xuICAgICAgICBjb25zdCBjeSA9IHRoaXMuYy55O1xuICAgICAgICBjb25zdCBhID0gYXg7XG4gICAgICAgIGNvbnN0IGIgPSBheTtcbiAgICAgICAgY29uc3QgYyA9IGF4ICogYXggKyBheSAqIGF5O1xuICAgICAgICBjb25zdCBkID0gMTtcbiAgICAgICAgY29uc3QgZSA9IGJ4O1xuICAgICAgICBjb25zdCBmID0gYnk7XG4gICAgICAgIGNvbnN0IGcgPSBieCAqIGJ4ICsgYnkgKiBieTtcbiAgICAgICAgY29uc3QgaCA9IDE7XG4gICAgICAgIGNvbnN0IGkgPSBjeDtcbiAgICAgICAgY29uc3QgaiA9IGN5O1xuICAgICAgICBjb25zdCBrID0gY3ggKiBjeCArIGN5ICogY3k7XG4gICAgICAgIGNvbnN0IGwgPSAxO1xuICAgICAgICBjb25zdCBtID0gcG9pbnQueDtcbiAgICAgICAgY29uc3QgbiA9IHBvaW50Lnk7XG4gICAgICAgIGNvbnN0IG8gPSBwb2ludC54ICogcG9pbnQueCArIHBvaW50LnkgKiBwb2ludC55O1xuICAgICAgICBjb25zdCBwID0gMTtcbiAgICAgICAgY29uc3QgbWF0cml4ID0gbmV3IE1hdHJpeDQoYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiwgbywgcCk7XG4gICAgICAgIHJldHVybiBtYXRyaXguZGV0ZXJtaW5lKCkgPCAwO1xuICAgIH1cbiAgICBoYXNQb2ludChwb2ludCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hLmVxdWFscyhwb2ludCkgfHwgdGhpcy5iLmVxdWFscyhwb2ludCkgfHwgdGhpcy5jLmVxdWFscyhwb2ludCk7XG4gICAgfVxuICAgIGhhc0FueVBvaW50KHBvaW50cykge1xuICAgICAgICByZXR1cm4gKHBvaW50cy5maWx0ZXIoKHBvaW50KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYXNQb2ludChwb2ludCk7XG4gICAgICAgIH0pLmxlbmd0aCAhPT0gMCk7XG4gICAgfVxuICAgIHN0YXRpYyBMaW5lc0Zyb21BcnJheSh0cmlhbmdsZXMpIHtcbiAgICAgICAgcmV0dXJuIHRyaWFuZ2xlcy5yZWR1Y2UoKGFjY3VtdWxhdG9yLCB0cmlhbmdsZSkgPT4ge1xuICAgICAgICAgICAgYWNjdW11bGF0b3IucHVzaCguLi50cmlhbmdsZS5saW5lc0FycmF5KTtcbiAgICAgICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgICAgfSwgW10pO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRyaWFuZ2xlLmpzLm1hcCIsImltcG9ydCBWZWN0b3IgZnJvbSAnLi9WZWN0b3InO1xuaW1wb3J0IExpbmUgZnJvbSAnLi9MaW5lJztcbmltcG9ydCBUcmlhbmdsZSBmcm9tICcuL1RyaWFuZ2xlJztcbmltcG9ydCBIdWxsIGZyb20gJy4vSHVsbCc7XG5pbXBvcnQgTWluaW11bVNwYW5uaW5nVHJlZSBmcm9tICcuL01pbmltdW1TcGFubmluZ1RyZWUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVHJpYW5ndWxhdGlvbiB7XG4gICAgY29uc3RydWN0b3IocG9pbnRzKSB7XG4gICAgICAgIHRoaXMucG9pbnRzID0gcG9pbnRzO1xuICAgICAgICB0aGlzLmxpbmVzID0gW107XG4gICAgICAgIHRoaXMudHJpYW5nbGVzID0gW107XG4gICAgICAgIHRoaXMuaG9sZGVyVHJpYW5nbGUgPSBUcmlhbmd1bGF0aW9uLk1ha2VIb2xkZXJUcmlhbmdsZSgpO1xuICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKHRoaXMuaG9sZGVyVHJpYW5nbGUpO1xuICAgICAgICB0aGlzLmh1bGwgPSBuZXcgSHVsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5NU1QgPSBuZXcgTWluaW11bVNwYW5uaW5nVHJlZSh0aGlzKTtcbiAgICB9XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWRUcmlhbmdsZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnRyaWFuZ2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRyaWFuZ2xlID0gdGhpcy50cmlhbmdsZXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRyaWFuZ2xlLmlzUG9pbnRJbkNpcmN1bWNpcmNsZShwb2ludCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlhbmdsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICBiYWRUcmlhbmdsZXMucHVzaCh0cmlhbmdsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdW5pcXVlTGluZXMgPSBMaW5lLkdldFVuaXF1ZUxpbmVzKGJhZFRyaWFuZ2xlcyk7XG4gICAgICAgICAgICB1bmlxdWVMaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdHJpYW5nbGUgPSBuZXcgVHJpYW5nbGUocG9pbnQsIGxpbmUuYSwgbGluZS5iKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWFuZ2xlcy5wdXNoKHRyaWFuZ2xlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGVhbkhvbGRlclRyaWFuZ2xlKCk7XG4gICAgICAgIHRoaXMuYWRkRmluaXNoZWRUcmlhbmd1bGF0aW9uTGluZXMoKTtcbiAgICB9XG4gICAgc3RhdGljIE1ha2VIb2xkZXJUcmlhbmdsZSgpIHtcbiAgICAgICAgY29uc3Qgc2lkZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgICAgICBjb25zdCBhID0gbmV3IFZlY3Rvcih7IHg6IHNpZGUgLyAyLCB5OiAtc2lkZSB9KTtcbiAgICAgICAgY29uc3QgYiA9IG5ldyBWZWN0b3IoeyB4OiAtc2lkZSwgeTogc2lkZSB9KTtcbiAgICAgICAgY29uc3QgYyA9IG5ldyBWZWN0b3IoeyB4OiBzaWRlLCB5OiBzaWRlIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFRyaWFuZ2xlKGEsIGIsIGMpO1xuICAgIH1cbiAgICBjbGVhbkhvbGRlclRyaWFuZ2xlKCkge1xuICAgICAgICBjb25zdCB7IGEsIGIsIGMgfSA9IHRoaXMuaG9sZGVyVHJpYW5nbGU7XG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLnRyaWFuZ2xlcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgdHJpYW5nbGUgPSB0aGlzLnRyaWFuZ2xlc1tpXTtcbiAgICAgICAgICAgIGlmICh0cmlhbmdsZS5oYXNBbnlQb2ludChbYSwgYiwgY10pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlhbmdsZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFkZEZpbmlzaGVkVHJpYW5ndWxhdGlvbkxpbmVzKCkge1xuICAgICAgICB0aGlzLnRyaWFuZ2xlcy5mb3JFYWNoKCh0cmlhbmdsZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5saW5lcy5wdXNoKC4uLnRyaWFuZ2xlLmxpbmVzQXJyYXkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ucmlhbmd1bGF0aW9uLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlY3RvciB7XG4gICAgY29uc3RydWN0b3IoeyB4LCB5IH0gPSB7IHg6IDAsIHk6IDAgfSkge1xuICAgICAgICB0aGlzLmZsb2F0UHJlY2lzaW9uID0gMjtcbiAgICAgICAgdGhpcy54ID0geDtcbiAgICAgICAgdGhpcy55ID0geTtcbiAgICB9XG4gICAgY2xvbmUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHsgeDogdGhpcy54LCB5OiB0aGlzLnkgfSk7XG4gICAgfVxuICAgIG1hZ25pdHVkZSgpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCAqIHRoaXMueDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMueSAqIHRoaXMueTtcbiAgICAgICAgY29uc3QgbWFnbml0dWRlID0gTWF0aC5zcXJ0KHggKyB5KTtcbiAgICAgICAgcmV0dXJuIE51bWJlcihtYWduaXR1ZGUudG9GaXhlZCh0aGlzLmZsb2F0UHJlY2lzaW9uKSk7XG4gICAgfVxuICAgIGRvdFByb2R1Y3QoeyB4LCB5IH0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHggKyB0aGlzLnkgKiB5O1xuICAgIH1cbiAgICBhZGQodmVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnggKyB2ZWN0b3IueDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMueSArIHZlY3Rvci55O1xuICAgICAgICByZXR1cm4gbmV3IFZlY3Rvcih7IHgsIHkgfSk7XG4gICAgfVxuICAgIHN1Yih2ZWN0b3IpIHtcbiAgICAgICAgY29uc3QgeCA9IHRoaXMueCArIC12ZWN0b3IueDtcbiAgICAgICAgY29uc3QgeSA9IHRoaXMueSArIC12ZWN0b3IueTtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeyB4LCB5IH0pO1xuICAgIH1cbiAgICBub3JtYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IG1hZ25pdHVkZSA9IHRoaXMubWFnbml0dWRlKCk7XG4gICAgICAgIGNvbnN0IHggPSB0aGlzLnggLyBtYWduaXR1ZGU7XG4gICAgICAgIGNvbnN0IHkgPSB0aGlzLnkgLyBtYWduaXR1ZGU7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHsgeCwgeSB9KTtcbiAgICB9XG4gICAgbmVnYXRpdmUoKSB7XG4gICAgICAgIGNvbnN0IHggPSAtdGhpcy54O1xuICAgICAgICBjb25zdCB5ID0gLXRoaXMueTtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeyB4LCB5IH0pO1xuICAgIH1cbiAgICBwZXJwZW5kaWN1bGFyKCkge1xuICAgICAgICBjb25zdCByaWdodCA9IG5ldyBWZWN0b3IoeyB4OiAtdGhpcy55LCB5OiB0aGlzLnggfSk7XG4gICAgICAgIGNvbnN0IGxlZnQgPSBuZXcgVmVjdG9yKHsgeDogdGhpcy55LCB5OiAtdGhpcy54IH0pO1xuICAgICAgICByZXR1cm4geyBsZWZ0LCByaWdodCB9O1xuICAgIH1cbiAgICBzY2FsZShsZW5ndGgpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHRoaXMubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IHggPSBub3JtYWxpemVkLnggKiBsZW5ndGg7XG4gICAgICAgIGNvbnN0IHkgPSBub3JtYWxpemVkLnkgKiBsZW5ndGg7XG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yKHsgeCwgeSB9KTtcbiAgICB9XG4gICAgYW5nbGUodmVjdG9yKSB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSB0aGlzLmRvdFByb2R1Y3QodmVjdG9yKTtcbiAgICAgICAgY29uc3QgY29zQW5nbGUgPSBwcm9kdWN0IC8gKHRoaXMubWFnbml0dWRlKCkgKiB2ZWN0b3IubWFnbml0dWRlKCkpO1xuICAgICAgICByZXR1cm4gVmVjdG9yLlJhZFRvRGVnKE1hdGguYWNvcyhjb3NBbmdsZSkpO1xuICAgIH1cbiAgICBiaXNlY3Rvcih2ZWN0b3IpIHtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZCA9IHRoaXMubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRWZWN0b3IgPSB2ZWN0b3Iubm9ybWFsaXplKCk7XG4gICAgICAgIGNvbnN0IHN1bSA9IG5vcm1hbGl6ZWQuYWRkKG5vcm1hbGl6ZWRWZWN0b3IpO1xuICAgICAgICBjb25zdCBtYWduaXR1ZGUgPSAodGhpcy5tYWduaXR1ZGUoKSArIHZlY3Rvci5tYWduaXR1ZGUoKSkgLyAyO1xuICAgICAgICByZXR1cm4gc3VtLnNjYWxlKG1hZ25pdHVkZSk7XG4gICAgfVxuICAgIGVxdWFscyh2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMueCA9PT0gdmVjdG9yLnggJiYgdGhpcy55ID09PSB2ZWN0b3IueTtcbiAgICB9XG4gICAgc3RhdGljIFJhZFRvRGVnKHJhZCkge1xuICAgICAgICByZXR1cm4gcmFkICogKDE4MCAvIE1hdGguUEkpO1xuICAgIH1cbiAgICBzdGF0aWMgRGVnVG9SYWQoZGVnKSB7XG4gICAgICAgIHJldHVybiBkZWcgKiAoTWF0aC5QSSAvIDE4MCk7XG4gICAgfVxuICAgIHN0YXRpYyBGaW5kUG9seUNlbnRyb2lkKHBvaW50cykge1xuICAgICAgICBsZXQgeCA9IDA7XG4gICAgICAgIGxldCB5ID0gMDtcbiAgICAgICAgcG9pbnRzLmZvckVhY2goKHBvaW50KSA9PiB7XG4gICAgICAgICAgICB4ICs9IHBvaW50Lng7XG4gICAgICAgICAgICB5ICs9IHBvaW50Lnk7XG4gICAgICAgIH0pO1xuICAgICAgICB4IC89IHBvaW50cy5sZW5ndGg7XG4gICAgICAgIHkgLz0gcG9pbnRzLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IoeyB4LCB5IH0pO1xuICAgIH1cbiAgICBzdGF0aWMgQXJyYW5nZVBvaW50c0NDVyhwb2ludHMpIHtcbiAgICAgICAgY29uc3QgY2VudHJvaWQgPSBWZWN0b3IuRmluZFBvbHlDZW50cm9pZChwb2ludHMpO1xuICAgICAgICBsZXQgY2xvbmUgPSBbLi4ucG9pbnRzXTtcbiAgICAgICAgY2xvbmUuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYW5nbGVBID0gTWF0aC5hdGFuMihhLnkgLSBjZW50cm9pZC55LCBhLnggLSBjZW50cm9pZC54KTtcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlQiA9IE1hdGguYXRhbjIoYi55IC0gY2VudHJvaWQueSwgYi54IC0gY2VudHJvaWQueCk7XG4gICAgICAgICAgICByZXR1cm4gYW5nbGVBIC0gYW5nbGVCO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb25lO1xuICAgIH1cbiAgICBzdGF0aWMgVW5pcXVlRnJvbUFycmF5KHBvaW50cykge1xuICAgICAgICByZXR1cm4gcG9pbnRzLmZpbHRlcigocG9pbnRGaWx0ZXIpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAocG9pbnRzLmZpbmRJbmRleCgocG9pbnRJbmRleCkgPT4gcG9pbnRGaWx0ZXIuZXF1YWxzKHBvaW50SW5kZXgpKSAhPT0gLTEpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1WZWN0b3IuanMubWFwIiwiY29uc3QgY29udGFpbnMgPSAoYXJyYXksIGVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gZmluZEluZGV4KGFycmF5LCBlbGVtZW50KSAhPT0gLTE7XG59O1xuY29uc3QgZmluZEluZGV4ID0gKGFycmF5LCBmaW5kKSA9PiB7XG4gICAgcmV0dXJuIGFycmF5LmZpbmRJbmRleCgoZWxlbWVudCkgPT4gZWxlbWVudC5pZCA9PT0gZmluZC5pZCk7XG59O1xuZXhwb3J0IHsgY29udGFpbnMsIGZpbmRJbmRleCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aWQuanMubWFwIiwiY29uc3QgaW50ID0gKG1pbiwgbWF4KSA9PiB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQobWluLCBtYXgpKTtcbn07XG5jb25zdCBmbG9hdCA9IChtaW4sIG1heCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuY29uc3QgY29sb3IgPSAoKSA9PiB7XG4gICAgY29uc3QgciA9IGludCgwLCAyNTUpO1xuICAgIGNvbnN0IGcgPSBpbnQoMCwgMjU1KTtcbiAgICBjb25zdCBiID0gaW50KDAsIDI1NSk7XG4gICAgcmV0dXJuIGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbn07XG5leHBvcnQgeyBpbnQsIGZsb2F0LCBjb2xvciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmFuZG9tLmpzLm1hcCIsImxldCBpZCA9IDA7XG5jb25zdCB1bmlxdWVJZCA9ICgpID0+IGlkKys7XG5leHBvcnQgZGVmYXVsdCB1bmlxdWVJZDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaXF1ZUlELmpzLm1hcCIsImltcG9ydCBzaXplIGZyb20gJy4uL2ludGVyZmFjZXMvc2l6ZSc7XG5pbXBvcnQgVGlsZSBmcm9tICcuL1RpbGUnO1xuaW1wb3J0IHBvaW50IGZyb20gJy4uL2ludGVyZmFjZXMvcG9pbnQnO1xuaW1wb3J0IGJvdW5kaW5nQm94IGZyb20gJy4uL2ludGVyZmFjZXMvYm91bmRpbmdfYm94JztcbmltcG9ydCBEcmF3IGZyb20gJy4vRHJhdyc7XG5cbnR5cGUgcm93ID0gVGlsZVtdO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW52YXMge1xuICBib3VuZGluZ0JveDogYm91bmRpbmdCb3g7XG4gIHJlYWRvbmx5IGRyYXc6IERyYXc7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIHJvd3M6IHJvd1tdID0gW107XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3I6IHN0cmluZywgcmVhZG9ubHkgc2l6ZTogc2l6ZSkge1xuICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xuICAgIHRoaXMuY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIHRoaXMuc2V0U2l6ZShzaXplKTtcbiAgICB0aGlzLmRyYXcgPSBuZXcgRHJhdyh0aGlzKTtcbiAgfVxuXG4gIGdldCBjYW52YXMoKTogSFRNTENhbnZhc0VsZW1lbnQge1xuICAgIHJldHVybiB0aGlzLl9jYW52YXM7XG4gIH1cblxuICBkcmF3R3JpZChncmlkU2l6ZTogc2l6ZSwgdGlsZVNpemU6IHNpemUpOiB2b2lkIHtcbiAgICB0aGlzLmJvdW5kaW5nQm94ID0gdGhpcy5nZXRCb3VuZGluZ0JveChncmlkU2l6ZSwgdGlsZVNpemUpO1xuXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBncmlkU2l6ZS5oZWlnaHQ7IHkrKykge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGdyaWRTaXplLndpZHRoOyB4KyspIHtcbiAgICAgICAgY29uc3QgY29vcmRzOiBwb2ludCA9IHsgeCwgeSB9O1xuICAgICAgICBjb25zdCBwb3NpdGlvbjogcG9pbnQgPSB0aGlzLmdldFRpbGVQb3NpdGlvbihjb29yZHMsIHRpbGVTaXplKTtcbiAgICAgICAgY29uc3QgdGlsZSA9IG5ldyBUaWxlKHRpbGVTaXplLCBwb3NpdGlvbiwgY29vcmRzLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICByb3cucHVzaCh0aWxlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucm93cy5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGlsZSh7IHgsIHkgfTogcG9pbnQpOiBUaWxlIHwgbnVsbCB7XG4gICAgY29uc3Qgcm93OiByb3cgPSB0aGlzLnJvd3NbeV07XG5cbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIGlmIChyb3cubGVuZ3RoIDwgeCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJvd1t4XTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U2l6ZSh7IHdpZHRoLCBoZWlnaHQgfTogc2l6ZSk6IHZvaWQge1xuICAgIHRoaXMuX2NhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XG4gIH1cblxuICBwcml2YXRlIGdldFRpbGVQb3NpdGlvbihjb29yZHM6IHBvaW50LCBzaXplOiBzaXplKTogcG9pbnQge1xuICAgIGNvbnN0IG9mZnNldCA9IHtcbiAgICAgIHg6IGNvb3Jkcy54ICogc2l6ZS53aWR0aCxcbiAgICAgIHk6IGNvb3Jkcy55ICogc2l6ZS5oZWlnaHQsXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICB4OiB0aGlzLmJvdW5kaW5nQm94LmxlZnQgKyBvZmZzZXQueCxcbiAgICAgIHk6IHRoaXMuYm91bmRpbmdCb3gudG9wICsgb2Zmc2V0LnksXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Qm91bmRpbmdCb3goZ3JpZFNpemU6IHNpemUsIHRpbGVTaXplOiBzaXplKTogYm91bmRpbmdCb3gge1xuICAgIGNvbnN0IGNlbnRlcjogcG9pbnQgPSB7XG4gICAgICB4OiBNYXRoLnJvdW5kKHRoaXMuY2FudmFzLndpZHRoIC8gMiksXG4gICAgICB5OiBNYXRoLnJvdW5kKHRoaXMuY2FudmFzLmhlaWdodCAvIDIpLFxuICAgIH07XG5cbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IENhbnZhcy5nZXRHcmlkU2l6ZUluUGl4ZWxzKGdyaWRTaXplLCB0aWxlU2l6ZSk7XG4gICAgY29uc3QgaGFsZkhlaWdodDogbnVtYmVyID0gTWF0aC5yb3VuZChoZWlnaHQgLyAyKTtcbiAgICBjb25zdCBoYWxmV2lkdGg6IG51bWJlciA9IE1hdGgucm91bmQod2lkdGggLyAyKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3A6IGNlbnRlci55IC0gaGFsZkhlaWdodCxcbiAgICAgIGJvdHRvbTogY2VudGVyLnkgKyBoYWxmSGVpZ2h0LFxuICAgICAgbGVmdDogY2VudGVyLnggLSBoYWxmV2lkdGgsXG4gICAgICByaWdodDogY2VudGVyLnggKyBoYWxmV2lkdGgsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhdGljIGdldEdyaWRTaXplSW5QaXhlbHMoZ3JpZFNpemU6IHNpemUsIHRpbGVTaXplOiBzaXplKTogc2l6ZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHdpZHRoOiBncmlkU2l6ZS53aWR0aCAqIHRpbGVTaXplLndpZHRoLFxuICAgICAgaGVpZ2h0OiBncmlkU2l6ZS5oZWlnaHQgKiB0aWxlU2l6ZS5oZWlnaHQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IENhbnZhcyBmcm9tICcuL0NhbnZhcyc7XG5pbXBvcnQgeyBWZWN0b3IsIFRyaWFuZ2xlLCBMaW5lIH0gZnJvbSAncHVsc2FyLXBhdGhmaW5kaW5nJztcbmltcG9ydCB7XG4gIGNfcG9pbnRTdHJva2UsXG4gIGNfcG9pbnRGaWxsLFxuICBzX3BvaW50LFxuICBjX2xpbmUsXG4gIHNfbGluZSxcbiAgY190cmlhbmdsZUxpbmUsXG4gIGNfdHJpYW5nbGVGaWxsLFxuICBzX3RyaWFuZ2xlLFxufSBmcm9tICcuLi9jb25zdC9kcmF3JztcbmltcG9ydCBTcXVhcmUgZnJvbSAnLi4vY2xhc3Nlcy9zcXVhcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEcmF3IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgY29uc3RydWN0b3IoeyBjb250ZXh0IH06IENhbnZhcykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gIH1cblxuICBwb2ludChcbiAgICB7IHgsIHkgfTogVmVjdG9yLFxuICAgIHN0cm9rZUNvbG9yOiBzdHJpbmcgPSBjX3BvaW50U3Ryb2tlLFxuICAgIGZpbGxDb2xvcjogc3RyaW5nID0gY19wb2ludEZpbGwsXG4gICAgc2l6ZTogbnVtYmVyID0gc19wb2ludFxuICApOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCBzaXplLCAwLCAyICogTWF0aC5QSSk7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sb3I7XG4gICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGZpbGxDb2xvcjtcbiAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcbiAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XG4gIH1cblxuICBwb2ludHMoXG4gICAgcG9pbnRzOiBWZWN0b3JbXSxcbiAgICBzdHJva2VDb2xvcj86IHN0cmluZyxcbiAgICBmaWxsQ29sb3I/OiBzdHJpbmcsXG4gICAgc2l6ZT86IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBwb2ludHMuZm9yRWFjaCgocG9pbnQ6IFZlY3RvcikgPT4ge1xuICAgICAgdGhpcy5wb2ludChwb2ludCwgc3Ryb2tlQ29sb3IsIGZpbGxDb2xvciwgc2l6ZSk7XG4gICAgfSk7XG4gIH1cblxuICBsaW5lKHsgYSwgYiB9OiBMaW5lLCBjb2xvcjogc3RyaW5nID0gY19saW5lLCBzaXplOiBudW1iZXIgPSBzX2xpbmUpOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gY29sb3I7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IHNpemU7XG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhhLngsIGEueSk7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyhiLngsIGIueSk7XG4gICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xuICB9XG5cbiAgbGluZXMobGluZXM6IExpbmVbXSwgY29sb3I/OiBzdHJpbmcsIHNpemU/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBsaW5lcy5mb3JFYWNoKChsaW5lOiBMaW5lKSA9PiB0aGlzLmxpbmUobGluZSwgY29sb3IsIHNpemUpKTtcbiAgfVxuXG4gIHRyaWFuZ2xlKFxuICAgIHsgbGluZXMsIGEsIGIsIGMgfTogVHJpYW5nbGUsXG4gICAgc3Ryb2tlQ29sb3I6IHN0cmluZyA9IGNfdHJpYW5nbGVMaW5lLFxuICAgIGZpbGxDb2xvcjogc3RyaW5nID0gY190cmlhbmdsZUZpbGwsXG4gICAgc2l6ZTogbnVtYmVyID0gc190cmlhbmdsZVxuICApOiB2b2lkIHtcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhhLngsIGEueSk7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyhiLngsIGIueSk7XG4gICAgdGhpcy5jb250ZXh0LmxpbmVUbyhjLngsIGMueSk7XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBmaWxsQ29sb3I7XG4gICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcbiAgICB0aGlzLmxpbmVzKFtsaW5lcy5hYiwgbGluZXMuYmMsIGxpbmVzLmNhXSwgc3Ryb2tlQ29sb3IsIHNpemUpO1xuICB9XG5cbiAgdHJpYW5nbGVzKFxuICAgIHRyaWFuZ2xlczogVHJpYW5nbGVbXSxcbiAgICBzdHJva2VDb2xvcj86IHN0cmluZyxcbiAgICBmaWxsQ29sb3I/OiBzdHJpbmcsXG4gICAgc2l6ZT86IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0cmlhbmdsZXMuZm9yRWFjaCgodHJpYW5nbGU6IFRyaWFuZ2xlKSA9PiB7XG4gICAgICB0aGlzLnRyaWFuZ2xlKHRyaWFuZ2xlLCBzdHJva2VDb2xvciwgZmlsbENvbG9yLCBzaXplKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNxdWFyZSh7IGEsIGIsIGMsIGQgfTogU3F1YXJlKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oYS54LCBhLnkpO1xuICAgIHRoaXMuY29udGV4dC5saW5lVG8oYi54LCBiLnkpO1xuICAgIHRoaXMuY29udGV4dC5saW5lVG8oYy54LCBjLnkpO1xuICAgIHRoaXMuY29udGV4dC5saW5lVG8oZC54LCBkLnkpO1xuICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICB9XG59XG4iLCJpbXBvcnQgc2l6ZSBmcm9tICcuLi9pbnRlcmZhY2VzL3NpemUnO1xuaW1wb3J0IHBvaW50IGZyb20gJy4uL2ludGVyZmFjZXMvcG9pbnQnO1xuaW1wb3J0IGlkIGZyb20gJy4uL2ludGVyZmFjZXMvaWQnO1xuaW1wb3J0IHVuaXF1ZUlkIGZyb20gJy4uL3V0aWwvdW5pcXVlSUQnO1xuaW1wb3J0IHsgTmF2aWdhdG9yVGlsZSwgVmVjdG9yIH0gZnJvbSAncHVsc2FyLXBhdGhmaW5kaW5nJztcbmltcG9ydCB7IHN0YXJ0LCBvYnN0YWNsZSwgb3V0bGluZSwgZW1wdHkgfSBmcm9tICcuLi9jb25zdC9kcmF3JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGlsZSBpbXBsZW1lbnRzIGlkIHtcbiAgaWQ6IG51bWJlciA9IHVuaXF1ZUlkKCk7XG4gIG5hdmlnYXRvclRpbGU6IE5hdmlnYXRvclRpbGUgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfaXNPYnN0YWNsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9pc1N0YXJ0OiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNpemU6IHNpemUsXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogcG9pbnQsXG4gICAgcHJpdmF0ZSBfZ3JpZENvb3JkczogcG9pbnQsXG4gICAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgKSB7XG4gICAgdGhpcy5uYXZpZ2F0b3JUaWxlID0gbmV3IE5hdmlnYXRvclRpbGUobmV3IFZlY3RvcihfZ3JpZENvb3JkcykpO1xuICAgIHRoaXMuc3Ryb2tlKG91dGxpbmUpO1xuICB9XG5cbiAgZ2V0IGlzT2JzdGFjbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzT2JzdGFjbGU7XG4gIH1cblxuICBnZXQgaXNTdGFydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faXNTdGFydDtcbiAgfVxuICBnZXQgY2FuQmVTdGFydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMuaXNPYnN0YWNsZSAmJiAhdGhpcy5pc1N0YXJ0O1xuICB9XG4gIGdldCBncmlkQ29vcmRzKCk6IHBvaW50IHtcbiAgICByZXR1cm4gdGhpcy5fZ3JpZENvb3JkcztcbiAgfVxuXG4gIGJlY29tZVN0YXJ0KCk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5jYW5CZVN0YXJ0KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5maWxsKHN0YXJ0KTtcbiAgICB0aGlzLnN0cm9rZShvdXRsaW5lKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5faXNTdGFydCA9IGZhbHNlO1xuICAgIHRoaXMuZmlsbChlbXB0eSk7XG4gICAgdGhpcy5zdHJva2Uob3V0bGluZSk7XG4gIH1cblxuICBiZWNvbWVPYnN0YWNsZSgpOiB2b2lkIHtcbiAgICB0aGlzLl9pc09ic3RhY2xlID0gdHJ1ZTtcbiAgICB0aGlzLmZpbGwob2JzdGFjbGUpO1xuICB9XG5cbiAgY29udGFpbnNQb2ludCh7IHgsIHkgfTogcG9pbnQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgeCA+PSB0aGlzLnBvc2l0aW9uLnggJiZcbiAgICAgIHggPD0gdGhpcy5wb3NpdGlvbi54ICsgdGhpcy5zaXplLndpZHRoICYmXG4gICAgICB5ID49IHRoaXMucG9zaXRpb24ueSAmJlxuICAgICAgeSA8PSB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUuaGVpZ2h0XG4gICAgKTtcbiAgfVxuXG4gIGZpbGwoY29sb3I6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuZHJhdygoKSA9PiB7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gY29sb3I7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xuICAgIH0pO1xuICB9XG5cbiAgc3Ryb2tlKGNvbG9yOiBzdHJpbmcgPSAnYmxhY2snKTogdm9pZCB7XG4gICAgdGhpcy5kcmF3KCgpID0+IHtcbiAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG9yO1xuICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXcoZHJhd0FjdGlvbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIGNvbnN0IHsgeCwgeSB9ID0gdGhpcy5wb3NpdGlvbjtcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHRoaXMuc2l6ZTtcbiAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgLy90aGlzLmNvbnRleHQuYXJjKHgsIHkgLCB3aWR0aCwgMCwgMipNYXRoLlBJKTtcbiAgICB0aGlzLmNvbnRleHQucmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICBkcmF3QWN0aW9uKCk7XG4gICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3Qgc3RhcnQ6IHN0cmluZyA9ICdyZWQnO1xuZXhwb3J0IGNvbnN0IG9ic3RhY2xlOiBzdHJpbmcgPSAnYmxhY2snO1xuZXhwb3J0IGNvbnN0IG91dGxpbmU6IHN0cmluZyA9ICdibGFjayc7XG5leHBvcnQgY29uc3QgZW1wdHk6IHN0cmluZyA9ICd3aGl0ZSc7XG4vL3BvaW50XG5leHBvcnQgY29uc3QgY19wb2ludFN0cm9rZTogc3RyaW5nID0gJ2JsYWNrJztcbmV4cG9ydCBjb25zdCBjX3BvaW50RmlsbDogc3RyaW5nID0gJ3JnYigxMDIsIDIxOSwgMjQ5KSc7XG5leHBvcnQgY29uc3Qgc19wb2ludDogbnVtYmVyID0gMztcbi8vbGluZVxuZXhwb3J0IGNvbnN0IGNfbGluZTogc3RyaW5nID0gJ3JlZCc7XG5leHBvcnQgY29uc3Qgc19saW5lOiBudW1iZXIgPSAxO1xuLy90cmlhbmdsZVxuZXhwb3J0IGNvbnN0IGNfdHJpYW5nbGVMaW5lOiBzdHJpbmcgPSAncmdiKDEwMiwgMjE5LCAyNDkpJztcbmV4cG9ydCBjb25zdCBjX3RyaWFuZ2xlRmlsbDogc3RyaW5nID0gJ3JnYig0MSwgNDQsIDUyKSc7XG5leHBvcnQgY29uc3Qgc190cmlhbmdsZTogbnVtYmVyID0gMTtcbiIsImltcG9ydCBzaXplIGZyb20gJy4uLy4uL2ludGVyZmFjZXMvc2l6ZSc7XG5pbXBvcnQgeyBHcmlkLCBOYXZpZ2F0b3JUaWxlLCBWZWN0b3IsIE5hdmlnYXRvciB9IGZyb20gJ3B1bHNhci1wYXRoZmluZGluZyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4uLy4uL2NsYXNzZXMvQ2FudmFzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdfcGF0aGZpbmRpbmcge1xuICAgIHByaXZhdGUgcmVhZG9ubHkgZ3JpZFNpemU6IHNpemUgPSB7IHdpZHRoOiAzMCwgaGVpZ2h0OiA3MCB9O1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGlsZVNpZGU6IG51bWJlciA9IDEwO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgb2JzdGFjbGVDb3VudDogbnVtYmVyID0gMTUwO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgdGlsZVNpemU6IHNpemU7XG4gICAgcHJpdmF0ZSByZWFkb25seSBncmlkOiBHcmlkO1xuICAgIHByaXZhdGUgcmVhZG9ubHkgbmF2aWdhdG9yc0NvdW50OiBudW1iZXIgPSAxO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgY2FudmFzOiBDYW52YXMpIHtcbiAgICAgICAgdGhpcy50aWxlU2l6ZSA9IHsgd2lkdGg6IHRoaXMudGlsZVNpZGUsIGhlaWdodDogdGhpcy50aWxlU2lkZSB9O1xuICAgICAgICB0aGlzLmdyaWQgPSBuZXcgR3JpZCh0aGlzLmdyaWRTaXplKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhd0dyaWQodGhpcy5ncmlkU2l6ZSwgdGhpcy50aWxlU2l6ZSk7XG4gICAgICAgIHRoaXMubWFrZU5hdmlnYXRvcnModGhpcy5uYXZpZ2F0b3JzQ291bnQpO1xuICAgIH1cblxuICAgIHByaXZhdGUgb25OYXZFeHBsb3JlKHsgcG9zaXRpb24gfTogTmF2aWdhdG9yVGlsZSkge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5jYW52YXMuZ2V0VGlsZShwb3NpdGlvbik7XG4gICAgICAgIHRpbGUuZmlsbCgnYmx1ZScpO1xuICAgICAgICB0aWxlLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICBwcml2YXRlIG9uTmF2Q29tcGxldGUocGF0aDogTmF2aWdhdG9yVGlsZVtdKTogdm9pZCB7XG4gICAgICAgIGlmIChwYXRoID09PSBudWxsKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignbm8gdmFsaWQgcGF0aCcpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXRoLmZvckVhY2goKHsgcG9zaXRpb24gfTogTmF2aWdhdG9yVGlsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmNhbnZhcy5nZXRUaWxlKHBvc2l0aW9uKTtcbiAgICAgICAgICB0aWxlLmZpbGwoJ2dyZWVuJyk7XG4gICAgICAgICAgdGlsZS5zdHJva2UoKTtcbiAgICAgICAgfSk7ICBcbiAgICB9O1xuXG4gICAgbWFrZU5hdmlnYXRvcnMoY291bnQ6IG51bWJlcik6IHZvaWR7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgLy9jb25zdCBuYXZCZWdpbjogTmF2aWdhdG9yVGlsZSA9IGdyaWQucmFuZG9tRnJlZVRpbGUoKTtcbiAgICAgICAgICAgIC8vY29uc3QgbmF2RW5kOiBOYXZpZ2F0b3JUaWxlID0gZ3JpZC5yYW5kb21GcmVlVGlsZSgpO1xuICAgICAgICAgICAgY29uc3QgbmF2QmVnaW46IE5hdmlnYXRvclRpbGUgPSB0aGlzLmdyaWQuZmluZFRpbGUobmV3IFZlY3Rvcih7IHg6IDAsIHk6IDAgfSkpO1xuICAgICAgICAgICAgY29uc3QgbmF2RW5kOiBOYXZpZ2F0b3JUaWxlID0gdGhpcy5ncmlkLmZpbmRUaWxlKFxuICAgICAgICAgICAgbmV3IFZlY3Rvcih7IHg6IHRoaXMuZ3JpZFNpemUud2lkdGggLSAxLCB5OiB0aGlzLmdyaWRTaXplLmhlaWdodCAtIDEgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjb25zdCBuYXZpZ2F0b3I6IE5hdmlnYXRvciA9IG5ldyBOYXZpZ2F0b3IoXG4gICAgICAgICAgICB0aGlzLmdyaWQsXG4gICAgICAgICAgICBuYXZCZWdpbixcbiAgICAgICAgICAgIG5hdkVuZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHRoaXMub25OYXZDb21wbGV0ZS5iaW5kKHRoaXMpXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgbmF2aWdhdG9yLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSIsImltcG9ydCB7IFRyaWFuZ3VsYXRpb24sIFZlY3RvciB9IGZyb20gJ3B1bHNhci1wYXRoZmluZGluZyc7XG5pbXBvcnQgQ2FudmFzIGZyb20gJy4uLy4uL2NsYXNzZXMvQ2FudmFzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWdfdHJpYW5ndWxhdGlvbiB7XG5cbiAgICBwcml2YXRlIHJlYWRvbmx5IHRyaWFuZ3VsYXRpb246IFRyaWFuZ3VsYXRpb247XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvaW50czogVmVjdG9yW10sIHByaXZhdGUgY2FudmFzOiBDYW52YXMpIHtcbiAgICAgICAgdGhpcy50cmlhbmd1bGF0aW9uID0gbmV3IFRyaWFuZ3VsYXRpb24odGhpcy5wb2ludHMpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgc3RhcnQoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUudGltZSgndHJpYW5ndWxhdGlvbicpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy50cmlhbmd1bGF0aW9uLnN0YXJ0KCk7XG4gICAgICAgIHRoaXMudHJpYW5ndWxhdGlvbi5NU1Quc3RhcnQoKTtcbiAgICAgICAgdGhpcy50cmlhbmd1bGF0aW9uLmh1bGwuc3RhcnQoKTtcblxuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3LnRyaWFuZ2xlcyh0aGlzLnRyaWFuZ3VsYXRpb24udHJpYW5nbGVzKTtcbiAgICAgICAgdGhpcy5jYW52YXMuZHJhdy5wb2ludHModGhpcy5wb2ludHMpO1xuICAgICAgICAvL3RoaXMuY2FudmFzLmRyYXcubGluZXModGhpcy50cmlhbmd1bGF0aW9uLmxpbmVzKTtcbiAgICAgICAgLy90aGlzLmNhbnZhcy5kcmF3LmxpbmVzKHRoaXMudHJpYW5ndWxhdGlvbi5NU1QubGluZXMpO1xuICAgICAgICB0aGlzLmNhbnZhcy5kcmF3LmxpbmVzKHRoaXMudHJpYW5ndWxhdGlvbi5odWxsLmxpbmVzKTtcbiAgICAgICAgLy90aGlzLmNhbnZhcy5kcmF3LnBvaW50KFZlY3Rvci5GaW5kUG9seUNlbnRyb2lkKHRoaXMucG9pbnRzKSwgJ3JlZCcsICdyZWQnLCAxMCk7XG5cbiAgICAgICAgY29uc29sZS50aW1lRW5kKCd0cmlhbmd1bGF0aW9uJyk7XG4gICAgICB9O1xufSIsImltcG9ydCBDYW52YXMgZnJvbSAnLi9jbGFzc2VzL0NhbnZhcyc7XG5pbXBvcnQgeyBwb2ludHMgYXMgcl9wb2ludHMgfSBmcm9tICcuL3V0aWwvcmFuZG9tJztcbmltcG9ydCBzaXplIGZyb20gJy4vaW50ZXJmYWNlcy9zaXplJztcbmltcG9ydCBib3VuZGluZ0JveCBmcm9tICcuL2ludGVyZmFjZXMvYm91bmRpbmdfYm94JztcbmltcG9ydCB7IFZlY3RvciB9IGZyb20gJ3B1bHNhci1wYXRoZmluZGluZyc7XG5cbmltcG9ydCBEZWJ1Z190cmlhbmd1bGF0aW9uIGZyb20gJy4vZGVidWcvdHJpYW5ndWxhdGlvbic7XG5pbXBvcnQgRGVidWdfcGF0aGRpbmdpbmcgZnJvbSAnLi9kZWJ1Zy9wYXRoZmluZGluZyc7XG5cbmNvbnN0IGNhbnZhc1NpemU6IHNpemUgPSB7XG4gIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcbiAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXG59O1xuY29uc3QgY2FudmFzOiBDYW52YXMgPSBuZXcgQ2FudmFzKCcjY2FudmFzJywgY2FudmFzU2l6ZSk7XG5jb25zdCBwYWRkaW5nID0gMTAwO1xuY29uc3QgYm94OiBib3VuZGluZ0JveCA9IHtcbiAgdG9wOiBwYWRkaW5nLFxuICBib3R0b206IGNhbnZhc1NpemUuaGVpZ2h0IC0gcGFkZGluZyxcbiAgbGVmdDogcGFkZGluZyxcbiAgcmlnaHQ6IGNhbnZhc1NpemUud2lkdGggLSBwYWRkaW5nLFxufTtcblxuY29uc3QgcG9pbnRzOiBWZWN0b3JbXSA9IHJfcG9pbnRzKDEwMCwgYm94KTtcblxubmV3IERlYnVnX3RyaWFuZ3VsYXRpb24ocG9pbnRzLCBjYW52YXMpO1xubmV3IERlYnVnX3BhdGhkaW5naW5nKGNhbnZhcyk7XG5cbiIsImltcG9ydCB7IFZlY3RvciB9IGZyb20gJ3B1bHNhci1wYXRoZmluZGluZyc7XG5pbXBvcnQgYm91bmRpbmdCb3ggZnJvbSAnLi4vaW50ZXJmYWNlcy9ib3VuZGluZ19ib3gnO1xuXG5jb25zdCBpbnQgPSAobWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgcmV0dXJuIE1hdGgucm91bmQoZmxvYXQobWluLCBtYXgpKTtcbn07XG5cbmNvbnN0IGZsb2F0ID0gKG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikgKyBtaW47XG59O1xuXG5jb25zdCBjb2xvciA9ICgpOiBzdHJpbmcgPT4ge1xuICBjb25zdCByID0gaW50KDAsIDI1NSk7XG4gIGNvbnN0IGcgPSAwOyAvL2ludCgwLCAyNTUpO1xuICBjb25zdCBiID0gMDsgLy9pbnQoMCwgMjU1KTtcbiAgcmV0dXJuIGByZ2IoJHtyfSwke2d9LCR7Yn0pYDtcbn07XG5cbmNvbnN0IHBvaW50ID0gKHsgdG9wLCBib3R0b20sIGxlZnQsIHJpZ2h0IH06IGJvdW5kaW5nQm94KTogVmVjdG9yID0+IHtcbiAgY29uc3QgeCA9IGludChsZWZ0LCByaWdodCk7XG4gIGNvbnN0IHkgPSBpbnQodG9wLCBib3R0b20pO1xuXG4gIHJldHVybiBuZXcgVmVjdG9yKHsgeCwgeSB9KTtcbn07XG5cbmNvbnN0IHBvaW50cyA9IChjb3VudDogbnVtYmVyLCBib3g6IGJvdW5kaW5nQm94KTogVmVjdG9yW10gPT4ge1xuICBjb25zdCBwb2ludHM6IFZlY3RvcltdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgcG9pbnRzLnB1c2gocG9pbnQoYm94KSk7XG4gIH1cblxuICByZXR1cm4gcG9pbnRzO1xufTtcblxuZXhwb3J0IHsgaW50LCBmbG9hdCwgY29sb3IsIHBvaW50LCBwb2ludHMgfTtcbiIsImxldCBpZCA9IDA7XG5cbmNvbnN0IHVuaXF1ZUlkID0gKCk6IG51bWJlciA9PiBpZCsrO1xuXG5leHBvcnQgZGVmYXVsdCB1bmlxdWVJZDtcbiJdLCJzb3VyY2VSb290IjoiIn0=