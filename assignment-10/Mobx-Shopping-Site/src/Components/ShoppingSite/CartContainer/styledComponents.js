import styled from "styled-components";

export const StyledCartContainer = styled.div`
  position: fixed;
  z-index: 999;
  display: flex;
  right: ${props => (props.isClicked ? "0" : "-40vw")};
  transition: 0.5s;
  height: 100vh;
`;

export const CartToggle = styled.div`
  position: relative;
  height: 60px;
  width: 60px;
  background-color: rgb(8, 7, 7);
  cursor: pointer;
  color: white;
  font-size: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CartCount = styled.span`
  display: ${props => (props.show ? "inline-block" : "none")};
  position: absolute;
  bottom: 5px;
  right: 5px;
  background-color: goldenrod;
  font-size: 12px;
  padding: 2px;
  border-radius: 50%;
`;

export const CartItemsContainer = styled.div`
  width: 40vw;
  background-color: rgb(8, 7, 7);
`;

export const InsideCartCount = styled(CartCount)`
  display: inline-block;
`;

export const CartItemsInnerWrap = styled.div`
  height: 77%;
  padding: 25px;
`;

export const CartIconInCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`;

export const CartIcon = styled.img`
  height: 60px;
  width: 60px;
`;

export const InCartIcon = styled.img`
  height: 100px;
  width: 120px;
`;

export const CartText = styled.div`
  font-size: 20px;
  color: white;
`;

export const CartSubtotal = styled.div`
  height: 23%;
  padding: 25px;
  font-size: 16px;
  box-shadow: 0px -5px 20px 1px black;
`;

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubTotalText = styled.span`
  color: grey;
`;

export const SubTotalCount = styled.span`
  color: goldenrod;
`;

export const Checkout = styled.div`
  margin-top: 60px;
  color: white;
  background-color: black;
  padding: 15px;
  text-align: center;
  cursor: pointer;
`;
