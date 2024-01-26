import ReactDOM from 'react-dom/client';
import './index.css';

import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/agua_vivo_app">
      <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <Provider store={store}>
        <App />
      </Provider>
      </PersistGate>
    </BrowserRouter>
  </StrictMode>
);
