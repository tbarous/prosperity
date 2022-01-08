// export const parameters = {
//     actions: {argTypesRegex: "^on[A-Z].*"},
//     controls: {
//         matchers: {
//             color: /(background|color)$/i,
//             date: /Date$/,
//         },
//     },
//     layout: 'fullscreen'
// }

import {ThemeProvider} from 'styled-components';
import {addDecorator} from '@storybook/react';
import {withThemes} from '@react-theming/storybook-addon';
import theme from '../src/theme/light/Theme';
import GlobalStyledUtils from "../src/utils/GlobalStyleUtils";

addDecorator(withThemes(ThemeProvider, [theme]));

const GlobalStorybookStyle = GlobalStyledUtils.extendGlobalStyle(css`#root {
  height: 100%;
}`);

export const decorators = [
    (Story) => (
        <>
            <GlobalStorybookStyle/>
            <ThemeProvider theme={theme}>
                <Story/>
            </ThemeProvider>
        </>
    ),
];