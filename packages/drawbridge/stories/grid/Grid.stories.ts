import DefaultGrid from './Grid.story';

export default {
    title: 'Grid',
    component: () => {},
    argTypes: {
        container: {
            options: ['default', 'fluid'],
            control: {type: 'radio'},
        },
    },
    parameters: {
        layout: 'padded',
    },
};

export {
    DefaultGrid
}