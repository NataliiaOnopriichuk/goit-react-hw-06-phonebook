import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/app/App';
import './index.css';
import { store } from 'redux/store';
import { Provider } from 'react-redux';

// export const ContactsContext = createContext();

// const IsContactsContextProvider = ({ children }) => {
//   const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? []);
//   return (
//     <ContactsContext.Provider
//       value={{ contacts, setContacts}}
//     >
//       {children}
//     </ContactsContext.Provider>
//   );
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
  <App />
      </Provider>
  </React.StrictMode>
);
