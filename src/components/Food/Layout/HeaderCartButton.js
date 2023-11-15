import React, { useContext } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  const { button, icon, badge } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce((accum, item) => {
    return accum + item.amount;
  }, 0); // reduce(콜백함수(리턴결과에 대한 누적값, 배열에서 하나씩 꺼낸값)=>{}, 초기인덱스값)

  return (
    <button
      className={button}
      onClick={onShow}
    >
      <span className={icon}>
        <CartIcon />
      </span>
      <span>My Cart</span>
      <span className={badge}>{numberOfCart}</span>
    </button>
  );
};

export default HeaderCartButton;
