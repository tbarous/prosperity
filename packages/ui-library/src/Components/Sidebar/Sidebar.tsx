import Link from "next/link";
import React from "react";
import styled from "styled-components";
import Image from "next/image";

const Wrapper = styled.nav`
    background: blue;
    width: 30%;
    height: 100%;
`;

interface ILink {
    name: string,
    href: string
}

const links = [
    {name: 'About', href: '/about'}
]

const Sidebar = () => {
    return (
        <Wrapper>
            <div></div>

            {links.map((link: ILink, index: number) => <Link key={index} href={link.href}>{link.name}</Link>)}
        </Wrapper>
    );
};

export default Sidebar;
