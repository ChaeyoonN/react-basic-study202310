import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../../UI/Card';
import styles from './Login.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';
import Input from '../../UI/Input/Input';

// 리듀서 함수
/*
  이 컴포넌트에서 사용하는 모든 상태와 상태 변경을 중앙 제어하는 함수.
  컴포넌트 내부 데이터를 사용하지 않고 상태에만 집중하기 때문에
  컴포넌트 바깥쪽에 선언하는 것이 일반적입니다.

  param1 - state: 변경 전의 상태값
  param2 - action: dispatch함수(상태 변경 등의 행동)가 전달한 상태 변경 객체
  return: 관리할 상태값들을 반환
*/
const emailReducer = (state, action) => {
  console.log('email reducer called!!!');
  console.log('stae: ', state); //변경 전 가장 최신값
  console.log('action: ', action); //dispatchEmail가 전달한 것

  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.includes('@'),
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isValid: state.value.includes('@'),
    };
  }

  return {
    value: '',
    isValid: null,
  };
};

const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  } else if (action.type === 'INPUT_VALIDATE') {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }

  return {
    value: '',
    isValid: null,
  };
};

const Login = () => {
  const { onLogin } = useContext(AuthContext);
  // email reducer 사용하기 - useReducer 사용해 만든 리듀서를 등록!
  /*
  param1 - reducer function: 위에서 만든 리듀서 함수
  param2 - initial state: 초기상태값
  return1 - 이메일 관련 상태변수
  return2 - dispatch함수: 상태를 변경할 수 있는 함수
  */
  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });

  // 이메일, 패스워드가 둘 다 동시에 정상적인 상태인지 확인
  const [formIsValid, setFormIsValid] = useState(false);

  // emailState는 객체 형태. -> isValid 프로퍼티가 변경됐을 때만 useEffect를 실행하게 하려면
  // isValid를 디스트럭쳐링한다. (프로퍼티로 바로 사용 x)
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  // 입력란을 모두 체크하여 form의 버튼 disabled를 해제하는 상태 변수
  // formIsValid의 사이드 이펙트를 처리하는 영역
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('useEffect called in Login.js!');
      // console.log(`useEffect: ${enteredEmail}`);
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 1000);

    //cleanup 함수 - 컴포넌트가 업데이트 되거나 없어지기 전에 실행.
    return () => {
      //useEffect함수 안에 return에 쓰는 함수가 클린업함수다.
      clearTimeout(timer); // 렌더링 진행 전 실행: 위의 setTimeout 지움!
      console.log('clean up!');
      // console.log(`clean up!: ${enteredEmail}`);
    };
    // 이 배열에 상태변수를 넣어주면 그 상태변수가 바뀔 때마다 useEffect를 재실행함.
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e) => {
    //reducer의 상태 변경은 dispatch함수를 통해 처리
    /*
      param1 - action객체(리듀서 함수의 2번째 파라미터)
    */
    dispatchEmail({
      type: 'USER_INPUT',
      val: e.target.value,
    }); //호출함으로써 리듀서가 호출됨
  };

  const passwordChangeHandler = (e) => {
    dispatchPassword({
      type: 'USER_INPUT',
      val: e.target.value,
    }); //호출함으로써 리듀서가 호출됨
  };

  const validateEmailHandler = () => {
    dispatchEmail({
      type: 'INPUT_VALIDATE',
    });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({
      type: 'INPUT_VALIDATE',
    }); //호출함으로써 리듀서가 호출됨
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={styles.login}>
      <form onSubmit={submitHandler}>
        <Input
          type='email'
          id='email'
          label='E-Mail'
          value={emailState.value}
          isValid={emailIsValid}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          type='password'
          id='password'
          label='Password'
          value={passwordState.value}
          isValid={passwordIsValid}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />

        <div className={styles.actions}>
          <Button
            type='submit'
            className={styles.btn}
            disabled={!formIsValid}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
