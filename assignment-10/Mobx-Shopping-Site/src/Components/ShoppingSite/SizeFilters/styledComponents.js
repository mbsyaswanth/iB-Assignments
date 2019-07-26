import styled from "styled-components";

export const SizeFiltersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding-left: 30px;
  flex-direction: column;
  align-items: flex-end;
`;

export const SizeFilter = styled.input`
  padding: 5px;
  margin: 5px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  text-align: center;
  border-style: none;
  transition: 0.3s;
  cursor: pointer;
  :focus {
    outline: none;
  }
  :hover {
    box-shadow: 0px 0px 1px 2px black;
  }
  :active {
    border-style: none;
  }
  color: ${props => (props.select ? "white" : "black")};
  background-color: ${props =>
    props.select ? "black" : "rgba(219, 219, 219, 0.384)"};
`;
