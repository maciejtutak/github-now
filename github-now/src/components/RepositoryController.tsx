import React, { Children, FormEvent, FunctionComponent } from "react";

import { observer } from "mobx-react";
import styled from "styled-components";
import useStores from "../useStores";

const RepositoryController = observer(() => {
    const { repositoryStore } = useStores();

    // const onChange = (e: FormEvent<HTMLInputElement>) => {
    //     repositoryStore.timeSpan = e.currentTarget.value;
    // }
    console.log(repositoryStore.repositoryUI);
    
    return (
        <Controller>
            <ControllerTop>    
                <Form>
                    <span>
                        Time span:
                    </span>
                    <div>
                        <label>
                            <input type="radio" value="daily" checked={repositoryStore.repositoryUI.timeSpan === "daily"} onChange={repositoryStore.changeTimeSpan} /> 
                            Daily
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="weekly" checked={repositoryStore.repositoryUI.timeSpan === "weekly"} onChange={repositoryStore.changeTimeSpan} />
                            Weekly
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="radio" value="monthly" checked={repositoryStore.repositoryUI.timeSpan === "monthly"} onChange={repositoryStore.changeTimeSpan} />
                            Monthly
                        </label>
                    </div>
                </Form>
                <Language>
                    <span>
                        Language:
                    </span>
                    <Select value={repositoryStore.repositoryUI.language} onChange={repositoryStore.changeLanguage}>
                        {repositoryStore.repositoryUI.languages.map((lang, idx) => <option value={lang.urlParam} key={idx}>{lang.name}</option>)}
                    </Select>
                </Language>
            </ControllerTop>
            <ListHeader>
                <ListHeaderSort>Stars</ListHeaderSort>
                <ListHeaderSort>Forks</ListHeaderSort>
                <span>Repositories</span>
            </ListHeader>
        </Controller>
    )
});

export default RepositoryController;


// enum SortOptions {
// 	starsDescending = "starsDescending",
// 	starsAscending = "starsAscending",
// 	forksDescending = "forksDescending",
// 	forksAscending = "forksAscending",
// }

enum SortOptions {
	descending = "descending",
	ascending = "ascending",
}

type ListHeaderSortProps = { 

};

const ListHeaderSort: FunctionComponent<ListHeaderSortProps> = observer(({ children }) => {
    const { repositoryStore } = useStores();
    
    const onClick = () => {
        // repositoryStore.repositoryUI.sort.name = this
        repositoryStore.repositoryUI.sortable.changeSortType();
        // repositoryStore.repositoryUI.sortType = repositosryStore.repositoryUI.sortType;
        console.log("SortOptions: ", repositoryStore.repositoryUI.sortable.name)
    }

    return (
        <div onClick={onClick}>
            <span>
                {children}
                {/* {repositoryStore.repositoryUI.sortType === SortType.none ? <p>none</p> : null}
                {repositoryStore.repositoryUI.sortType === SortType.descending ? <p>descending</p> : null}
                {repositoryStore.repositoryUI.sortType === SortType.ascending ? <p>ascending</p> : null} */}
            </span>
        </div>
    );
})


const Controller = styled.div`
`;

const ControllerTop = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-flow: row;
    align-items: baseline;
    justify-content: space-between;

    border-bottom: 3px solid #000;
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

const ListHeader = styled.div`
    padding: 10px 20px 0;
    display: grid;
    grid-template-columns: 100px 100px 1fr;
    align-items: baseline;

    font-family: "Source Sans Pro", sans-serif;
    font-size: 24px;
`;