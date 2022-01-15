import React from "react";
import {StyledProps} from "@typings";
import styled, {css} from "styled-components";
import Icon from "@atoms/Icon";
import MediaUtils from "@utils/MediaUtils";
import {px} from "@utils/ThemeUtils";

export const ModalBody = styled.div<StyledProps>`
  font-size: ${p => p.theme.fontSize.fs3};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d70};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  overflow-y: ${p => p.theme.overflow.auto};
`;

export const ModalClose = styled(Icon)<StyledProps>`
  align-items: ${p => p.theme.alignItems.center};
  top: ${p => px(p.theme.spacing.s2)};
  right: ${p => px(p.theme.spacing.s2)};
  position: ${p => p.theme.position.fixed};
  cursor: ${p => p.theme.cursor.pointer};
  border-radius: ${p => p.theme.borderRadius.circle};
  color: ${p => p.theme.color.dark};
  padding: ${p => px(p.theme.spacing.s2)};
  display: ${p => p.theme.display.flex};
  background-color: ${p => p.theme.color.surface};
  border: ${p => p.theme.border.medium};
  width: 24px;
  height: 24px;
`;

export const ModalContent = styled.div<StyledProps>`
  background-color: ${p => p.theme.color.surface};
  border-radius: ${p => p.theme.borderRadius.medium};
  box-shadow: ${p => p.theme.shadow.medium};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d80};
  ${p => MediaUtils.up(p.theme.breakpoint.md, css`width: 500px;`)};
`;

export const ModalFooter = styled.div`
  overflow-y: ${p => p.theme.overflow.auto};
  position: ${p => p.theme.position.absolute};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
  box-shadow: ${p => p.theme.shadow.medium};
  border-bottom-left-radius: ${p => p.theme.borderRadius.medium};
  border-bottom-right-radius: ${p => p.theme.borderRadius.medium};
  font-size: ${p => p.theme.fontSize.fs3};
  padding: ${p => `${px(p.theme.spacing.s3)} ${px(p.theme.spacing.s5)}`};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d20};
  bottom: ${p => px(p.theme.spacing.s0)};
  background-color: ${p => p.theme.color.surface};
`;

export const ModalHeader = styled.div<StyledProps>`
  border-top-left-radius: ${p => p.theme.borderRadius.medium};
  border-top-right-radius: ${p => p.theme.borderRadius.medium};
  box-shadow: ${p => p.theme.shadow.medium};
  font-size: ${p => p.theme.fontSize.fs3};
  width: ${p => p.theme.dimension.d100};
  font-family: ${p => p.theme.fontFamily.secondary};
  height: ${p => p.theme.dimension.d10};
  box-sizing: ${p => p.theme.boxSizing.borderBox};
`;

export const ModalWrapper = styled.div<StyledProps>`
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  justify-content: ${p => p.theme.justifyContent.center};
  width: ${p => p.theme.dimension.d100};
  height: ${p => p.theme.dimension.d100};
  position: ${p => p.theme.position.fixed};
  top: ${p => px(p.theme.spacing.s0)};
  left: ${p => px(p.theme.spacing.s0)};
`;
