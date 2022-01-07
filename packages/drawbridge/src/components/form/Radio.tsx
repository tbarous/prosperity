import React, {ReactElement, useEffect, useState} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import {Checkmark} from "@icons";
import Icon from "@components/icon/Icon";
import Text from "@components/text/Text";
import styled from "styled-components";
import RadioWrapper from "./styled/radio/RadioWrapper";
import RadioIconWrapper from "./styled/radio/RadioIconWrapper";
import RadioStyled from "./styled/radio/RadioStyled";
import RadioInputStyled from "./styled/radio/RadioInputStyled";
import RadioIconStyled from "./styled/radio/RadioIconStyled";
import RadioRipple from "./styled/radio/RadioRipple";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid,
    checked?: boolean,
    label?: string
}

const TextStyled = styled(Text)`
  margin-left: .5rem;
`

const IconStyled = styled(Icon)`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 6px;
`

const Radio: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {
        children,
        className,
        onChange = emptyFunction,
        checked,
        label
    } = props;

    const [ripple, setRipple] = useState(false);

    return (
        <RadioStyled
            className={className}
        >
            <RadioInputStyled
                type="radio"
                onChange={onChange}
                checked={checked}
            />

            <RadioWrapper>
                <RadioIconWrapper
                    onMouseEnter={() => setRipple(true)}
                    onMouseLeave={() => setRipple(false)}
                    checked={checked}
                >
                    {checked && <RadioIconStyled
                        icon={Checkmark}
                        width={12}
                        height={12}
                    />}

                    <RadioRipple ripple={ripple}/>
                </RadioIconWrapper>

                {label && <TextStyled>
                    {label}
                </TextStyled>}
            </RadioWrapper>
        </RadioStyled>
    )
}

export default Radio;