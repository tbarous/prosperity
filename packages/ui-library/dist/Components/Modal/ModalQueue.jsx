import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import { ThemeProvider } from "styled-components";
var ModalQueue = /** @class */ (function () {
    function ModalQueue() {
        this.lock = false;
        this.items = [];
    }
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
        ReactDOM.render(<ThemeProvider theme={{}}>
                <FirstComponent onClose={function () { return _this.close(); }}/>
            </ThemeProvider>, document.getElementById("modal"));
    };
    ModalQueue.prototype.close = function () {
        this.lock = false;
        this.items.shift();
        var element = document.getElementById("modal");
        if (element) {
            unmountComponentAtNode(element);
        }
        this.render();
    };
    return ModalQueue;
}());
var ModalQueueInstance = new ModalQueue();
function getModalQueueInstance() {
    return ModalQueueInstance;
}
export default getModalQueueInstance;
