import React from "react";
import {getByText, render, screen} from "@testing-library/react";
import Button from "@components/button/Button";
import {ThemeProvider} from "styled-components";
import Light from "@theme/light/Theme";
import ButtonSizeEnum from "@components/button/enums/ButtonSizeEnum";
import ButtonVariationEnum from "@components/button/enums/ButtonVariationEnum";

test("Test Button", () => {
    render(<ThemeProvider theme={Light}>
        <Button
            onClick={() => {
            }}
            size={ButtonSizeEnum.LARGE}
            variation={ButtonVariationEnum.PRIMARY}
        >
            Hello
        </Button>
    </ThemeProvider>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument()
})