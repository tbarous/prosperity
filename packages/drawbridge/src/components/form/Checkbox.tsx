import React, {ReactElement} from "react";
import {BasicComponentProps, FunctionVoid} from "@typings";
import {emptyFunction} from "@helpers";
import CheckboxInputStyled from "@components/form/styled/CheckboxInputStyled";
import CheckboxStyled from "@components/form/styled/CheckboxStyled";
import {Checkmark} from "@icons";
import Icon from "@components/icon/Icon";
import Text from "@components/text/Text";
import styled from "styled-components";

interface Props extends BasicComponentProps {
    onChange?: FunctionVoid,
    checked?: boolean,
    label?: string
}

const TextStyled = styled(Text)`
  margin-left: .5rem;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

const IconWrapper = styled.div<{checked?: boolean}>`
  border-radius: 4px;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  background-color: ${p=> p.theme.color.secondary};
  position: relative;
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

    return (
        <CheckboxStyled
            className={className}
        >
            <CheckboxInputStyled
                type="checkbox"
                onChange={onChange}
                checked={checked}
            />

            <Wrapper>
                <IconWrapper checked={checked}>
                    {checked && <IconStyled icon={Checkmark} width={12} height={12}/>}
                </IconWrapper>

                {label && <TextStyled>{label}</TextStyled>}
            </Wrapper>
        </CheckboxStyled>
    )
}

export default Checkbox;