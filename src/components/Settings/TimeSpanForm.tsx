import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import useStores from "../../useStores";

const TimeSpanForm = observer(() => {
  const { repositoryStore } = useStores();

  return (
    <FormContainer>
      <span>Time span:</span>
      <RadioGroup>
        <div>
          <label>
            <input
              type="radio"
              value="daily"
              checked={repositoryStore.timeSpan === "daily"}
              onChange={repositoryStore.changeTimeSpan}
            />
            Daily
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="weekly"
              checked={repositoryStore.timeSpan === "weekly"}
              onChange={repositoryStore.changeTimeSpan}
            />
            Weekly
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              value="monthly"
              checked={repositoryStore.timeSpan === "monthly"}
              onChange={repositoryStore.changeTimeSpan}
            />
            Monthly
          </label>
        </div>
      </RadioGroup>
    </FormContainer>
  );
});

const FormContainer = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  @media all and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }

  & span {
    margin-right: 0.4em;
    @media all and (max-width: 768px) {
        margin: 10px 0 5px 0;
      }
  }

  & div {
    margin-right: 1.2em;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  flex-flow: row;
  align-items: center;
  justify-content: flex-start;

  padding: 0 1.2em;
  height: 34px;

  & > div {
    margin-right: 1.2em;
    &:last-child {
      margin-right: 0;
    }

    & label,
    input {
      cursor: pointer;
    }

    & label input {
      margin: 0;
      margin-right: 0.6em;
    }
  }

  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.secondaryColor};
`;

export default TimeSpanForm;
