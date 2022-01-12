import DefaultGrid from './Grid.story';

export default {
    title: 'Design System/Molecules/Grid',
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