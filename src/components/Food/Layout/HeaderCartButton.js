import React, { useContext, useState, useEffect } from 'react';

import styles from './HeaderCartButton.module.scss';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShow }) => {
  // bump 애니메이션을 제어하는 상태변수
  const [isBump, setIsBump] = useState();

  const { button, icon, badge, bump } = styles;

  const { items } = useContext(CartContext);

  const numberOfCart = items.reduce((accum, item) => {
    return accum + item.amount;
  }, 0); // reduce(콜백함수(리턴결과에 대한 누적값, 배열에서 하나씩 꺼낸값)=>{}, 초기인덱스값)

  useEffect(() => {
    if (items.length === 0) return;
    console.log('useEffect in CartBtn!');
    setIsBump(true);

    //애니메이션 시간이 300밀리초니까 그 시간이 지나면 클래스를 제거.
    const timer = setTimeout(() => {
      setIsBump(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
    //
  }, [items]);

  return (
    <button
      className={`${button} ${isBump ? bump : ''}`}
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
