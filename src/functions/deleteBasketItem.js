import { removeBasketProduct } from "../services/FB_server";

export const deleteBasketItem = (basket, item, setFlag) => {
  let activeIndex;
  basket.items.find((element, index) => {
    activeIndex = index;
    return element.name === item.name;
  });

  removeBasketProduct(basket.id[activeIndex]);
  setFlag((prev) => !prev);
};
