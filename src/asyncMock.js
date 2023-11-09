const products = [
  {
    id: "1",
    name: "Landing Page",
    price: "100",
    category: "Landing",
    img: "https://t4.ftcdn.net/jpg/02/47/67/13/360_F_247671337_hq1PMPFztZ5hZsMbV9nWNyxM7BYnlD6I.jpg",
    stock: "10",
    description: "Landing Page de diseño elegante y moderno ",
  },
  {
    id: "4",
    name: "Landing Page 2",
    price: "100",
    category: "Landing",
    img: "https://t4.ftcdn.net/jpg/02/47/67/13/360_F_247671337_hq1PMPFztZ5hZsMbV9nWNyxM7BYnlD6I.jpg",
    stock: "10",
    description: "Landing Page de diseño elegante y moderno ",
  },
  {
    id: "2",
    name: "Web Empresarial",
    price: "150",
    category: "Web",
    img: "https://d1ih8jugeo2m5m.cloudfront.net/2021/12/ejemplos-de-paginas-web-01-1200x685.jpg",
    stock: "4",
    description: "Web de diseño elegante y moderno, incluye 5 pages",
  },
  {
    id: "3",
    name: "E-Commerce",
    price: "300",
    category: "E-Commerce",
    img: "https://100seguro.com.ar/wp-content/uploads/2020/06/ecommerce.jpg",
    stock: "3",
    description:
      "Web de comercio Digital de diseño elegante y moderno, Autogestionable, incluye apis de MP",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((product) => {
        return product.id == id;
      });

      product ? resolve(product) : reject("Producto no encontrado");
    }, 1000);
  });
};
export const getProductByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.filter((product) => {
        return product.category == category;
      });

      product ? resolve(product) : reject("Producto no encontrado");
    }, 1000);
  });
};
