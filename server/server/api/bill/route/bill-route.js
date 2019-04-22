import BillController from "../controller/bill-controller"

export default class BillRoutes {
  static init(router) {
    console.log('getting into Item routes');
    router
      .route('/bill')
      //.get(ItemController.getAll)
      .post(BillController.createNew);

    ;
  }


}
