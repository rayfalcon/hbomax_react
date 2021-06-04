
import Head from 'next/head'
import {useStateContext} from '../components/HBOProvider';
import ls from 'local-storage';
import {v4 as uuid } from 'uuid';
import { useRouter } from 'next/router';
import Login from '../components/ui/Login/Login'

const LoginPage = () =>  {
  
  return (
    <Login />
  )
}

export default Login;
