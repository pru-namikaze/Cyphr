(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Cyphr';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _templates_templates_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/templates.module */ "./src/app/templates/templates.module.ts");
/* harmony import */ var _templates_main_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/main-template.component */ "./src/app/templates/main-template.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _templates_templates_module__WEBPACK_IMPORTED_MODULE_6__["TemplatesModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot([
                    { path: '', component: _templates_main_template_component__WEBPACK_IMPORTED_MODULE_7__["MainTemplateComponent"] }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/services/DomainDataDictionary.ts":
/*!**************************************************!*\
  !*** ./src/app/services/DomainDataDictionary.ts ***!
  \**************************************************/
/*! exports provided: DomainDataDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainDataDictionary", function() { return DomainDataDictionary; });
// [
//   type: string,
//   typeDescription: string,
//   [
//     [
//       CypherOptions: string,
//       CypherDescription: string,
//       [
//         OptionId: number,
//         OptionName: string,
//         [
//            OptionValue1: string
//         ]
//       ]
//     ]
//   ]
// ]
//
// [
//   '',
//   ' Description',
//   [
//     [
//       '',
//       ' Description',
//       [
//          '',
//          [
//            '',
//            ''
//          ]
//       ],
//       [
//          '',
//          [
//            '',
//            ''
//          ]
//       ]
//     ]
//   ]
// ],
//
var DomainDataDictionary = [
    [
        'View',
        'View Description', [
            [
                'Text',
                'Text Description',
                null
            ],
            [
                'Bytes',
                'Bytes Description',
                [
                    [
                        0,
                        'Format',
                        [
                            'Hexadecimal',
                            'Binary'
                        ]
                    ],
                    [
                        1,
                        'Group By',
                        [
                            'Half Byte',
                            'Byte',
                            '2 Byte',
                            '4 Byte'
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        'Transform',
        'Transform Description', [
            [
                'Text Transform',
                'Text Transform Description',
                [
                    [
                        0,
                        ' Case',
                        [
                            'None',
                            'Lower Case',
                            'Upper Case',
                            'Capitilize',
                            'Alternating Case',
                            'Invert Case'
                        ]
                    ],
                    [
                        1,
                        'Arrangement',
                        [
                            'None',
                            'Reverse'
                        ]
                    ]
                ]
            ],
            [
                'Numeral System',
                'Numeral System Description',
                [
                    [
                        0,
                        'Read',
                        [
                            'Decimal',
                            'Binary',
                            'Octal',
                            'Hexadecimal',
                            'Roman Numerals',
                        ]
                    ],
                    [
                        1,
                        'Convert To',
                        [
                            'Decimal',
                            'Binary',
                            'Octal',
                            'Hexadecimal',
                            'Roman Numerals'
                        ]
                    ]
                ]
            ],
            [
                'Bitwise Opertion',
                'Bitwise Opertion Description',
                [
                    [
                        0,
                        'Operation',
                        [
                            'NOT ( ~a ) ',
                            'AND ( a & b )',
                            'OR ( a | b )',
                            'XOR ( a ^ b )',
                            'NAND ( ~( a & b ) )',
                            'NOR ( ~( a | b ) )',
                            'NXOR ( ~( a ^ b ) )'
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        'Alphabets',
        'AlphabetsDescription', [
            [
                // TODO: Adding the code for Timming Options
                'Morse Code',
                'Morse Code Description',
                [
                    [
                        0,
                        'Varient',
                        [
                            'English'
                        ]
                    ],
                    [
                        1,
                        'Representation',
                        [
                            'Code',
                            'Timming'
                        ]
                    ],
                    [
                        2,
                        'Short',
                        [
                            '.'
                        ]
                    ],
                    [
                        3,
                        'Long',
                        [
                            '-'
                        ]
                    ],
                    [
                        4,
                        'Space',
                        [
                            '/'
                        ]
                    ]
                ]
            ],
            [
                'Spelling Alphabet',
                'Spelling Alphabet Description',
                [
                    [
                        0,
                        'Alphabet',
                        [
                            'NATO / ICAO Phonetic Alphabet',
                            'Dutch Spelling Alphabet',
                            'German Spelling Alphabet',
                            'Swedish Armed Forces\' Radio Alphabets'
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        'Substitution Cipher',
        'Substitution Cipher Description', [
            [
                'Alphabetical Substitution',
                'Alphabetical Substitution Description',
                [
                    [
                        0,
                        'Plain Text',
                        [
                            'abcdefghijklmnopqrstuvwxyz'
                        ]
                    ],
                    [
                        1,
                        'Cipher Text',
                        [
                            'zyxwvutsrqponmlkjihgfedcba'
                        ]
                    ],
                    [
                        2,
                        'Case Sensitivity',
                        [
                            'Yes',
                            'No'
                        ]
                    ],
                    [
                        3,
                        'Foreign characters',
                        [
                            'Include',
                            'Ignore'
                        ]
                    ]
                ]
            ],
            [
                'ROT13',
                'ROT13 Description',
                [
                    [
                        0,
                        'Variant',
                        [
                            'ROT5 ( 0 - 9 )',
                            'ROT13 ( a - z , A - Z )',
                            'ROT18 ( 0 - 9 , a - z , A - Z )',
                            'ROT47 ( ! - ~ )'
                        ]
                    ]
                ]
            ],
            [
                'Affine Cipher',
                'Affine Cipher Description',
                [
                    [
                        0,
                        'Slope / A',
                        [
                            '1',
                            '23'
                        ]
                    ],
                    [
                        1,
                        'Intercept / B',
                        [
                            '1',
                            '999'
                        ]
                    ],
                    [
                        2,
                        'Alphabet',
                        [
                            'abcdefghijklmnopqrstuvwxyz'
                        ]
                    ],
                    [
                        3,
                        'Case Sensitive',
                        [
                            'Yes',
                            'No'
                        ]
                    ],
                    [
                        4,
                        'Foreign Characters',
                        [
                            'Included',
                            'Ignore'
                        ]
                    ]
                ]
            ],
            [
                'Caesar Cipher',
                'Caesar Cipher Description',
                [
                    [
                        0,
                        'Shift',
                        [
                            '1',
                            '23'
                        ]
                    ],
                    [
                        1,
                        'Alphabet',
                        [
                            'abcdefghijklmnopqrstuvwxyz'
                        ]
                    ],
                    [
                        2,
                        'Case Sensitive',
                        [
                            'Yes',
                            'No'
                        ]
                    ],
                    [
                        3,
                        'Foreign Characters',
                        [
                            'Include',
                            'Ignore'
                        ]
                    ]
                ]
            ],
            [
                'Atbash',
                'Atbash Description',
                [
                    [
                        0,
                        'Alphabet',
                        [
                            'Latin Alphabet',
                            'Hebrew Alphabet'
                        ]
                    ]
                ]
            ],
            [
                'Vigenère Cipher',
                'Vigenère Cipher Description',
                [
                    [
                        0,
                        'Variant',
                        [
                            'Standard',
                            'Beaufort Cypher',
                            'Varient Beaufort Cypher',
                            'Trithemius Cypher'
                        ]
                    ],
                    [
                        1,
                        'Alphabet',
                        [
                            'abcdefghijklmnopqrstuvwxyz'
                        ]
                    ],
                    [
                        2,
                        'Case Sensitive',
                        [
                            'Yes',
                            'No'
                        ]
                    ],
                    [
                        3,
                        'Foreign Characters',
                        [
                            'Include',
                            'Ignore'
                        ]
                    ]
                ]
            ],
            [
                'Enigma Machine',
                'Enigma Machin Description',
                // TODO: Figure out how to add other Enigma Machine
                []
            ]
        ]
    ],
    [
        'Encoding',
        'Encoding Description', [
            [
                'Base64',
                'Base64 Description',
                [
                    [
                        0,
                        'Variant',
                        [
                            'Standard \'bsae64\' ( RFC3548 , RFC4648 )',
                            'Standard \'base64url\' ( RFC4648 §5 )',
                            'Transfer Encoding for MIME ( RFC2045 )',
                            'Original \'base64\' ( RFC1421 )'
                        ]
                    ]
                ]
            ],
            [
                'Ascii85',
                'Ascii85 Description',
                [
                    [
                        0,
                        'Variant',
                        [
                            'Original',
                            'Z85 ( Zero MQ )'
                        ]
                    ]
                ]
            ],
            [
                'URL Encoding',
                'URL Encoding Description',
                null
            ],
            [
                'Unicode Code Points',
                'Unicode Code Points Description',
                [
                    [
                        0,
                        'Seperator',
                        [
                            ' '
                        ]
                    ],
                    [
                        1,
                        'Format',
                        [
                            'Unicode Notation',
                            'Decimal',
                            'Hexadecimal',
                            'Binary',
                            'Octal',
                            'NCR ( Decimal )',
                            'NCR ( Hexadecimal )'
                        ]
                    ]
                ]
            ],
            [
                'Integer',
                'Integer Description',
                [
                    [
                        2,
                        'Format',
                        [
                            'Binary',
                            'Octal',
                            'Decimal',
                            'Hexadecimal'
                        ]
                    ],
                    [
                        3,
                        'Type',
                        [
                            '8-Bit Unsigned Integer ( U8 )',
                            '8-Bit Signed Integer ( I8 )',
                            '16-Bit Unsigned Integer ( U16 )',
                            '16-Bit Signed Integer ( I16 )',
                            '32-Bit Unsigned Integer ( U32 )',
                            '32-Bit Signed Integer ( I32 )',
                        ]
                    ]
                ]
            ]
        ]
    ],
    [
        'Modern Cryptography',
        'Modern Cryptography Description', [
            [
                'Block Cipher',
                'Block Cipher Description',
                [
                    [
                        0,
                        'Algorithm',
                        [
                            'AES-128',
                            'AES-256'
                        ]
                    ],
                    [
                        1,
                        'Mode',
                        [
                            'CBC ( Cypher Block Chaining )',
                            'CTR ( Counter )'
                        ]
                    ],
                    [
                        2,
                        'Key',
                        [
                            '2b 7e 15 16 28 ae d2 a6 ab f7 15 88 09 cf 4f 3c'
                        ]
                    ],
                    [
                        3,
                        'IV',
                        [
                            '00 01 02 03 04 05 06 07 08 09 0a 0b 0c 0d 0e 0f'
                        ]
                    ]
                ]
            ],
            [
                'Hash Function',
                'Hash Function Description',
                [
                    [
                        0,
                        'Algorithm',
                        [
                            'MD5',
                            'SHA-1',
                            'SHA-256',
                            'SHA-384',
                            'SHA-512'
                        ]
                    ]
                ]
            ],
            [
                'HMAC',
                'HMAC Description',
                [
                    [
                        1,
                        'Key',
                        [
                            '63 72 79 70 74 69 69'
                        ]
                    ],
                    [
                        2,
                        'Algorithm',
                        [
                            'MD5',
                            'SHA-1',
                            'SHA-256',
                            'SHA-384',
                            'SHA-512'
                        ]
                    ]
                ]
            ]
        ]
    ]
];


/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CommonService = /** @class */ (function () {
    function CommonService() {
        this.githubProfilePage = 'https://github.com/pru-namikaze';
        this.githubRepositoryPage = 'https://github.com/pru-namikaze';
        this.githubIssuePage = 'https://github.com/pru-namikaze/Cyphr/issues';
    }
    CommonService.prototype.OpenWebPageInNewTab = function (link) {
        window.open(link, '_blank');
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/domain-data.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/domain-data.service.ts ***!
  \*************************************************/
/*! exports provided: DomainDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomainDataService", function() { return DomainDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _DomainDataDictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DomainDataDictionary */ "./src/app/services/DomainDataDictionary.ts");



var DomainDataService = /** @class */ (function () {
    function DomainDataService() {
        this.domainDataDictionary = _DomainDataDictionary__WEBPACK_IMPORTED_MODULE_2__["DomainDataDictionary"];
        this.encodeDecodeOptions = ['Encode', 'Decode'];
    }
    // Make it Level 2 Generic.
    DomainDataService.prototype.getValue = function (array, key) {
        for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
            var element = array_1[_i];
            if (element[0] === key) {
                return element;
            }
        }
        return null;
    };
    DomainDataService.prototype.getTypeArray = function () {
        var typeArray = [];
        for (var _i = 0, _a = this.domainDataDictionary; _i < _a.length; _i++) {
            var element = _a[_i];
            typeArray.push(element[0].toString());
        }
        return typeArray;
    };
    DomainDataService.prototype.getTypeDescripion = function (type) {
        var element = this.getValue(this.domainDataDictionary, type);
        return element[1];
    };
    DomainDataService.prototype.getTypeCypherArray = function (type) {
        var TypeCypherArray = [];
        var element = this.getValue(this.domainDataDictionary, type);
        for (var _i = 0, _a = element[2]; _i < _a.length; _i++) {
            var item = _a[_i];
            TypeCypherArray.push(item[0]);
        }
        return TypeCypherArray;
    };
    DomainDataService.prototype.getCypherNameDescription = function (cypherType, cypherName) {
        // tslint:disable-next-line: max-line-length
        var type = this.getValue(this.domainDataDictionary, cypherType);
        var cypher = this.getValue(type[2], cypherName);
        return cypher[1];
    };
    DomainDataService.prototype.getCypherOptions = function (cypherType, cypherName) {
        // tslint:disable-next-line: max-line-length
        var type = this.getValue(this.domainDataDictionary, cypherType);
        var cypher = this.getValue(type[2], cypherName);
        return cypher[2];
    };
    DomainDataService.prototype.getDefaultConfiguration = function (type, cypher) {
        var cypherOption = this.getCypherOptions(type, cypher);
        var defaultCypherOptions = [];
        if (cypherOption === null) {
            defaultCypherOptions = null;
        }
        else {
            for (var _i = 0, cypherOption_1 = cypherOption; _i < cypherOption_1.length; _i++) {
                var option = cypherOption_1[_i];
                defaultCypherOptions.push([option[0], option[1], option[2][0]]);
            }
        }
        return defaultCypherOptions;
    };
    DomainDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DomainDataService);
    return DomainDataService;
}());



/***/ }),

/***/ "./src/app/services/infrastructure-node-list.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/infrastructure-node-list.service.ts ***!
  \**************************************************************/
/*! exports provided: InfrastructureNodeListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfrastructureNodeListService", function() { return InfrastructureNodeListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _domain_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domain-data.service */ "./src/app/services/domain-data.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





var InfrastructureNodeListService = /** @class */ (function () {
    function InfrastructureNodeListService(domainData) {
        this.domainData = domainData;
        this.NodeList = [];
        this.NodeList.push([0, 'View', null, ['Text', domainData.getDefaultConfiguration('View', 'Text')], 'Input String', null]);
        // tslint:disable-next-line: max-line-length
        this.NodeList.push([1, 'Transform', domainData.encodeDecodeOptions[0], ['Text Transform', domainData.getDefaultConfiguration('Transform', 'Text Transform')], 'Input String', 'Output String']);
        this.NodeList.push([2, 'View', null, ['Text', domainData.getDefaultConfiguration('View', 'Text')], 'Input String', null]);
        this.selectedPlusIndex = null;
        this.showCypherMenu = false;
        this.pageYOffset = 0;
        this.modifyCurrentFlag = false;
        this.showBackToTopFlag = false;
    }
    InfrastructureNodeListService.prototype.getNodeList = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.NodeList);
    };
    InfrastructureNodeListService.prototype.AddNodeAtindex = function (newNode) {
        // tslint:disable-next-line: prefer-const
        for (var _i = 0, _a = this.NodeList; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node[0] >= newNode[0]) {
                node[0]++;
            }
        }
        this.NodeList.splice(newNode[0], 0, newNode);
    };
    InfrastructureNodeListService.prototype.RemoveNodeAtindex = function (index) {
        // tslint:disable-next-line: prefer-const
        for (var _i = 0, _a = this.NodeList; _i < _a.length; _i++) {
            var node = _a[_i];
            if (node[0] > index) {
                node[0]--;
            }
        }
        this.NodeList.splice(index, 1);
        console.log(this.NodeList);
    };
    InfrastructureNodeListService.prototype.WindowScrollTo = function (yOffset) {
        window.scrollTo(0, yOffset);
    };
    InfrastructureNodeListService.prototype.ShowCypherMenu = function (menuIndex, modifyCurrentFlag) {
        this.modifyCurrentFlag = Object(util__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(modifyCurrentFlag) ? this.modifyCurrentFlag : modifyCurrentFlag;
        this.selectedPlusIndex = Object(util__WEBPACK_IMPORTED_MODULE_4__["isUndefined"])(menuIndex) ? 0 : menuIndex;
        console.table(this.NodeList);
    };
    InfrastructureNodeListService.prototype.AddNodeToNodeList = function (type, cypher, id) {
        var newNodeId = Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(id) ? this.selectedPlusIndex : id;
        var newNode = [
            newNodeId,
            type,
            ((type === 'View') && (cypher === 'Text')) ? null : this.domainData.encodeDecodeOptions[0],
            [
                cypher,
                this.domainData.getDefaultConfiguration(type, cypher)
            ],
            'Input String',
            'Output String'
        ];
        this.AddNodeAtindex(newNode);
        if (this.modifyCurrentFlag) {
            this.RemoveNodeAtindex(newNodeId - 1);
            this.modifyCurrentFlag = false;
        }
    };
    InfrastructureNodeListService.prototype.selectOptionClick = function (id, cypherName) {
        this.AddNodeToNodeList(this.NodeList[id][1], cypherName, id);
        this.RemoveNodeAtindex(id + 1);
    };
    InfrastructureNodeListService.prototype.UpdateCypherOptionValueFromNodeList = function (id, filterOption) {
        var type = this.NodeList[id][1];
        var cypher = this.NodeList[id][2];
        var newNode = this.NodeList[id];
        if (!Object(util__WEBPACK_IMPORTED_MODULE_4__["isNull"])(this.NodeList[id][3][1])) {
            for (var _i = 0, _a = this.NodeList[id][3][1]; _i < _a.length; _i++) {
                var option = _a[_i];
                if (option[0] === filterOption) {
                    option[1] = document.getElementById((id + option[0]).toString()).value;
                }
            }
        }
        else {
            return null;
        }
        this.AddNodeAtindex(newNode);
        this.RemoveNodeAtindex(id + 1);
        console.log(this.NodeList);
    };
    InfrastructureNodeListService.prototype.selectencodeDecodeOptionClick = function (option, id) {
        this.NodeList[id][2] = option;
    };
    InfrastructureNodeListService.prototype.ShowBackToTop = function () {
        var scrollHeight = document.documentElement.scrollHeight;
        var clientHeight = document.documentElement.clientHeight;
        var btnBottomHeight = 5;
        if ((pageYOffset >= scrollHeight - 1.2 * clientHeight) && (pageYOffset <= scrollHeight - clientHeight)) {
            btnBottomHeight = ((5 * pageYOffset - 5 * scrollHeight + 6 * clientHeight) * 20 / clientHeight) + 5;
        }
        if (pageYOffset * 100 / document.documentElement.clientHeight > 200) {
            document.getElementById('back-to-top-btn').style.display = 'block';
            document.getElementById('back-to-top-btn').style.bottom = btnBottomHeight + 'vh';
            this.showBackToTopFlag = true;
        }
        else {
            document.getElementById('back-to-top-btn').style.display = 'none';
            this.showBackToTopFlag = false;
        }
    };
    InfrastructureNodeListService.prototype.ArrowToPlus = function (id, showFlag) {
        if (showFlag) {
            document.getElementById(id + '-node-list-conjuction').children[0].className = 'fas fa-plus';
        }
        else {
            document.getElementById(id + '-node-list-conjuction').children[0].className = 'fas fa-chevron-down';
        }
    };
    InfrastructureNodeListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
        //   type ListNode = [number, string, string, [string, any], string, string];
        //   [0]: id: number;
        //   [1]: templateName: string;
        //   [2]: encodeDecodeOption: string;
        //   [
        //      [3][0]: cypherName: string;
        //      [3][1]: cypherConfigrations: Array<[string, string]>;
        //   ]
        //   [4]: inputString: string;
        //   [5]: outputString: string;
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_domain_data_service__WEBPACK_IMPORTED_MODULE_3__["DomainDataService"]])
    ], InfrastructureNodeListService);
    return InfrastructureNodeListService;
}());



/***/ }),

/***/ "./src/app/templates/cypher-menu-template/cypher-menu-template.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/templates/cypher-menu-template/cypher-menu-template.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9jeXBoZXItbWVudS10ZW1wbGF0ZS9jeXBoZXItbWVudS10ZW1wbGF0ZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/cypher-menu-template/cypher-menu-template.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/templates/cypher-menu-template/cypher-menu-template.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade font-family-lucida-console-monaco-monospace\" id=\"cypher-menu\" tabindex=\"-1\">\r\n  <div class=\"modal-dialog modal-lg\">\r\n    <div class=\"modal-content p-5\">\r\n      <div class=\" container row modal-head\">\r\n        <h2 class=\"modal-title col-10\">Cypher Menu</h2>\r\n        <button class=\"btn btn-secondary shadow col-2 btn-cypher-menu-close max-button-height-3rem\" type=\"button\" data-dismiss=\"modal\">&nbsp;X&nbsp;</button>\r\n      </div>\r\n      <div class=\"modal-body padding-0 container row\" *ngFor=\"let type of domainDataService.getTypeArray()\">\r\n          <hr class=\"w-100\"/>\r\n          <button class=\"btn btn-secondary my-2\" type=\"button\" disabled>{{type}}</button>\r\n          <span class=\"w-100\"></span>\r\n          <button class=\"btn btn-secondary mr-1 mb-1\" *ngFor=\"let cypher of domainDataService.getTypeCypherArray(type)\" (click)=\"infrastructureNodeList.AddNodeToNodeList(type, cypher)\" data-dismiss=\"modal\">\r\n            {{cypher}}\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n        <button class=\"btn btn-secondary\" (click)=\"common.OpenWebPageInNewTab(common.githubIssuePage)\">Request more Cyphers</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/templates/cypher-menu-template/cypher-menu-template.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/templates/cypher-menu-template/cypher-menu-template.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CypherMenuTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CypherMenuTemplateComponent", function() { return CypherMenuTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/domain-data.service */ "./src/app/services/domain-data.service.ts");
/* harmony import */ var _services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infrastructure-node-list.service */ "./src/app/services/infrastructure-node-list.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");





var CypherMenuTemplateComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function CypherMenuTemplateComponent(domainDataService, infrastructureNodeList, common) {
        this.domainDataService = domainDataService;
        this.infrastructureNodeList = infrastructureNodeList;
        this.common = common;
    }
    CypherMenuTemplateComponent.prototype.ngOnInit = function () {
    };
    CypherMenuTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cypher-menu-template',
            template: __webpack_require__(/*! ./cypher-menu-template.component.html */ "./src/app/templates/cypher-menu-template/cypher-menu-template.component.html"),
            styles: [__webpack_require__(/*! ./cypher-menu-template.component.css */ "./src/app/templates/cypher-menu-template/cypher-menu-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__["DomainDataService"], _services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__["InfrastructureNodeListService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], CypherMenuTemplateComponent);
    return CypherMenuTemplateComponent;
}());



/***/ }),

/***/ "./src/app/templates/cypher-option-template/cypher-option-template.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/templates/cypher-option-template/cypher-option-template.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9jeXBoZXItb3B0aW9uLXRlbXBsYXRlL2N5cGhlci1vcHRpb24tdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/cypher-option-template/cypher-option-template.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/templates/cypher-option-template/cypher-option-template.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hr class=\"w-100\" />\r\n<div *ngIf=\"isView()\">\r\n    <textarea class=\"mx-1 w-100\" [(ngModel)]=\"infrastructureNodeList.NodeList[id][4]\"></textarea>\r\n  </div>\r\n<div class=\"row\" *ngIf=\"!isView()\">\r\n  <div class=\"col\" *ngFor=\"let options of cypherOptions\" [ngSwitch]=\"options[2].length.toString()\">\r\n    <span class=\"font-weight-bolder font-size-1_25em\">\r\n      {{options[1]}}\r\n    </span>\r\n    <input type=\"text\" id=\"{{ id + options[1] }}\" *ngSwitchCase=\"'1'\"\r\n      [ngModel]=\"getCypherOptionValueFromNodeList(infrastructureNodeList.NodeList[id][3][1], options[0])\"\r\n      (keypress)=\"infrastructureNodeList.UpdateCypherOptionValueFromNodeList(options[0])\" />\r\n\r\n    <div *ngSwitchCase=\"'2'\">\r\n      <!-- // TODO: Make the button Work. -->\r\n      <div class=\"input-group row max-width-5rem ml-1\" *ngIf=\"isInputRange(options[2])\">\r\n        <button class=\"input-group-prepend btn btn-secondary max-width-5rem btn-vertical-input-group-top-rounded\" type=\"button\">&nbsp; + &nbsp;</button>\r\n        <input type=\"text\" class=\"max-width-5rem\"\r\n          [ngModel]=\"getCypherOptionValueFromNodeList(infrastructureNodeList.NodeList[id][3][1], options[0])\" />\r\n        <button class=\" input-group-append btn btn-secondary max-width-5rem btn-vertical-input-group-bottom-rounded\" type=\"button\">&nbsp; - &nbsp;</button>\r\n      </div>\r\n\r\n      <div class=\"dropdown\" *ngIf=\"!isInputRange(options[2])\">\r\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n          {{getCypherOptionValueFromNodeList(infrastructureNodeList.NodeList[id][3][1], options[0])}}\r\n        </button>\r\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n          <button class=\"dropdown-item\" type=\"button\" *ngFor=\"let option of options[2]\">{{option}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"dropdown\" *ngSwitchDefault>\r\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n        {{getCypherOptionValueFromNodeList(infrastructureNodeList.NodeList[id][3][1], options[0])}}\r\n      </button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n        <button class=\"dropdown-item\" type=\"button\" *ngFor=\"let option of options[2]\">{{option}}</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr class=\"w-100 mx-3\" />\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/templates/cypher-option-template/cypher-option-template.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/templates/cypher-option-template/cypher-option-template.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CypherOptionTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CypherOptionTemplateComponent", function() { return CypherOptionTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/domain-data.service */ "./src/app/services/domain-data.service.ts");
/* harmony import */ var _services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infrastructure-node-list.service */ "./src/app/services/infrastructure-node-list.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_4__);





var CypherOptionTemplateComponent = /** @class */ (function () {
    function CypherOptionTemplateComponent(infrastructureNodeList, domainData) {
        this.infrastructureNodeList = infrastructureNodeList;
        this.domainData = domainData;
    }
    CypherOptionTemplateComponent.prototype.ngOnInit = function () {
        this.id = this.id[0][0];
        // tslint:disable-next-line: max-line-length
        console.table(this.infrastructureNodeList.NodeList);
        this.cypherOptions = this.domainData.getCypherOptions(this.infrastructureNodeList.NodeList[this.id][1], this.infrastructureNodeList.NodeList[this.id][3][0]);
        console.table([this.id, this.cypherOptions]);
    };
    CypherOptionTemplateComponent.prototype.isInputRange = function (optionArray) {
        if (!((isNaN(optionArray[0])) && (isNaN(optionArray[0])))) {
            return true;
        }
        return false;
    };
    CypherOptionTemplateComponent.prototype.getCypherOptionValueFromNodeList = function (NodeListOptionValueArray, filterOption) {
        for (var _i = 0, NodeListOptionValueArray_1 = NodeListOptionValueArray; _i < NodeListOptionValueArray_1.length; _i++) {
            var option = NodeListOptionValueArray_1[_i];
            if (option[0] === filterOption) {
                return option[2];
            }
        }
        return null;
    };
    CypherOptionTemplateComponent.prototype.isView = function () {
        if (Object(util__WEBPACK_IMPORTED_MODULE_4__["isNullOrUndefined"])(this.cypherOptions)) {
            return true;
        }
        return false;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CypherOptionTemplateComponent.prototype, "id", void 0);
    CypherOptionTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cypher-option',
            template: __webpack_require__(/*! ./cypher-option-template.component.html */ "./src/app/templates/cypher-option-template/cypher-option-template.component.html"),
            styles: [__webpack_require__(/*! ./cypher-option-template.component.css */ "./src/app/templates/cypher-option-template/cypher-option-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__["InfrastructureNodeListService"], _services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__["DomainDataService"]])
    ], CypherOptionTemplateComponent);
    return CypherOptionTemplateComponent;
}());



/***/ }),

/***/ "./src/app/templates/footer/footer.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/footer/footer.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"col-12 align-self-center no-gutters align-self-end container row bg-white font-family-lucida-console-monaco-monospace px-5 py-4\">\r\n  <h5 class=\"font-size-1_5em\">Cyphr:</h5>\r\n  <p class=\"w-100\">\r\n    It is a Web App made to offer modular endoding, decoding and conversion of text based message or string.<br />\r\n    All the operation are done within the browser without any server involvement.\r\n  </p>\r\n  <div class=\"w-100 col-xl-5 col-lg-6 col-md-9 cointainer row no-gutters\">\r\n    <b class=\"margin-top-0_7rem col-xl-2 col-lg-3 col-md-2\">Made by:</b>\r\n    <button class=\"btn btn-secondary col-xl-3 col-lg-4 col-md-3 m-1\" (click)=\"common.OpenWebPageInNewTab(common.githubIssuePage)\">Pru Namikaze</button>\r\n    <button class=\"btn btn-secondary col-xl-3 col-lg-4 col-md-4 m-1 p-2\" (click)=\"common.OpenWebPageInNewTab(common.githubIssuePage)\">Cyphr Github</button>\r\n  </div>\r\n  <br />\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/templates/footer/footer.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/footer/footer.component.ts ***!
  \******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(common) {
        this.common = common;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/templates/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/templates/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/templates/header/header.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/header/header.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/templates/header/header.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/header/header.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"vw-100 no-gutters\">\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <span class=\"navbar-brand font-family-lucida-console-monaco-monospace pl-5 ml-5 pt-2\">\n      <h1>Cyphr</h1>\n    </span>\n  </nav>\n</header>\n"

/***/ }),

/***/ "./src/app/templates/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/templates/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/templates/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/templates/main-component/main-component.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/templates/main-component/main-component.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9tYWluLWNvbXBvbmVudC9tYWluLWNvbXBvbmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/templates/main-component/main-component.component.html":
/*!************************************************************************!*\
  !*** ./src/app/templates/main-component/main-component.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cypher-menu-template></app-cypher-menu-template>\r\n\r\n<div class=\" container-fluid no-gutters padding-0 row \">\r\n  <button class=\"btn btn-secondary offset-6 my-4\" id=\"-1-node-list-conjuction\" type=\"button\" data-toggle=\"modal\" data-target=\"#cypher-menu\" (click)=\"infrastructureNodeList.ShowCypherMenu()\" (mouseover)=\"infrastructureNodeList.ArrowToPlus(-1, true)\" (mouseout)=\"infrastructureNodeList.ArrowToPlus(-1, false)\">\r\n    <span class=\"fas fa-chevron-down\"></span>\r\n  </button>\r\n\r\n  <app-node-template class=\"jumbotron-fluid\" *ngFor=\"let node of infrastructureNodeList.NodeList\" [id]=[node[0]]>\r\n  </app-node-template>\r\n\r\n  <button class=\"btn btn-secondary btn-feedback font-size-1_15em\" type=\"button\" (click)=\"common.OpenWebPageInNewTab(common.githubIssuePage)\">\r\n    <span class=\"fas fa-comment-dots\"></span>&nbsp;Feedback\r\n  </button>\r\n\r\n\r\n  <div class=\"back-to-top-btn\" id=\"back-to-top-btn\">\r\n    <button class=\"btn btn-secondary\" type=\"button\" (click)=\"infrastructureNodeList.WindowScrollTo(0)\">\r\n      Back <br />\r\n      to Top\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/templates/main-component/main-component.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/templates/main-component/main-component.component.ts ***!
  \**********************************************************************/
/*! exports provided: MainComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentComponent", function() { return MainComponentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/domain-data.service */ "./src/app/services/domain-data.service.ts");
/* harmony import */ var _services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infrastructure-node-list.service */ "./src/app/services/infrastructure-node-list.service.ts");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");





var MainComponentComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function MainComponentComponent(domainDataService, infrastructureNodeList, common) {
        this.domainDataService = domainDataService;
        this.infrastructureNodeList = infrastructureNodeList;
        this.common = common;
    }
    MainComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.addEventListener('scroll', function () {
            _this.infrastructureNodeList.ShowBackToTop();
        });
    };
    MainComponentComponent.prototype.getNodelist = function () {
        var _this = this;
        this.infrastructureNodeList.getNodeList().subscribe(function (NodeList) { return _this.NodeList = NodeList; });
    };
    MainComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-component',
            template: __webpack_require__(/*! ./main-component.component.html */ "./src/app/templates/main-component/main-component.component.html"),
            styles: [__webpack_require__(/*! ./main-component.component.css */ "./src/app/templates/main-component/main-component.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__["DomainDataService"], _services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__["InfrastructureNodeListService"], _services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], MainComponentComponent);
    return MainComponentComponent;
}());



/***/ }),

/***/ "./src/app/templates/main-template.component.css":
/*!*******************************************************!*\
  !*** ./src/app/templates/main-template.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9tYWluLXRlbXBsYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/templates/main-template.component.html":
/*!********************************************************!*\
  !*** ./src/app/templates/main-template.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-main-component></app-main-component>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/templates/main-template.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/main-template.component.ts ***!
  \******************************************************/
/*! exports provided: MainTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTemplateComponent", function() { return MainTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainTemplateComponent = /** @class */ (function () {
    function MainTemplateComponent() {
    }
    MainTemplateComponent.prototype.ngOnInit = function () {
    };
    MainTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main-template',
            template: __webpack_require__(/*! ./main-template.component.html */ "./src/app/templates/main-template.component.html"),
            styles: [__webpack_require__(/*! ./main-template.component.css */ "./src/app/templates/main-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainTemplateComponent);
    return MainTemplateComponent;
}());



/***/ }),

/***/ "./src/app/templates/node-template/node-template.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/templates/node-template/node-template.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9ub2RlLXRlbXBsYXRlL25vZGUtdGVtcGxhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/node-template/node-template.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/templates/node-template/node-template.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vw-100 container-fluid font-family-lucida-console-monaco-monospace bg-white border rounded shadow row col-10 col-md-8 col-lg-6 col-xl-6 offset-1 offset-md-2 offset-lg-3 offset-xl-3\">\r\n  <div class=\"w-100 my-4 mx-3 row\">\r\n    <!-- Dropdown for Encode/ Decode. -->\r\n    <div class=\"btn-group dropright col-sm-2 dropdown-encode-decode max-button-height-3rem\">\r\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\"\r\n        *ngIf=\"infrastructureNodeList.NodeList[id][2]\">\r\n        {{infrastructureNodeList.NodeList[id][2]}}\r\n      </button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\r\n        <button class=\"dropdown-item\" type=\"button\" *ngFor=\"let option of domainData.encodeDecodeOptions\"\r\n          (click)=\"infrastructureNodeList.selectencodeDecodeOptionClick(option, id)\">{{option}}</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cypher Type -->\r\n    <span class=\" font-family-lucida-console-monaco-monospace font-size-2em col-sm-8 text-center\">\r\n      {{infrastructureNodeList.NodeList[id][1]}}\r\n    </span>\r\n\r\n    <!-- Button for Removin the node from the Encoding Decoding Stream. -->\r\n    <button class=\"btn btn-secondary col-sm-1 btn-close max-button-height-3rem offset-1\" type=\"button\" (click)=\"infrastructureNodeList.RemoveNodeAtindex(id)\">\r\n      X\r\n    </button>\r\n\r\n    <!-- Cypher Name -->\r\n    <div class=\"dropright m-3\">\r\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" data-toggle=\"dropdown\">\r\n        {{infrastructureNodeList.NodeList[id][3][0]}}\r\n      </button>\r\n      <div class=\"dropdown-menu\">\r\n        <button class=\"dropdown-item\" type=\"button\"\r\n          (click)=\"infrastructureNodeList.ShowCypherMenu(infrastructureNodeList.NodeList[id][0]+1, true)\">\r\n          Other Cyphers</button>\r\n        <hr />\r\n        <button class=\"dropdown-item\" type=\"button\"\r\n          *ngFor=\"let option of domainData.getTypeCypherArray(infrastructureNodeList.NodeList[id][1])\"\r\n          (click)=\"infrastructureNodeList.selectOptionClick(id, option)\">{{option}}</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Cypher Options -->\r\n    <app-cypher-option class=\"container-fluid padding-0 mx-3\" [id]=[id]></app-cypher-option>\r\n\r\n    <div class=\"w-100 mx-3\" *ngIf=\"infrastructureNodeList.NodeList[id][2]\">\r\n      // TODO: Add time taken for performance measurement.\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<button class=\"btn btn-secondary offset-6 my-4\" id=\"{{ id + '-node-list-conjuction' }}\" type=\"button\"\r\n  data-toggle=\"modal\" data-target=\"#cypher-menu\"\r\n  (click)=\"infrastructureNodeList.ShowCypherMenu(infrastructureNodeList.NodeList[id][0]+1)\"\r\n  (mouseover)=\"infrastructureNodeList.ArrowToPlus(id, true)\" (mouseout)=\"infrastructureNodeList.ArrowToPlus(id, false)\">\r\n  <span class=\"fas fa-chevron-down\"></span>\r\n</button>\r\n"

/***/ }),

/***/ "./src/app/templates/node-template/node-template.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/templates/node-template/node-template.component.ts ***!
  \********************************************************************/
/*! exports provided: NodeTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeTemplateComponent", function() { return NodeTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/domain-data.service */ "./src/app/services/domain-data.service.ts");
/* harmony import */ var _services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/infrastructure-node-list.service */ "./src/app/services/infrastructure-node-list.service.ts");




var NodeTemplateComponent = /** @class */ (function () {
    // tslint:disable-next-line: max-line-length
    function NodeTemplateComponent(domainData, infrastructureNodeList) {
        this.domainData = domainData;
        this.infrastructureNodeList = infrastructureNodeList;
    }
    NodeTemplateComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], NodeTemplateComponent.prototype, "id", void 0);
    NodeTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-node-template',
            template: __webpack_require__(/*! ./node-template.component.html */ "./src/app/templates/node-template/node-template.component.html"),
            styles: [__webpack_require__(/*! ./node-template.component.css */ "./src/app/templates/node-template/node-template.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_domain_data_service__WEBPACK_IMPORTED_MODULE_2__["DomainDataService"], _services_infrastructure_node_list_service__WEBPACK_IMPORTED_MODULE_3__["InfrastructureNodeListService"]])
    ], NodeTemplateComponent);
    return NodeTemplateComponent;
}());



/***/ }),

/***/ "./src/app/templates/templates.module.ts":
/*!***********************************************!*\
  !*** ./src/app/templates/templates.module.ts ***!
  \***********************************************/
/*! exports provided: TemplatesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplatesModule", function() { return TemplatesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/templates/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/templates/footer/footer.component.ts");
/* harmony import */ var _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-component/main-component.component */ "./src/app/templates/main-component/main-component.component.ts");
/* harmony import */ var _node_template_node_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node-template/node-template.component */ "./src/app/templates/node-template/node-template.component.ts");
/* harmony import */ var _main_template_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-template.component */ "./src/app/templates/main-template.component.ts");
/* harmony import */ var _cypher_menu_template_cypher_menu_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cypher-menu-template/cypher-menu-template.component */ "./src/app/templates/cypher-menu-template/cypher-menu-template.component.ts");
/* harmony import */ var _cypher_option_template_cypher_option_template_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cypher-option-template/cypher-option-template.component */ "./src/app/templates/cypher-option-template/cypher-option-template.component.ts");











var TemplatesModule = /** @class */ (function () {
    function TemplatesModule() {
    }
    TemplatesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_template_component__WEBPACK_IMPORTED_MODULE_8__["MainTemplateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_6__["MainComponentComponent"],
                _node_template_node_template_component__WEBPACK_IMPORTED_MODULE_7__["NodeTemplateComponent"],
                _cypher_menu_template_cypher_menu_template_component__WEBPACK_IMPORTED_MODULE_9__["CypherMenuTemplateComponent"],
                _cypher_option_template_cypher_option_template_component__WEBPACK_IMPORTED_MODULE_10__["CypherOptionTemplateComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            exports: [
                _main_component_main_component_component__WEBPACK_IMPORTED_MODULE_6__["MainComponentComponent"]
            ]
        })
    ], TemplatesModule);
    return TemplatesModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pragoel\source\repos\Angular 7\Cyphr\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map