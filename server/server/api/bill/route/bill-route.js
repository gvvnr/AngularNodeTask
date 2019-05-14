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
    router
      .route('/bill/search/price')
      .get(BillController.searchByMinAndMaxPrice);
    router
      .route('/bill/search/date')
      .get(BillController.searchByDate);

  }


}
