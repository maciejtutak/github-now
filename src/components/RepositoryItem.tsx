import Octicon, { RepoForked, Star } from "@primer/octicons-react";

import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

type ItemProps = { item: Record<string, any> };

const RepositoryItem = observer(({ item }: ItemProps) => {
    const { author, name, description, stars, forks, language, languageColor, url } = item;
    return (
        <ItemContainer href={url}>
        <Item>
            <IconRow>
                <Octicon icon={Star} />
                {stars}
            </IconRow>
            <IconRow>
                <Octicon icon={RepoForked} />
                {forks}
            </IconRow>
            <ItemInfo>
                <Title>
                    <Name>{name}</Name> <Author>by {author}</Author>
                </Title>
                <Description>{description}</Description>
                {language && <Language languageColor={languageColor}>{language}</Language>}
            </ItemInfo>
        </Item>
        </ItemContainer>
    )
});

export default RepositoryItem;

const ItemContainer = styled.a`
    text-decoration: none;
    color: currentColor;
`

const Item = styled.li`
    margin: 0;
    padding: 20px;
    
    width: 100%;
    align-items: baseline;

    display: grid;
    grid-template-columns: 100px 100px 1fr;

    @media all and (max-width: 768px) {
        grid-template-columns:  100px 1fr;
    }

    background-color: #ffffff;
    border-bottom: 1px solid #ececec;

    &:hover {
        background-color: #f0f0f0;
    }
`

const IconRow = styled.div`
    margin-bottom: 10px;
    display: flex;
    flex-flow: row-nowrap;
    align-items: baseline;

    & svg {
        margin-right: 5px;
        position: relative;
        top: 2px;
    }
`;

const ItemInfo = styled.div`
    @media all and (max-width: 768px) {
        grid-column: 1 / span 2;
    }
`;

const Description = styled.p`
    width: 100%;
    display: flex;
    flex-flow: row;
    margin-bottom: 1em;
`

const Top = styled.div`
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
`

const Title = styled.div`
    margin-bottom: 1em;
`

const Name = styled.h2`
    // font-style: italic;
    display: inline;
`

const Author = styled.h2`
    display: inline;
    color: rgba(0, 0, 0, 0.5);
    // font-family: "Source Serif Pro", serif;
    font-size: 1.6rem;
`

interface LanguageProps {
    languageColor?: string
}


const Language = styled.span<LanguageProps>`
    padding: 0 0.4em;
    margin: 0;
    // background-color: ${props => props.languageColor}40;
    background-color: rgba(100, 50, 200, 0.2);
`