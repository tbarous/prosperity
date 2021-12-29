var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { up } from "@theme/Breakpoint";
import Icon from "../Icon/Icon";
import { Times } from "../Icon/Icons";
import useOnClickOutside from "@hooks/useOnClickOutside";
var animationDuration = ".4s";
var openModalAnimation = keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"], ["\n  from {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n\n  to {\n    transform: translateY(0);\n    opacity: 1;\n  }\n"])));
var closeModalAnimation = keyframes(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  to {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n"], ["\n  from {\n    transform: translateY(0);\n    opacity: 1;\n  }\n\n  to {\n    transform: translateY(-100%);\n    opacity: 0;\n  }\n"])));
var Wrapper = styled.div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    background: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    width: ", ";\n    height: 100%;\n    animation: ", ";\n    animation-timing-function: ease-in-out;\n    animation-fill-mode: forwards;\n    \n    ", ";\n"], ["\n    background: ", ";\n    border-radius: ", ";\n    box-shadow: ", ";\n    width: ", ";\n    height: 100%;\n    animation: ", ";\n    animation-timing-function: ease-in-out;\n    animation-fill-mode: forwards;\n    \n    ", ";\n"])), function (props) { return props.theme.color.white; }, function (props) { return props.theme.border.radius.primary; }, function (props) { return props.theme.shadow.primary; }, function (props) { return props.theme.spacing.width.full; }, function (props) { return !props.unmounting ? css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), openModalAnimation, animationDuration) : css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["", " ", ""], ["", " ", ""])), closeModalAnimation, animationDuration); }, function (props) { return up(props.theme.breakpoint.md, "\n        width: 500px;\n        height: 500px;\n    "); });
var TimesButton = styled(Icon)(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n"], ["\n    position: fixed;\n    top: 0;\n    right: 0;\n    cursor: pointer;\n"])));
var Overlay = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    background: rgba(0, 0, 0, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position:fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n"], ["\n    background: rgba(0, 0, 0, 0.4);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position:fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n"])));
var ModalWrapper = function (props) {
    var onClose = props.onClose, children = props.children;
    var _a = useState(false), unmounting = _a[0], setUnmounting = _a[1];
    var modalWrapperRef = useRef(null);
    useOnClickOutside(modalWrapperRef, close);
    function close() {
        setUnmounting(true);
    }
    useEffect(function () {
        if (unmounting) {
            setTimeout(function () {
                onClose && onClose();
            }, 400);
        }
    }, [unmounting]);
    return (<Overlay>
            <Wrapper ref={modalWrapperRef} unmounting={unmounting}>
                <TimesButton onClick={close} width={20} height={20} specific={Times}/>

                {children}
            </Wrapper>
        </Overlay>);
};
export default ModalWrapper;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
