import React from "react";
import {getByText, render, screen} from "@testing-library/react";
import Button, {Size, Variation} from "./../../src/Components/Button/Button";
import {ThemeProvider} from "styled-components";
import Basic from "../Theme/index";

test("Test Button", () => {
    render(<ThemeProvider theme={Basic}>
        <Button onClick={() => {
        }} size={Size.BIG} variation={Variation.PRIMARY}>Hello</Button>
    </ThemeProvider>);

    const button = screen.getByTestId("button");

    expect(button).toBeInTheDocument()

})