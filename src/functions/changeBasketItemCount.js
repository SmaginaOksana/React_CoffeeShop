export function changeBasketItemCount(count, flag, setTotalCount) {
  if (flag) {
    count += 1;
  } else {
    count -= 1;
    if (count < 0) {
      return;
    }
  }
  setTotalCount(count);
}
