import React from 'react';
import styled from "styled-components";
import List from '@components/list/List';
import ListItem from "@components/list/ListItem";

const LastListItemStyled = styled(ListItem)`border-bottom: none;`;

const DefaultList = (args: {}) => {
    return (
        <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <LastListItemStyled>Item 4</LastListItemStyled>
        </List>
    );
}

DefaultList.args = {};

export default DefaultList;