import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  position: relative;
  padding-top: 10px;
  padding-bottom: 5px;
  box-shadow: 0px -3px 4px 0px black;
  margin-bottom: 10px;
`;

export const CartItemImage = styled.img`
  height: 100px;
`;

export const CartItemInfoWrapper = styled.div`
  flex-basis: 100%;
  align-self: center;
`;

export const CrossMark = styled.span`
  position: absolute;
  right: 5px;
  top: 5px;
  color: black;
  font-size: 1.5rem;
  font-weight: 800;
  padding-right: 5px;
  cursor: pointer;
  z-index: 1024;
`;

export const CartItemInfo = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  ${CrossMark}:hover & {
    text-decoration: line-through;
    font-weight: 800;
  }
`;

export const ItemName = styled.div`
  color: white;
  font-size: 1.3rem;
`;

export const ItemPrice = styled.div`
  display: flex;
  color: goldenrod;
  align-items: center;
`;

export const Grey = styled.div`
  color: grey;
`;
