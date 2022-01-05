import RulesInterface from "../interfaces/RulesInterface";
import Cursor from "./Cursor";
import BoxSizing from "./BoxSizing";
import Display from "./Display";
import Position from "./Position";
import ObjectFit from "./ObjectFit";
import TextDecoration from "./TextDecoration";
import FlexGrow from "./FlexGrow";
import FlexWrap from "./FlexWrap";
import AlignItems from "./AlignItems";
import Overflow from "./Overflow";
import TextAlign from "./TextAlign";
import JustifyContent from "./JustifyContent";

const Light: RulesInterface = {
    cursor: Cursor,
    boxSizing: BoxSizing,
    display: Display,
    position: Position,
    objectFit: ObjectFit,
    textDecoration: TextDecoration,
    flexGrow: FlexGrow,
    flexWrap: FlexWrap,
    alignItems: AlignItems,
    overflow: Overflow,
    textAlign: TextAlign,
    justifyContent: JustifyContent,
}

export default Light;