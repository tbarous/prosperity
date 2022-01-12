import React, {FunctionComponent, ReactElement} from "react";
import {BasicComponentProps} from "@typings";
import AppStyled from "./styled/AppStyled";

export interface AppProps extends BasicComponentProps {}

const App: FunctionComponent<AppProps> = (props: AppProps): ReactElement => {
    const {children, className} = props;

    return (
        <AppStyled className={className}>
            {children}
        </AppStyled>
    )
}

export default App;