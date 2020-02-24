import Octicon, { Settings, X } from "@primer/octicons-react";
import React, { FunctionComponent, MouseEvent, useEffect, useState } from "react";

import { observer } from "mobx-react";
import styled from "styled-components";
import useStores from "../useStores";

const MobileMenu = observer(() => {
    const { repositoryStore } = useStores();
    const [open, setOpen] = useState<boolean>(false);

    const show = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(true);
    }

    const hide = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(false);
    }

    return (
        <div>
            <ButtonOpen type="button" onClick={show}>
                <Octicon icon={Settings} size={32} />
            </ButtonOpen>
            <MobileMenuOverlay open={open}>
                <MobileMenuModal>
                    <ButtonClose type="button" onClick={hide}>
                        <Octicon icon={X} size={24} />
                    </ButtonClose>
                    <div>

                    <Form>
                        <span>
                            Time span:
                        </span>
                        <div>
                            <label>
                                <input type="radio" value="daily" checked={repositoryStore.timeSpan === "daily"} onChange={repositoryStore.changeTimeSpan} /> 
                                Daily
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="weekly" checked={repositoryStore.timeSpan === "weekly"} onChange={repositoryStore.changeTimeSpan} />
                                Weekly
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" value="monthly" checked={repositoryStore.timeSpan === "monthly"} onChange={repositoryStore.changeTimeSpan} />
                                Monthly
                            </label>
                        </div>
                    </Form>
                    <Language>
                        <span>Language:</span>
                        <Select value={repositoryStore.language?.urlParam} onChange={repositoryStore.changeLanguage}>
                            {repositoryStore.languages.map((lang, idx) => <option value={lang.urlParam} key={idx}>{lang.name}</option>)}
                        </Select>
                    </Language>
                    </div>
                </MobileMenuModal>
            </MobileMenuOverlay>
        </div>
    );
});

interface MobileMenuOverlayProps {
    open: boolean
};

const Button = styled.button`
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: none;
    cursor: pointer;
`;

const ButtonOpen = styled(Button)`
    width: 32px;
    height: 32px;
`;

const ButtonClose = styled(Button)`
    width: 32px;
    height: 32px;
`;

const MobileMenuOverlay = styled.div<MobileMenuOverlayProps>`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 10;
    width: 100%;
    height: 100%;
    background-color: rgba(128, 128, 128, 0.4);
    overflow: hidden;
    display: ${props => props.open === true ? 'block' : 'none'};
`;

const MobileMenuModal = styled.div`
    display: flex;
    flex-flow: column;
    margin: 0 auto;
    padding: 10px;
    position: relative;
    top: 24px;
    height: 160px;
    width: 96%;
    background-color: white;

    & > button {
        align-self: flex-end;
    }

    & > div {
        padding: 0 20px;
    }
`;


const RepositoryController = observer(() => {
    const { repositoryStore } = useStores();
    
    return (
        <Controller>
            <Desktop>

            <ControllerTop>    
                <Form>
                    <span>
                        Time span:
                    </span>
                    <div>
                        <label>
                            <input type="radio" value="daily" checked={repositoryStore.timeSpan === "daily"} onChange={repositoryStore.changeTimeSpan} /> 
                            Daily
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="weekly" checked={repositoryStore.timeSpan === "weekly"} onChange={repositoryStore.changeTimeSpan} />
                            Weekly
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="monthly" checked={repositoryStore.timeSpan === "monthly"} onChange={repositoryStore.changeTimeSpan} />
                            Monthly
                        </label>
                    </div>
                </Form>
                <Language>
                    <span>
                        Language:
                    </span>
                    <Select value={repositoryStore.language?.urlParam} onChange={repositoryStore.changeLanguage}>
                        {repositoryStore.languages.map((lang, idx) => <option value={lang.urlParam} key={idx}>{lang.name}</option>)}
                    </Select>
                </Language>
            </ControllerTop>
            </Desktop>

            <Mobile>
                <MobileMenu />
            </Mobile>
        </Controller>
    )
});

export default RepositoryController;



const Controller = styled.div`

`;

const Desktop = styled.div`
    @media all and (max-width: 768px) {
        display: none;
}
`;

const Mobile = styled.div`
    @media all and (min-width: 769px) {
        display: none;
    }
`;

const ControllerTop = styled.div`
    padding: 10px 0;
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;
`

const Form = styled.form`
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: flex-start;
    & > * {
        margin-right: 10px;
    }

    padding: 10px 0;
`;

const Language = styled.div`
    & > * {
        margin-right: 10px;
    }
`;

const Select = styled.select`
    display: inline-block;
    padding: 5px 10px;
    @media all and (max-width: 786px) {
        margin: 10px 0;
    }
    width: 200px;
    border: none;
    border: 1px solid;
    border-color: #ececec;
    border-radius: 2px;
    appearance: none;
    background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48cGF0aCBkPSJNOTguOSwxODQuN2wxLjgsMi4xbDEzNiwxNTYuNWM0LjYsNS4zLDExLjUsOC42LDE5LjIsOC42YzcuNywwLDE0LjYtMy40LDE5LjItOC42TDQxMSwxODcuMWwyLjMtMi42ICBjMS43LTIuNSwyLjctNS41LDIuNy04LjdjMC04LjctNy40LTE1LjgtMTYuNi0xNS44djBIMTEyLjZ2MGMtOS4yLDAtMTYuNiw3LjEtMTYuNiwxNS44Qzk2LDE3OS4xLDk3LjEsMTgyLjIsOTguOSwxODQuN3oiLz48L3N2Zz4=');
    background-position-x: 98%;
    background-position-y: 7px;
    background-repeat: no-repeat;
    background-size: 15px;

    & :focus {
        outline: none;
    }
`;