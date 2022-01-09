import React from 'react';
import Badge from "@components/badge/Badge";

const DefaultBadge = (args: { children?: string }) => (
    <Badge>{args.children}</Badge>
);

DefaultBadge.args = {
    children: "Badge"
};

export default DefaultBadge;