"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importStar(require("react-dom"));
var styled_components_1 = require("styled-components");
var Theme_1 = __importDefault(require("../theme/light/Theme"));
var ModalQueue = /** @class */ (function () {
    function ModalQueue() {
        this.lock = false;
        this.theme = Theme_1.default;
        this.items = [];
    }
    ModalQueue.prototype.setTheme = function (theme) {
        this.theme = theme;
    };
    ModalQueue.prototype.add = function (component) {
        var id = component.id;
        if (this.items.find(function (item) { return id === item.id; }))
            return;
        this.items.push(component);
        if (!this.lock)
            this.render();
    };
    ModalQueue.prototype.render = function () {
        var _this = this;
        if (!this.items.length)
            return;
        this.lock = true;
        var FirstComponent = this.items[this.items.length - 1].Component;
        react_dom_1.default.render(react_1.default.createElement(styled_components_1.ThemeProvider, { theme: this.theme },
            react_1.default.createElement(FirstComponent, { onClose: function () { return _this.close(); } })), document.getElementById("modal"));
    };
    ModalQueue.prototype.close = function () {
        this.lock = false;
        this.items.shift();
        var element = document.getElementById("modal");
        if (element) {
            (0, react_dom_1.unmountComponentAtNode)(element);
        }
        this.render();
    };
    return ModalQueue;
}());
var ModalQueueInstance = new ModalQueue();
function getModalQueueInstance() {
    return ModalQueueInstance;
}
exports.default = getModalQueueInstance;
