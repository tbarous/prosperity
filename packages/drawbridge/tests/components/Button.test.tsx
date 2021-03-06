import React from "react";
import {getByText, render, screen} from "@testing-library/react";
import Button, {ButtonSizeEnum, ButtonVariationEnum} from "@components/button/Button";
import {ThemeProvider} from "styled-components";
import Light from "@theme/light/Theme";

test("Test Button", () => {
    render(<ThemeProvider theme={Light}>
        <Button
            onClick={() => {
            }}
            primary
        >
            Hello
        </Button>
    </ThemeProvider>);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument()
})