import ProductController from "../controller/product-controller"

export default class ProductRoutes {
  static init(router) {
    router
      .route('/product')
      .get(ProductController.getAll);
     console.log('product');
    ;
  }


  }
