import Octicon, { RepoForked, Star } from "@primer/octicons-react";

import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";

// interface Props {
//     item: Record<string, any>
// }

// @observer
// class RepositoryItem extends React.Component<Props> {
//     render() {
//     const { author, stars, name, language } = this.props.item;
//     return (
//         <li>{author}, {stars}, {name}, {language}</li>
//     )
//     }
// };

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
            <div>
                <Title>
                    <Name>{name}</Name> <Author>by {author}</Author>
                </Title>
                <Description>{description}</Description>
                <Language>{language}</Language>
            </div>
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

    background-color: #ffffff;
    border-bottom: 1px solid #ececec;

    &:hover {
        background-color: #f0f0f0;
    }
`

const IconRow = styled.div`
    display: flex;
    flex-flow: row-nowrap;
    align-items: baseline;

    & svg {
        margin-right: 5px;
        position: relative;
        top: 2px;
    }
`;

const Description = styled.p`
    width: 100%;
    display: flex;
    flex-flow: row;
`

const Top = styled.div`
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
`

const Title = styled.div`

`

const Name = styled.h2`
    font-style: italic;
    display: inline;
`

const Author = styled.h2`
    display: inline;
`


const Language = styled.span`
    min-width: 100px;
    text-align: right;
    font-size: 1.6rem;
`