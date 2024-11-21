export const getData = async (url) => {
  try {
    const responce = await fetch(`http://localhost:3001/${url}`);
    const data = responce.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
