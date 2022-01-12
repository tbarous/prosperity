import React from 'react';
import styled from "styled-components";
import List from '@molecules/list/List';

const LastListItemStyled = styled(ListItem)`border-bottom: none;`;

const DefaultList = (args: {}) => {
    return (
        <List items={["Item 1", "Item 2"]}/>
    );
}

DefaultList.args = {};

export default DefaultList;