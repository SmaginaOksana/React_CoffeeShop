import { configureStore } from "@reduxjs/toolkit";

import { setAmericano } from "./slices/americanoSlice";
import { setCappuccino } from "./slices/cappuccinoSlice";
import { setLatte } from "./slices/latteSlice";
import { setFlatWhite } from "./slices/flat-whiteSlice";
import { setRaf } from "./slices/rafSlice";
import { setEspresso } from "./slices/espressoSlice";
import { setBasket } from "./slices/basketSlice";
import { setAuthUser } from "./slices/authUserSlice";
import { setUsers } from "./slices/usersSlice";

import americanoSliceReducer from "./slices/americanoSlice";
import cappuccinoSliceReducer from "./slices/cappuccinoSlice";
import latteSliceReducer from "./slices/latteSlice";
import flatWhiteSliceReducer from "./slices/flat-whiteSlice";
import rafSliceRuducer from "./slices/rafSlice";
import espressoSliceReducer from "./slices/espressoSlice";
import basketSliceReducer from "./slices/basketSlice";
import authUserSliceReducer from "./slices/authUserSlice";
import usersSliceReducer from "./slices/usersSlice";

export {
  setAmericano,
  setCappuccino,
  setLatte,
  setFlatWhite,
  setRaf,
  setEspresso,
  setBasket,
  setAuthUser,
  setUsers,
};

export const store = configureStore({
  reducer: {
    americano: americanoSliceReducer,
    cappuccino: cappuccinoSliceReducer,
    latte: latteSliceReducer,
    flatwhite: flatWhiteSliceReducer,
    raf: rafSliceRuducer,
    espresso: espressoSliceReducer,
    basket: basketSliceReducer,
    authUser: authUserSliceReducer,
    users: usersSliceReducer,
  },
});
