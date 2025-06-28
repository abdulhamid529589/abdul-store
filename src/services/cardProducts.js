export const product = () => {
  return fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((data) => data);
};

export const allProduct = () => {
  return fetch("https://dummyjson.com/products?limit=100&skip=0")
    .then((res) => res.json())
    .then((data) => data);
};
export const ProductByCategory = (category) => {
  return fetch(`https://dummyjson.com/products/category/${category}`)
    .then((res) => res.json())
    .then((data) => data);
};
export const singleProduct = (id) => {
  return fetch(`https://dummyjson.com/products/${id}`)
    .then((res) => res.json())
    .then((data) => data);
};

