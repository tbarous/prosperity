import React from 'react';
import Badge from "@atoms/badge/Badge";

const DefaultBadge = (args: { children?: string }) => {
    const {children} = args;

    return (
        <Badge>{children}</Badge>
    );
}

DefaultBadge.args = {
    children: "Badge"
};

export default DefaultBadge;