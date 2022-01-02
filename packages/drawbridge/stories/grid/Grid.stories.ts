import Container from "@components/grid/Container";
import DefaultGrid from './DefaultGrid.story';

export default {
    title: 'Grid',
    component: Container,
    argTypes: {
        container: {
            options: ['default', 'fluid'],
            control: {type: 'radio'},
        },
    },
};

export {
    DefaultGrid
}