import CursorInterface from "./CursorInterface";
import BoxSizingInterface from "./BoxSizingInterface";
import DisplayInterface from "./DisplayInterface";
import PositionInterface from "./PositionInterface";
import ObjectFitInterface from "./ObjectFitInterface";
import TextDecorationInterface from "./TextDecorationInterface";
import FlexGrowInterface from "./FlexGrowInterface";
import FlexWrapInterface from "./FlexWrapInterface";
import AlignItemsInterface from "./AlignItemsInterface";
import OverflowInterface from "./OverflowInterface";
import TextAlignInterface from "./TextAlignInterface";
import JustifyContentInterface from "./JustifyContentInterface";

interface RulesInterface {
    cursor: CursorInterface,
    boxSizing: BoxSizingInterface,
    display: DisplayInterface,
    position: PositionInterface,
    objectFit: ObjectFitInterface,
    textDecoration: TextDecorationInterface,
    flexGrow: FlexGrowInterface,
    flexWrap: FlexWrapInterface,
    alignItems: AlignItemsInterface,
    overflow: OverflowInterface,
    textAlign: TextAlignInterface,
    justifyContent: JustifyContentInterface,
}

export default RulesInterface;