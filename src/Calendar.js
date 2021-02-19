import React from 'react';
import { Provider } from "react-redux";

import { store } from "./store/store";
import AppRouter from "./router/AppRouter"

const Calendar = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
   );
}
 
export default Calendar;