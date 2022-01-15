import styled from "styled-components";
import {StyledProps} from "@typings";
import {lighten} from "@utils/ColorUtils";

export interface DrawerLinkProps extends StyledProps {}

const DrawerLink = styled.div<DrawerLinkProps>`
  position: relative;
  color: ${p => p.theme.color.dark};
  padding: .75rem .5rem;
  margin: 0 .5rem;
  border-radius: 4px;
  display: ${p => p.theme.display.flex};
  align-items: ${p => p.theme.alignItems.center};
  font-family: ${p => p.theme.fontFamily.primary};
  cursor: ${p => p.theme.cursor.pointer};
  font-weight: bold;
  font-size: ${p => p.theme.fontSize.fs3};
  transition: .3s;

  svg {
    color: ${p => lighten(p.theme.color.dark, 0.8)}
  }

  &:hover {
    background: ${p => lighten(p.theme.color.primary, 0.2)};
    color: ${p => p.theme.color.primary};

    svg {
      color: ${p =>p.theme.color.primary};
    }
  }
`;

export default DrawerLink;