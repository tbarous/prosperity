import React from 'react';
import styled from "styled-components";
import StorybookWrapper from "@stories/StorybookWrapper";
import List from '@components/list/List';
import ListItem from "@components/list/ListItem";

const StorybookWrapperStyled = styled(StorybookWrapper)`
  margin: 1rem;
`;

const ListItemStyled = styled(ListItem)`
  border-bottom: none;
`;

const DefaultList = (args: { clickable: boolean }) => (
    <StorybookWrapperStyled>
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
    </StorybookWrapperStyled>
);

DefaultList.args = {};

export default DefaultList;