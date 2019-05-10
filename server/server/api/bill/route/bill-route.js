import BillController from "../controller/bill-controller"

export default class BillRoutes {
  static init(router) {

    router
      .route('/bill')
      .get(BillController.getAll)
      .post(BillController.createNew);

    router
      .route('/bill/id')
      .get(BillController.getById);
    //'/bill/search/coulmn'
    router
      .route('/bill/search/coulmn')
      .get(BillController.searchAndGetByCoulmnName);

  }


}
