import React, {ReactElement, useEffect, useRef, useState} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import {Checkmark} from "@icons";
import Icon from "@components/icon/Icon";
import Text from "@components/text/Text";
import styled from "styled-components";
import CheckboxWrapper from "./styled/checkbox/CheckboxWrapper";
import CheckboxIconWrapper from "./styled/checkbox/CheckboxIconWrapper";
import CheckboxStyled from "./styled/checkbox/CheckboxStyled";
import CheckboxInputStyled from "./styled/checkbox/CheckboxInputStyled";
import CheckboxIconStyled from "./styled/checkbox/CheckboxIconStyled";
import CheckboxRipple from "./styled/checkbox/CheckboxRipple";
import CheckboxRippleClicked from "./styled/checkbox/CheckboxRippleClicked";

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

const Checkbox: React.FunctionComponent<Props> = (props: Props): ReactElement => {
    const {
        children,
        className,
        onChange = emptyFunction,
        checked,
        label
    } = props;

    const [ripple, setRipple] = useState(false);
    const [clicked, setClicked] = useState(false);

    function onClick() {
        setClicked(true)
    }


    const ref = useRef<any>(null);
    useEffect(() => {
        ref.current = setTimeout(() => setClicked(false), 1000);

        return () => clearTimeout(ref.current);
    }, [clicked])

    return (
        <CheckboxStyled
            className={className}
        >
            <CheckboxInputStyled
                type="checkbox"
                onChange={onChange}
                checked={checked}
            />

            <CheckboxWrapper>
                <CheckboxIconWrapper
                    onMouseEnter={() => setRipple(true)}
                    onMouseLeave={() => setRipple(false)}
                    checked={checked}
                    onClick={onClick}
                >
                    {checked && <CheckboxIconStyled
                        icon={Checkmark}
                        width={12}
                        height={12}
                    />}

                    <CheckboxRipple ripple={ripple}/>

                    {clicked && <CheckboxRippleClicked/>}
                </CheckboxIconWrapper>

                {label && <TextStyled>
                    {label}
                </TextStyled>}
            </CheckboxWrapper>
        </CheckboxStyled>
    )
}

export default Checkbox;