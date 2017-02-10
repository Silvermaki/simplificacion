webpackJsonpac__name_([10],{

/***/ 1315:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var http_1 = __webpack_require__(154);
var Observable_1 = __webpack_require__(1);
__webpack_require__(341);
__webpack_require__(340);
__webpack_require__(343);
__webpack_require__(342);
__webpack_require__(118);
__webpack_require__(715);
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.baseUrl = "http://Makoto:8000";
    }
    AuthService.prototype.registerUser = function (user) {
        var bodyString = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/register", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    AuthService.prototype.login = function (login_details) {
        var bodyString = JSON.stringify(login_details);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.baseUrl + "/login", bodyString, options).map(this.extractData).catch(this.handleError);
    };
    AuthService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    AuthService.prototype.handleError = function (error) {
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    return AuthService;
}());
AuthService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
], AuthService);
exports.AuthService = AuthService;
var _a;


/***/ }),

/***/ 1349:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var BootstrapValidatorDirective = (function () {
    function BootstrapValidatorDirective(el) {
        var _this = this;
        this.el = el;
        this.s = function () {
            var bootstrapValidator = _this.$form.data('bootstrapValidator');
            bootstrapValidator.validate();
            if (bootstrapValidator.isValid())
                _this.$form.submit();
            else
                return;
        };
    }
    BootstrapValidatorDirective.prototype.ngOnInit = function () {
        var _this = this;
        __webpack_require__.e/* import() */(14).then(__webpack_require__.bind(null, 1369)).then(function () {
            _this.attach();
        });
    };
    BootstrapValidatorDirective.prototype.attach = function () {
        this.$form = $(this.el.nativeElement);
        this.$form.bootstrapValidator(this.saBootstrapValidator || {});
        this.$form.submit(function (ev) { ev.preventDefault(); });
    };
    return BootstrapValidatorDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], BootstrapValidatorDirective.prototype, "saBootstrapValidator", void 0);
__decorate([
    core_1.HostListener('submit'),
    __metadata("design:type", Object)
], BootstrapValidatorDirective.prototype, "s", void 0);
BootstrapValidatorDirective = __decorate([
    core_1.Directive({
        selector: '[saBootstrapValidator]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], BootstrapValidatorDirective);
exports.BootstrapValidatorDirective = BootstrapValidatorDirective;
var _a;


/***/ }),

/***/ 1350:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var ui_validate_directive_1 = __webpack_require__(1351);
var bootstrap_validator_directive_1 = __webpack_require__(1349);
var SmartadminValidationModule = (function () {
    function SmartadminValidationModule() {
    }
    return SmartadminValidationModule;
}());
SmartadminValidationModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            ui_validate_directive_1.UiValidateDirective,
            bootstrap_validator_directive_1.BootstrapValidatorDirective
        ],
        exports: [
            ui_validate_directive_1.UiValidateDirective,
            bootstrap_validator_directive_1.BootstrapValidatorDirective
        ]
    }),
    __metadata("design:paramtypes", [])
], SmartadminValidationModule);
exports.SmartadminValidationModule = SmartadminValidationModule;


/***/ }),

/***/ 1351:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var UiValidateDirective = (function () {
    function UiValidateDirective(el) {
        var _this = this;
        this.el = el;
        __webpack_require__.e/* import() */(15).then(__webpack_require__.bind(null, 1368)).then(function () {
            _this.attach();
        });
    }
    UiValidateDirective.prototype.attach = function () {
        var $form = $(this.el.nativeElement);
        var validateCommonOptions = {
            rules: {},
            messages: {},
            errorElement: 'em',
            errorClass: 'invalid',
            highlight: function (element, errorClass, validClass) {
                $(element).addClass(errorClass).removeClass(validClass);
                $(element).parent().addClass('state-error').removeClass('state-success');
            },
            unhighlight: function (element, errorClass, validClass) {
                $(element).removeClass(errorClass).addClass(validClass);
                $(element).parent().removeClass('state-error').addClass('state-success');
            },
            errorPlacement: function (error, element) {
                if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                }
                else {
                    error.insertAfter(element);
                }
            }
        };
        $form.find('[data-smart-validate-input], [smart-validate-input]').each(function () {
            var $input = $(this), fieldName = $input.attr('name');
            validateCommonOptions.rules[fieldName] = {};
            if ($input.data('required') != undefined) {
                validateCommonOptions.rules[fieldName].required = true;
            }
            if ($input.data('email') != undefined) {
                validateCommonOptions.rules[fieldName].email = true;
            }
            if ($input.data('maxlength') != undefined) {
                validateCommonOptions.rules[fieldName].maxlength = $input.data('maxlength');
            }
            if ($input.data('minlength') != undefined) {
                validateCommonOptions.rules[fieldName].minlength = $input.data('minlength');
            }
            if ($input.data('message')) {
                validateCommonOptions.messages[fieldName] = $input.data('message');
            }
            else {
                Object.keys($input.data()).forEach(function (key) {
                    if (key.search(/message/) == 0) {
                        if (!validateCommonOptions.messages[fieldName])
                            validateCommonOptions.messages[fieldName] = {};
                        var messageKey = key.toLowerCase().replace(/^message/, '');
                        validateCommonOptions.messages[fieldName][messageKey] = $input.data(key);
                    }
                });
            }
        });
        $form.validate($.extend(validateCommonOptions, this.saUiValidate));
    };
    return UiValidateDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], UiValidateDirective.prototype, "saUiValidate", void 0);
UiValidateDirective = __decorate([
    core_1.Directive({
        selector: '[saUiValidate]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object])
], UiValidateDirective);
exports.UiValidateDirective = UiValidateDirective;
var _a;


/***/ }),

/***/ 1356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(36);
var auth_service_1 = __webpack_require__(1315);
var RegisterComponent = (function () {
    function RegisterComponent(router, AuthenticationService) {
        this.router = router;
        this.AuthenticationService = AuthenticationService;
        this.register_validations = {
            rules: {
                username: {
                    required: true,
                    minlength: 4,
                    maxlength: 20
                },
                email: {
                    required: true,
                    email: true,
                    maxlength: 50
                },
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 15
                },
                passwordConfirm: {
                    required: true,
                    equalTo: '#password'
                },
                firstNames: {
                    required: true,
                    maxlength: 50
                },
                lastNames: {
                    required: true,
                    maxlength: 50
                },
                gender: {
                    required: true,
                }
            },
            // Messages for form validation
            messages: {
                username: {
                    required: 'Debe de ingresar un nombre de usuario',
                    minlength: 'El nombre de usuario debe de tener entre 4 y 20 caracteres',
                    maxlength: 'El nombre de usuario debe de tener entre 4 y 20 caracteres'
                },
                email: {
                    required: 'Debe de ingresar su correo electrónico',
                    email: 'El formato de correo electrónico es inválido',
                    maxlength: 'El correo no puede ser mayor a 50 caracteres'
                },
                password: {
                    required: 'Debe de ingresar una contraseña',
                    minlength: 'La contraseña debe de tener entre 8 y 15 caracteres',
                    maxlength: 'La contraseña debe de tener entre 8 y 15 caracteres'
                },
                passwordConfirm: {
                    required: 'Debe de verificar su contraseña',
                    equalTo: 'Las contraseñas no coinciden'
                },
                firstNames: {
                    required: 'Debe de ingresar su nombre',
                    maxlength: 'El nombre no puede ser mayor a 50 caracteres'
                },
                lastNames: {
                    required: 'Debe de ingresar su apellido',
                    maxlength: 'El apellido no puede ser mayor a 50 caracteres'
                },
                gender: {
                    required: 'Debe de seleccionar su género',
                }
            }
        };
        this.user = {
            username: "",
            password: "",
            email: "",
            first_name: "",
            last_name: "",
            gender: "0"
        };
        this.pwConfirm = "";
        this.agreeTerms = false;
        this.load = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerUser = function () {
        var _this = this;
        if (this.disableRegister() == false) {
            this.AuthenticationService.registerUser(this.user).subscribe(function (data) { return _this.load = data; }, function (err) { return console.log(err); });
        }
    };
    RegisterComponent.prototype.disableRegister = function () {
        if (this.user.username.length < 4 || this.user.username.length > 20) {
            return true;
        }
        if (this.user.email.length < 1 || this.user.email.length > 50 || !(this.user.email.indexOf("@") >= 0) || this.user.email.indexOf("@") === this.user.email.length - 1) {
            return true;
        }
        if (this.user.password.length < 8 || this.user.password.length > 15 || this.user.password != this.pwConfirm) {
            return true;
        }
        if (this.user.last_name.length < 1 || this.user.last_name.length > 50) {
            return true;
        }
        if (this.user.first_name.length < 1 || this.user.first_name.length > 50) {
            return true;
        }
        if (this.user.gender === "0") {
            return true;
        }
        return false;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'app-register',
        template: __webpack_require__(1435),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof router_1.Router !== "undefined" && router_1.Router) === "function" && _a || Object, typeof (_b = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" && _b || Object])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
var _a, _b;


/***/ }),

/***/ 1375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(36);
var register_component_1 = __webpack_require__(1356);
var routes = [{
        path: '',
        component: register_component_1.RegisterComponent
    }];
var RegisterRoutingModule = (function () {
    function RegisterRoutingModule() {
    }
    return RegisterRoutingModule;
}());
RegisterRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forChild(routes)],
        exports: [router_1.RouterModule],
        providers: []
    }),
    __metadata("design:paramtypes", [])
], RegisterRoutingModule);
exports.RegisterRoutingModule = RegisterRoutingModule;


/***/ }),

/***/ 1376:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var core_1 = __webpack_require__(0);
var common_1 = __webpack_require__(9);
var forms_1 = __webpack_require__(23);
var register_routing_module_1 = __webpack_require__(1375);
var register_component_1 = __webpack_require__(1356);
var auth_service_1 = __webpack_require__(1315);
var smartadmin_validation_module_1 = __webpack_require__(1350);
var RegisterModule = (function () {
    function RegisterModule() {
    }
    return RegisterModule;
}());
RegisterModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            forms_1.FormsModule,
            register_routing_module_1.RegisterRoutingModule,
            smartadmin_validation_module_1.SmartadminValidationModule
        ],
        declarations: [register_component_1.RegisterComponent],
        providers: [auth_service_1.AuthService]
    }),
    __metadata("design:paramtypes", [])
], RegisterModule);
exports.RegisterModule = RegisterModule;


/***/ }),

/***/ 1435:
/***/ (function(module, exports) {

module.exports = "<header id=\"header\" class=\"animated fadeInDown\">\n\n  <div id=\"logo-group\">\n    <span id=\"logo\"> <img src=\"assets/img/logo.png\" alt=\"SmartAdmin\"> </span>\n  </div>\n\n  <span id=\"extr-page-header-space\">\n        <span class=\"hidden-mobile hiddex-xs\">¿Ya estás registrado?</span> <a routerLink=\"/login\" class=\"btn btn-primary\">Iniciar Sesión</a> </span>\n\n</header>\n<div id=\"main\" role=\"main\" class=\"animated fadeInDown\">\n\n  <!-- MAIN CONTENT -->\n  <div id=\"content\" class=\"container\">\n\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-7 col-lg-7 hidden-xs hidden-sm\">\n        <h1 class=\"login-header-big\"><span class=\"custom-green\">MiEmpresa</span><span class =\"custom-blue\">EnLínea</span></h1>\n        <div class=\"hero\">\n          <div class=\"pull-left login-desc-box-l\">\n            <h4 class=\"paragraph-header\">Este sitio te permite crear y administrar tu empresa en línea.</h4>\n            <div class=\"login-app-icons\">\n              <a routerLink=\"/login\" class=\"btn btn-primary btn-sm\">Iniciar Sesión</a>\n              <a href=\"https://honduras.eregulations.org/\" class=\"btn btn-primary btn-sm\">Ir al sitio de EmprendeGuía</a>\n            </div>\n          </div>\n\n          <img src=\"assets/img/demo/iphoneview.png\" alt=\"\" class=\"pull-right display-image\" style=\"width:210px\">\n\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n           <h5 class=\"about-heading\">Acerca de MiEmpresaEnLínea</h5>\n\n            <p>\n              A efecto de facilitar la formalización de las actividades mercantiles por parte de quienes las desempeñan y fomentar el desarrollo de la iniciativa empresarial, se implementó una Plataforma de Solicitudes que permite el registro, constitución y gestión de Sociedades Mercantiles.\n            </p>\n          </div>\n          <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-6\">\n            <h5 class=\"about-heading\">Contáctanos</h5>\n\n            <p>\n              Contacto\n            </p>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-xs-12 col-sm-12 col-md-5 col-lg-5\">\n        <div class=\"well no-padding\">\n\n          <form #registerForm id=\"smart-form-register\" class=\"smart-form client-form\" [saUiValidate]=\"register_validations\" novalidate=\"novalidate\" (ngSubmit)=\"registerUser()\">\n            <header>\n              Regístrate en MiEmpresaEnLínea\n            </header>\n\n            <fieldset>\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-user\"></i>\n                  <input type=\"text\" name=\"username\" placeholder=\"Usuario\" [(ngModel)]=\"user.username\" required>\n                  <b class=\"tooltip tooltip-bottom-right\">Utilizado como tu nombre dentro del portal de solicitudes</b> </label>\n              </section>\n\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-envelope\"></i>\n                  <input type=\"email\" name=\"email\" placeholder=\"Correo Electrónico\" [(ngModel)]=\"user.email\" required>\n                  <b class=\"tooltip tooltip-bottom-right\">Utilizado para conectarte y gestionar tu cuenta de usuario</b> </label>\n              </section>\n\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n                  <input type=\"password\" name=\"password\" placeholder=\"Contraseña\" id=\"password\" [(ngModel)]=\"user.password\" required>\n                  <b class=\"tooltip tooltip-bottom-right\">Recuerda proporcionar una contraseña segura</b> </label>\n              </section>\n\n              <section>\n                <label class=\"input\"> <i class=\"icon-append fa fa-lock\"></i>\n                  <input type=\"password\" name=\"passwordConfirm\" placeholder=\"Confirmar Contraseña\" required [(ngModel)]=\"pwConfirm\">\n                  <b class=\"tooltip tooltip-bottom-right\">Volver a ingresar tu contraseña</b> </label>\n              </section>\n            </fieldset>\n\n            <fieldset>\n              <div class=\"row\">\n                <section class=\"col col-6\">\n                  <label class=\"input\">\n                    <input type=\"text\" name=\"firstNames\" placeholder=\"Nombre\" [(ngModel)]=\"user.first_name\" required>\n                  </label>\n                </section>\n                <section class=\"col col-6\">\n                  <label class=\"input\">\n                    <input type=\"text\" name=\"lastNames\" placeholder=\"Apellido\" [(ngModel)]=\"user.last_name\" required>\n                  </label>\n                </section>\n              </div>\n\n              <div class=\"row\">\n                <section class=\"col col-6\">\n                  <label class=\"select\">\n                    <select name=\"gender\" [(ngModel)]=\"user.gender\" required>\n                      <option value=\"0\" selected disabled>Género</option>\n                      <option value=\"Masculino\">Masculino</option>\n                      <option value=\"Femenino\">Femenino</option>\n                    </select> </label>\n                </section>\n              </div>\n\n              <section>\n                <label class=\"checkbox\">\n                  <input type=\"checkbox\" name=\"terms\" id=\"terms\" [(ngModel)]=\"agreeTerms\">\n                  <i></i>Acepto los <a href=\"#\" data-toggle=\"modal\" data-target=\"#myModal\">Términos y Condiciones</a> de MiEmpresaEnLínea.</label>\n              </section>\n            </fieldset>\n            <footer>\n            <!--{{load | json}}-->\n              <button type=\"submit\"  class=\"btn btn-primary\" [disabled] = \"!agreeTerms\">\n                Registrarse\n              </button>\n            </footer>\n          </form>\n\n        </div>\n        <h5 class=\"text-center\">- Visítanos en -</h5>\n        <ul class=\"list-inline text-center\">\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-primary btn-circle\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-info btn-circle\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li>\n            <a (click)=\"(null)\" class=\"btn btn-warning btn-circle\"><i class=\"fa fa-linkedin\"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          &times;\n        </button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Términos y Condiciones</h4>\n      </div>\n      <div class=\"modal-body custom-scroll terms-body\">\n\n        <div id=\"left\">\n\n\n\n          <h1>TÉRMINOS Y CONDICIONES DE MIEMPRESAENLÍNEA</h1>\n\n\n\n          <h2>Introduction</h2>\n\n          <p>These terms and conditions govern your use of this website; by using this website, you accept these terms and conditions in full.   If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.</p>\n\n          <p>[You must be at least [18] years of age to use this website.  By using this website [and by agreeing to these terms and conditions] you warrant and represent that you are at least [18] years of age.]</p>\n\n\n          <h2>License to use website</h2>\n          <p>Unless otherwise stated, [NAME] and/or its licensors own the intellectual property rights in the website and material on the website.  Subject to the license below, all these intellectual property rights are reserved.</p>\n\n          <p>You may view, download for caching purposes only, and print pages [or [OTHER CONTENT]] from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.</p>\n\n          <p>You must not:</p>\n          <ul>\n            <li>republish material from this website (including republication on another website);</li>\n            <li>sell, rent or sub-license material from the website;</li>\n            <li>show any material from the website in public;</li>\n            <li>reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;]</li>\n            <li>[edit or otherwise modify any material on the website; or]</li>\n            <li>[redistribute material from this website [except for content specifically and expressly made available for redistribution].]</li>\n          </ul>\n          <p>[Where content is specifically made available for redistribution, it may only be redistributed [within your organisation].]</p>\n\n          <h2>Acceptable use</h2>\n\n          <p>You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.</p>\n\n          <p>You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.</p>\n\n          <p>You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without [NAME'S] express written consent.</p>\n\n          <p>[You must not use this website to transmit or send unsolicited commercial communications.]</p>\n\n          <p>[You must not use this website for any purposes related to marketing without [NAME'S] express written consent.]</p>\n\n          <h2>[Restricted access</h2>\n\n          <p>[Access to certain areas of this website is restricted.]  [NAME] reserves the right to restrict access to [other] areas of this website, or indeed this entire website, at [NAME'S] discretion.</p>\n\n          <p>If [NAME] provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.</p>\n\n          <p>[[NAME] may disable your user ID and password in [NAME'S] sole discretion without notice or explanation.]</p>\n\n          <h2>[User content</h2>\n\n          <p>In these terms and conditions, “your user content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.</p>\n\n          <p>You grant to [NAME] a worldwide, irrevocable, non-exclusive, royalty-free license to use, reproduce, adapt, publish, translate and distribute your user content in any existing or future media.  You also grant to [NAME] the right to sub-license these rights, and the right to bring an action for infringement of these rights.</p>\n\n          <p>Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or [NAME] or a third party (in each case under any applicable law).</p>\n\n          <p>You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.</p>\n\n          <p>[NAME] reserves the right to edit or remove any material submitted to this website, or stored on [NAME'S] servers, or hosted or published upon this website.</p>\n\n          <p>[Notwithstanding [NAME'S] rights under these terms and conditions in relation to user content, [NAME] does not undertake to monitor the submission of such content to, or the publication of such content on, this website.]</p>\n\n          <h2>No warranties</h2>\n\n          <p>This website is provided “as is” without any representations or warranties, express or implied.  [NAME] makes no representations or warranties in relation to this website or the information and materials provided on this website.</p>\n\n          <p>Without prejudice to the generality of the foregoing paragraph, [NAME] does not warrant that:</p>\n          <ul>\n            <li>this website will be constantly available, or available at all; or</li>\n            <li>the information on this website is complete, true, accurate or non-misleading.</li>\n          </ul>\n          <p>Nothing on this website constitutes, or is meant to constitute, advice of any kind.  [If you require advice in relation to any [legal, financial or medical] matter you should consult an appropriate professional.]</p>\n\n          <h2>Limitations of liability</h2>\n\n          <p>[NAME] will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:</p>\n          <ul>\n            <li>[to the extent that the website is provided free-of-charge, for any direct loss;]</li>\n            <li>for any indirect, special or consequential loss; or</li>\n            <li>for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.</li>\n          </ul>\n          <p>These limitations of liability apply even if [NAME] has been expressly advised of the potential loss.</p>\n\n          <h2>Exceptions</h2>\n\n          <p>Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit [NAME'S] liability in respect of any:</p>\n          <ul>\n            <li>death or personal injury caused by [NAME'S] negligence;</li>\n            <li>fraud or fraudulent misrepresentation on the part of [NAME]; or</li>\n            <li>matter which it would be illegal or unlawful for [NAME] to exclude or limit, or to attempt or purport to exclude or limit, its liability.</li>\n          </ul>\n          <h2>Reasonableness</h2>\n\n          <p>By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable.</p>\n\n          <p>If you do not think they are reasonable, you must not use this website.</p>\n\n          <h2>Other parties</h2>\n\n          <p>[You accept that, as a limited liability entity, [NAME] has an interest in limiting the personal liability of its officers and employees.  You agree that you will not bring any claim personally against [NAME'S] officers or employees in respect of any losses you suffer in connection with the website.]</p>\n\n          <p>[Without prejudice to the foregoing paragraph,] you agree that the limitations of warranties and liability set out in this website disclaimer will protect [NAME'S] officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as [NAME].</p>\n\n          <h2>Unenforceable provisions</h2>\n\n          <p>If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.</p>\n\n          <h2>Indemnity</h2>\n\n          <p>You hereby indemnify [NAME] and undertake to keep [NAME] indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by [NAME] to a third party in settlement of a claim or dispute on the advice of [NAME'S] legal advisers) incurred or suffered by [NAME] arising out of any breach by you of any provision of these terms and conditions[, or arising out of any claim that you have breached any provision of these terms and conditions].</p>\n\n          <h2>Breaches of these terms and conditions</h2>\n\n          <p>Without prejudice to [NAME'S] other rights under these terms and conditions, if you breach these terms and conditions in any way, [NAME] may take such action as [NAME] deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.</p>\n\n          <h2>Variation</h2>\n\n          <p>[NAME] may revise these terms and conditions from time-to-time.  Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website.  Please check this page regularly to ensure you are familiar with the current version.</p>\n\n          <h2>Assignment</h2>\n\n          <p>[NAME] may transfer, sub-contract or otherwise deal with [NAME'S] rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.</p>\n\n          <p>You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.</p>\n\n          <h2>Severability</h2>\n\n          <p>If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.  If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.</p>\n\n          <h2>Entire agreement</h2>\n\n          <p>These terms and conditions [, together with [DOCUMENTS],] constitute the entire agreement between you and [NAME] in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.</p>\n\n          <h2>Law and jurisdiction</h2>\n\n          <p>These terms and conditions will be governed by and construed in accordance with [GOVERNING LAW], and any disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts of [JURISDICTION].</p>\n\n          <h2>About these website terms and conditions</h2><p>We created these website terms and conditions with the help of a free website terms and conditions form developed by Contractology and available at <a href=\"http://www.SmartAdmin.com\">www.SmartAdmin.com</a>.\n          Contractology supply a wide variety of commercial legal documents, such as <a href=\"#\">template data protection statements</a>.\n        </p>\n          <h2>[Registrations and authorisations</h2>\n\n          <p>[[NAME] is registered with [TRADE REGISTER].  You can find the online version of the register at [URL].  [NAME'S] registration number is [NUMBER].]</p>\n\n          <p>[[NAME] is subject to [AUTHORISATION SCHEME], which is supervised by [SUPERVISORY AUTHORITY].]</p>\n\n          <p>[[NAME] is registered with [PROFESSIONAL BODY].  [NAME'S] professional title is [TITLE] and it has been granted in [JURISDICTION].  [NAME] is subject to the [RULES] which can be found at [URL].]</p>\n\n          <p>[[NAME] subscribes to the following code[s] of conduct: [CODE(S) OF CONDUCT].  [These codes/this code] can be consulted electronically at [URL(S)].</p>\n\n          <p>[[NAME'S] [TAX] number is [NUMBER].]]</p>\n\n          <h2>[NAME'S] details</h2>\n\n          <p>The full name of [NAME] is [FULL NAME].</p>\n\n          <p>[[NAME] is registered in [JURISDICTION] under registration number [NUMBER].]</p>\n\n          <p>[NAME'S] [registered] address is [ADDRESS].</p>\n\n          <p>You can contact [NAME] by email to [EMAIL].</p>\n\n\n\n        </div>\n\n        <br><br>\n\n        <p><strong>By using this  WEBSITE TERMS AND CONDITIONS template document, you agree to the\n          <a href=\"#\">terms and conditions</a> set out on\n          <a href=\"#\">SmartAdmin.com</a>.  You must retain the credit\n          set out in the section headed \"ABOUT THESE WEBSITE TERMS AND CONDITIONS\".  Subject to the licensing restrictions, you should\n          edit the document, adapting it to the requirements of your jurisdiction, your business and your\n          website.  If you are not a lawyer, we recommend that you take professional legal advice in relation to the editing and\n          use of the template.</strong></p>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">\n          <i class=\"fa fa-check\"></i> Regresar\n        </button>\n\n        <button type=\"button\" class=\"btn btn-danger pull-left\" id=\"print\">\n          <i class=\"fa fa-print\"></i> Imprimir\n        </button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ })

});
//# sourceMappingURL=10.map