import React, { useContext } from 'react';

import Card from '../../UI/Card';
import styles from './Home.module.css';
import Button from '../../UI/Button/Button';
import AuthContext from '../../../store/auth-context';

const Home = () => {
  const { onLogout } = useContext(AuthContext); //디스트럭쳐링
  // console.log('authCtx: ', authCtx);
  return (
    <Card className={styles.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default Home;
