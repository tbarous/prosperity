import React from "react";
import ReactDOM, {unmountComponentAtNode} from "react-dom";
import {ThemeProvider} from "styled-components";
import Basic from "../../Themes/Basic";

class ModalQueue {
    private readonly items: any[];
    private lock: boolean = false;

    constructor() {
        this.items = [];
    }

    add(component: { id: string, Component: any }) {
        const {id} = component;

        if (this.items.find((item) => id === item.id)) return;

        this.items.push(component);

        if (!this.lock) this.render();
    }

    render() {
        if (!this.items.length) return;

        this.lock = true;

        const FirstComponent = this.items[this.items.length - 1].Component;

        ReactDOM.render(
            <ThemeProvider theme={Basic}>
                <FirstComponent onClose={() => this.close()}/>
            </ThemeProvider>,
            document.getElementById("modal")
        );
    }

    close() {
        this.lock = false;

        this.items.shift();

        const element = document.getElementById("modal");

        if (element) {
            unmountComponentAtNode(element);
        }

        this.render();
    }
}

const ModalQueueInstance = new ModalQueue();

function getModalQueueInstance() {
    return ModalQueueInstance;
}

export default getModalQueueInstance;

