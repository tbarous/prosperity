import Drawer, {DrawerVariations} from "@components/drawer/Drawer";
import DefaultDrawer from './Drawer.story';

export default {
    title: 'Drawer',
    component: Drawer,
    argTypes: {
        variation: {
            options: [DrawerVariations.LIGHT, DrawerVariations.DARK],
            control: {type: 'radio'},
        },
    },

};

export {
    DefaultDrawer
}