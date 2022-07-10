import '../styles/font.css';
import '../styles/globals.css';
import '../styles/style.css';
import { StyledEngineProvider } from '@mui/material';

import { Provider } from 'react-redux';
import { store } from '../modules';

/* Major components */
import NavBar from '../components/navigation';

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Provider store={store}>
        <NavBar/>
        <Component {...pageProps} />
      </Provider>
    </StyledEngineProvider>
  )
}

export default MyApp
