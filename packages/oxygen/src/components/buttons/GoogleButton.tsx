// import React from 'react';
// import Button, {ButtonSizeEnum, ButtonVariationEnum} from "@components/button/Button";
// import {Google, Times} from "@icons";
// import Text from "@components/text/Text";
// import {BasicComponentProps} from "@typings";
//
// interface Props extends BasicComponentProps{
//     variation?: string,
//     size?: string,
// }
//
// const ButtonIcon = (props: Props) => (
//     <Button
//         primary={ButtonVariationEnum.PRIMARY === props.variation}
//         secondary={ButtonVariationEnum.SECONDARY === props.variation}
//         small={ButtonSizeEnum.SMALL === props.size}
//         medium={ButtonSizeEnum.MEDIUM === props.size}
//         large={ButtonSizeEnum.LARGE === props.size}
//     >
//         <div style={{display: "flex"}}>
//             <Text>{props.children}</Text>
//         </div>
//     </Button>
// );
//
// export default ButtonIcon;