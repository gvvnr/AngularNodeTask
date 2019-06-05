import ProductController from "../controller/product-controller";

export default class ProductRoutes {
  static init(router) {
    router
      .route('/product')
      .get(ProductController.getAll);
    router
      .route('/product/category')
      .get(ProductController.getByCategory);
    router
      .route('/product/filter')
      .get(ProductController.filterBy);
  }


  }
