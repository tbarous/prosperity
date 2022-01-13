import React from "react";
import ListItemComponent from '@atoms/ListItem';

export default {
    title: 'Design System/Atoms/List Item',
    component: () => [],
    argTypes: {},
    parameters: {
        layout: 'padded',
    },
};

const ListItem = (args: any) => {
    return (
        <ListItemComponent>List Item</ListItemComponent>
    );
}

ListItem.args = {};

export {
    ListItem
}