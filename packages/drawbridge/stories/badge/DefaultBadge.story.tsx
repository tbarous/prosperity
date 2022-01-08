import React from 'react';
import Badge from "@components/badge/Badge";

const DefaultBadge = (args: { info?: boolean, danger?: boolean, success?: boolean, children?: string }) => (
    <Badge>
        {args.children}
    </Badge>
);

DefaultBadge.args = {
    children: "Badge"
};

export default DefaultBadge;