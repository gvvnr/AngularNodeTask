import ProductController from "../controller/product-controller"

export default class ProductRoutes {
  static init(router) {
    console.log('getting into coffee route');
    router
      .route('/product')
      .get(ProductController.getAll);
     console.log('product');
    ;
  }


  }
