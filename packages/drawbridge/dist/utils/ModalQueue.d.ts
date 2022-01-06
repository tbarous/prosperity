import ThemeInterface from "../theme/interfaces/ThemeInterface";
declare class ModalQueue {
    private readonly items;
    private lock;
    private theme;
    constructor();
    setTheme(theme: ThemeInterface): void;
    add(component: {
        id: string;
        Component: any;
    }): void;
    render(): void;
    close(): void;
}
declare function getModalQueueInstance(): ModalQueue;
export default getModalQueueInstance;
