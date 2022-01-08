import Drawer, {DrawerVariation} from "@components/drawer/Drawer";
import DefaultDrawer from './Drawer.story';

export default {
    title: 'Drawer',
    component: Drawer,
    argTypes: {
        variation: {
            options: [DrawerVariation.LIGHT, DrawerVariation.DARK],
            control: {type: 'radio'},
        },
    },

};

export {
    DefaultDrawer
}