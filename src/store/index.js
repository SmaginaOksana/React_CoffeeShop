import { configureStore } from "@reduxjs/toolkit";

import { setBasket } from "./slices/basketSlice";
import { setAuthUser } from "./slices/authUserSlice";
import { setUsers } from "./slices/usersSlice";
import { setCoffee } from "./slices/coffeeSlice";

import basketSliceReducer from "./slices/basketSlice";
import authUserSliceReducer from "./slices/authUserSlice";
import usersSliceReducer from "./slices/usersSlice";
import coffeeSliceReducer from "./slices/coffeeSlice";

export { setBasket, setAuthUser, setUsers, setCoffee };

export const store = configureStore({
  reducer: {
    basket: basketSliceReducer,
    authUser: authUserSliceReducer,
    users: usersSliceReducer,
    coffee: coffeeSliceReducer,
  },
});
