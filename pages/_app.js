import '../styles/globals.css';
import { Layout } from '../components';
import {StateContext} from '../context/StateContext';
import {Toaster} from 'react-hot-toast';
import NextNProgress from 'nextjs-progressbar';

function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster/>
        <NextNProgress color="#f02d34"/>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
    
  )
}

export default MyApp
