import React from "react";
import styled from "styled-components";
import Card from "@tbarous/drawbridge/components/card/Card";

const A = styled(Card)`
  ${(p: any) => console.log(p)}
`;

function AA() {
    return <A>

        asdasdas
    </A>
}

export default AA