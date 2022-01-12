import Button, {ButtonSizes, ButtonVariations} from "@atoms/button/Button";
import DefaultButton from "@stories/atoms/button/Button.story";
import styled from "styled-components";

export default {
    title: 'Design System/Atoms/Button',
    component: () => {},
    argTypes: {
        variation: {
            options: [ButtonVariations.PRIMARY, ButtonVariations.SECONDARY],
            control: {type: 'radio'},
        },
        size: {
            options: [ButtonSizes.SMALL, ButtonSizes.MEDIUM, ButtonSizes.LARGE],
            control: {type: 'radio'},
        },
    },
    parameters: {
        layout: 'padded',
    },
};

const Wrapper = styled.div`width: 300px;`;

const Primary = (args: { variation?: ButtonVariations, size?: ButtonSizes, children?: string, icon?: boolean }) => {
    const {variation, size, children, icon} = args;

    return (
        <Wrapper>
            <Button
                primary={ButtonVariations.PRIMARY === variation}
                secondary={ButtonVariations.SECONDARY === variation}
                small={ButtonSizes.SMALL === size}
                medium={ButtonSizes.MEDIUM === size}
                large={ButtonSizes.LARGE === size}
                icon={icon ? Google : undefined}
            >
                {children}
            </Button>
        </Wrapper>
    );
}

DefaultButton.args = {
    variation: ButtonVariations.PRIMARY,
    size: ButtonSizes.MEDIUM,
    children: "Login/Register",
    icon: false
};

export {
    DefaultButton,
}