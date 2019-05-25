import { Dispatch, Middleware } from 'redux';
import { InterfaceStore } from '../@types';

const localStorageMiddleware: Middleware = ({ getState }: { getState: () => InterfaceStore }) => {
  return (next: Dispatch) => action => {
    const result = next(action);

    window.localStorage.setItem('store', JSON.stringify(getState()));

    return result;
  };
};

export default localStorageMiddleware;
