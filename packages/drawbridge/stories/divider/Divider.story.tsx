import React from 'react';
import Divider from "@components/divider/Divider";
import Text from "@components/text/Text";
import styled from 'styled-components';
import ThemeInterface from "@theme/interfaces/ThemeInterface";
import {px} from "@utils/ThemeUtils";

const Wrapper = styled.div<{ vertical?: boolean }>`
  display: ${(p: { theme: ThemeInterface, vertical?: boolean }) => p.vertical ? p.theme.display.flex : p.theme.display.block};
  height: ${(p: { theme: ThemeInterface, vertical?: boolean }) => p.vertical ? px(p.theme.spacing.s10) : p.theme.spacing.auto};
`;

const DefaultDivider = (args: { spacing?: number, vertical?: boolean }) => (
    <Wrapper vertical={args.vertical}>
        <Text>Text</Text>

        <Divider spacing={args.spacing} vertical={args.vertical}/>

        <Text>Text</Text>
    </Wrapper>
);

DefaultDivider.args = {
    spacing: 10,
    vertical: false
};

export default DefaultDivider;