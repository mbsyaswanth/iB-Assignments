import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;
  padding: 10px;
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 333px;
  background-color: white;
  transition: 0.2s;
  :hover {
    box-shadow: 0px 0px 2px 1px grey;
  }
`;

export const FreeShipping = styled.div`
  display: ${props => (props.isFreeShipping ? "block" : "none")};
  position: absolute;
  top: 10px;
  right: 10px;
  color: white;
  padding: 2px;
  background-color: black;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  height: 160px;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
`;

export const ProductTitle = styled.div`
  font-size: 1.2rem;
  height: 2.4rem;
`;

export const Line = styled.div`
  width: 30px;
  height: 2px;
  background-color: goldenrod;
`;

export const ProductPrice = styled.div`
  font-weight: 600;
  font-size: 1.6rem;
`;

export const ProductInstallments = styled.div`
  color: grey;
  font-weight: 600;
`;

export const ProductCartBtn = styled.button`
  width: 333px;
  padding: 10px;
  font-size: 1.1rem;
  color: white;
  background-color: black;
  font-weight: 500;
  border-style: none;
  cursor: pointer;
  transition: 0.2s;
  :focus {
    outline: none;
  }
  :active {
    border-style: none;
  }
  ${ProductContainer}:hover & {
    background-color: goldenrod;
  }
`;

export const Select = styled.select``;

export const Option = styled.option``;
