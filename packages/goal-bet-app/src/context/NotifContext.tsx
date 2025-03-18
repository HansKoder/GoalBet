import { createContext, useContext } from 'react';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';

const notif = new Notyf();

const NotifContext = createContext(notif);

export const useNotif = () => {
  return useContext(NotifContext);
};