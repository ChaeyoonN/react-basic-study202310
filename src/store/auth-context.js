import React, { useState, useEffect } from 'react';

// 로그인 상태 변수를 관리할 컨텍스트
const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = ({ children }) => {
  // 로그인 상태를 관리하는 변수
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 화면이 리렌더링 될 때 localStorage를 확인해서
  // 현재 login-flag가 존재하는지 검사.
  console.log('로그인 검사 수행');

  // 기존에 로그인한 사람인지 확인하는 코드는
  // 리렌더링 될 때마다 실행되면 안됌!
  useEffect(() => {
    console.log('useEffect 실행! - 최초 단 한번만 실행됨!');

    const storedLoginFlag = localStorage.getItem('login-flag');
    if (storedLoginFlag === '1') {
      setIsLoggedIn(true);
      //App.js 리렌더링하므로 초기값 false -> setter(true)->리렌더링 무한루프!!
      //useEffect()에 넣어 한번만 수행되게 하자.
    }
  }, []);

  // 서버로 로그인을 요청하는 함수 (나중에는 fetch를 통한 벡엔드와의 연계가 필요.)
  const loginHandler = (email, password) => {
    // 로그인을 했다는 증거로 상태값 변경 및 브라우저에 로그인 값을 1로 표현해서 저장.
    localStorage.setItem('login-flag', '1');
    setIsLoggedIn(true); // 상태변화되므로 리렌더링된다
  };

  const logoutHandler = () => {
    localStorage.removeItem('login-flag');
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
