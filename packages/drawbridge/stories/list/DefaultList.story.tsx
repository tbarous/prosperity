import React from 'react';
import styled from "styled-components";
import List from '@components/list/List';
import ListItem from "@components/list/ListItem";

const ListItemStyled = styled(ListItem)`
  border-bottom: none;
`;

const DefaultList = (args: { clickable: boolean }) => (
    <List>
        <ListItem>
            Greek
        </ListItem>

        <ListItem>
            English
        </ListItem>

        <ListItem>
            English
        </ListItem>

        <ListItemStyled>
            English
        </ListItemStyled>
    </List>
);

DefaultList.args = {};

export default DefaultList;