import { configureStore } from "@reduxjs/toolkit";

import cappuccinoSliceReducer from "./slices/cappuccinoSlice";
import latteSliceReducer from "./slices/latteSlice";
import rafSliceRuducer from "./slices/rafSlice";

export const store = configureStore({
  reducer: {
    cappuccino: cappuccinoSliceReducer,
    latte: latteSliceReducer,
    raf: rafSliceRuducer,
  },
});
