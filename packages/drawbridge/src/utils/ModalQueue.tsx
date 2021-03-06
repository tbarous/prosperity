import React from "react";
import ReactDOM, {unmountComponentAtNode} from "react-dom";
import {ThemeProvider} from "styled-components";
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import Light from "@theme/light/Theme";

class ModalQueue {
    private readonly items: any[];
    private lock: boolean = false;
    private theme: ThemeInterface = Light;

    constructor() {
        this.items = [];
    }

    setTheme(theme: ThemeInterface) {
        this.theme = theme;
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
            <ThemeProvider theme={this.theme}>
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

