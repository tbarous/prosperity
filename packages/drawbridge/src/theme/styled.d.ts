import {} from 'styled-components';

import {ThemeType} from './light/Theme';

declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType {}
}