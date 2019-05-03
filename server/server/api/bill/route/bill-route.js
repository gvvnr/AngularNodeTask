import BillController from "../controller/bill-controller"

export default class BillRoutes {
  static init(router) {
    console.log('getting into Item routes');
    router
      .route('/bill')
      .get(BillController.getAll)
      .post(BillController.createNew);
    router
      .route('/bill/img')
      .post(BillController.createNewImage)
    .get(BillController.getImage);


  }


}
