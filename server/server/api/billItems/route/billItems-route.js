import BillItemsController from "../controller/billItems-controller";

export default class BillItemsRoutes {
  static init(router) {
    console.log('getting into Item routes');
    router
      .route('/billItems')
      .get(BillItemsController.getAll)
      .post(BillItemsController.createNew);

  }


}
