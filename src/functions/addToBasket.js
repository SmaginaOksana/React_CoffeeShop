import { updateBasket, updateBasketProduct } from "../services/FB_server";

export const addToBasket = (data) => {
  const {
    typeOfCoffee,
    basket,
    ristretto,
    takeAway,
    volume,
    totalCount,
    setCoffeeData,
    setFlag,
  } = data;
  if (!ristretto || !takeAway || !volume || totalCount === 0) {
    setCoffeeData(false);
    return;
  }
  let activeIndex;
  const findItemInBasket = basket.items.find((item, index) => {
    activeIndex = index;
    return item.name === typeOfCoffee.name;
  });
  if (findItemInBasket) {
    updateBasketProduct(
      {
        ...findItemInBasket[0],
        count: totalCount,
        ristretto: ristretto,
        takeaway: takeAway,
        volume: volume,
      },
      basket.id[activeIndex]
    );
  } else {
    updateBasket({
      ...typeOfCoffee,
      count: totalCount,
      ristretto: ristretto,
      takeaway: takeAway,
      volume: volume,
    });
  }
  setCoffeeData({});
  setFlag((prev) => !prev);
};
