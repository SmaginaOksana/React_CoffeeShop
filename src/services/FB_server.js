import {
  getDatabase,
  ref,
  onValue,
  update,
  push,
  remove,
} from "firebase/database";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export function getData(path) {
  const starCountRef = ref(database, "/" + path);
  return new Promise((resolve, reject) => {
    onValue(
      starCountRef,
      (snapshot) => {
        const data = snapshot.val();
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
}
export function updateBasket(item) {
  const dataRef = ref(database, "/basket");
  return push(dataRef, item);
}
export function updateBasketProduct(item, key) {
  const dataRef = ref(database, "/basket/" + key);
  return update(dataRef, item);
}
export function removeBasketProduct(key) {
  const dataRef = ref(database, "/basket/" + key);
  return remove(dataRef, key);
}
export function updateUsers(item) {
  const dataRef = ref(database, "/users");
  return push(dataRef, item);
}
