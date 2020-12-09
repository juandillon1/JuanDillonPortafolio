(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inicio/inicio.component */ "LdfT");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routes */ "XIe5");
/* harmony import */ var _sobremi_sobremi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sobremi/sobremi.component */ "XhJS");
/* harmony import */ var _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./proyectos/proyectos.component */ "RlND");
/* harmony import */ var _fichatecnica_fichatecnica_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fichatecnica/fichatecnica.component */ "IbQC");
/* harmony import */ var _proyectos_proyectos_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./proyectos/proyectos.module */ "l0F8");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pipes/pipes.module */ "iTUp");












class PagesModule {
}
PagesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PagesModule });
PagesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PagesModule_Factory(t) { return new (t || PagesModule)(); }, providers: [], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _pages_routes__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"],
            _proyectos_proyectos_module__WEBPACK_IMPORTED_MODULE_9__["ProyectosModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PagesModule, { declarations: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"],
        _sobremi_sobremi_component__WEBPACK_IMPORTED_MODULE_6__["SobremiComponent"],
        _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_7__["ProyectosComponent"],
        _fichatecnica_fichatecnica_component__WEBPACK_IMPORTED_MODULE_8__["FichatecnicaComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        _pages_routes__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"],
        _proyectos_proyectos_module__WEBPACK_IMPORTED_MODULE_9__["ProyectosModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]], exports: [_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    _pages_routes__WEBPACK_IMPORTED_MODULE_5__["PagesRoutingModule"],
                    _proyectos_proyectos_module__WEBPACK_IMPORTED_MODULE_9__["ProyectosModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"]
                ],
                exports: [
                    _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"],
                ],
                declarations: [
                    _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_2__["InicioComponent"],
                    _sobremi_sobremi_component__WEBPACK_IMPORTED_MODULE_6__["SobremiComponent"],
                    _proyectos_proyectos_component__WEBPACK_IMPORTED_MODULE_7__["ProyectosComponent"],
                    _fichatecnica_fichatecnica_component__WEBPACK_IMPORTED_MODULE_8__["FichatecnicaComponent"],
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "g7L7":
/*!*******************************************!*\
  !*** ./src/app/pipes/sincomillas.pipe.ts ***!
  \*******************************************/
/*! exports provided: SincomillasPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SincomillasPipe", function() { return SincomillasPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SincomillasPipe {
    transform(texto) {
        return texto.toString().replace("''", '');
    }
}
SincomillasPipe.ɵfac = function SincomillasPipe_Factory(t) { return new (t || SincomillasPipe)(); };
SincomillasPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sincomillas", type: SincomillasPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SincomillasPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sincomillas'
            }]
    }], null, null); })();


/***/ }),

/***/ "iTUp":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _safe_image_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safe-image.pipe */ "+v6F");
/* harmony import */ var _sincomillas_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sincomillas.pipe */ "g7L7");




class PipesModule {
}
PipesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PipesModule });
PipesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PipesModule_Factory(t) { return new (t || PipesModule)(); }, imports: [[]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PipesModule, { declarations: [_safe_image_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeImagePipe"],
        _sincomillas_pipe__WEBPACK_IMPORTED_MODULE_2__["SincomillasPipe"]], exports: [_safe_image_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeImagePipe"],
        _sincomillas_pipe__WEBPACK_IMPORTED_MODULE_2__["SincomillasPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PipesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _safe_image_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeImagePipe"],
                    _sincomillas_pipe__WEBPACK_IMPORTED_MODULE_2__["SincomillasPipe"],
                ],
                imports: [],
                exports: [
                    _safe_image_pipe__WEBPACK_IMPORTED_MODULE_1__["SafeImagePipe"],
                    _sincomillas_pipe__WEBPACK_IMPORTED_MODULE_2__["SincomillasPipe"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "l0F8":
/*!*****************************************************!*\
  !*** ./src/app/pages/proyectos/proyectos.module.ts ***!
  \*****************************************************/
/*! exports provided: ProyectosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProyectosModule", function() { return ProyectosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _proyectos_formato_proyectos_formato_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proyectos-formato/proyectos-formato.component */ "3tsI");
/* harmony import */ var _proyectos_principal_proyectos_principal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proyectos-principal/proyectos-principal.component */ "V+G3");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/pipes.module */ "iTUp");






class ProyectosModule {
}
ProyectosModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ProyectosModule });
ProyectosModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ProyectosModule_Factory(t) { return new (t || ProyectosModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ProyectosModule, { declarations: [_proyectos_formato_proyectos_formato_component__WEBPACK_IMPORTED_MODULE_2__["ProyectosFormatoComponent"],
        _proyectos_principal_proyectos_principal_component__WEBPACK_IMPORTED_MODULE_3__["ProyectosPrincipalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]], exports: [_proyectos_formato_proyectos_formato_component__WEBPACK_IMPORTED_MODULE_2__["ProyectosFormatoComponent"],
        _proyectos_principal_proyectos_principal_component__WEBPACK_IMPORTED_MODULE_3__["ProyectosPrincipalComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProyectosModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _proyectos_formato_proyectos_formato_component__WEBPACK_IMPORTED_MODULE_2__["ProyectosFormatoComponent"],
                    _proyectos_principal_proyectos_principal_component__WEBPACK_IMPORTED_MODULE_3__["ProyectosPrincipalComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_4__["PipesModule"]
                ],
                exports: [
                    _proyectos_formato_proyectos_formato_component__WEBPACK_IMPORTED_MODULE_2__["ProyectosFormatoComponent"],
                    _proyectos_principal_proyectos_principal_component__WEBPACK_IMPORTED_MODULE_3__["ProyectosPrincipalComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map