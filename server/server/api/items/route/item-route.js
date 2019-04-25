import ItemController from "../controller/item-controller"

export default class ItemRoutes {
  static init(router) {
    router
      .route('/item')
      .get(ItemController.getAll)
     .post(ItemController.createNew);

    //bulkInsert
    router
      .route('/bulkInsert')
      .post(ItemController.BulkcreateNew)
  }


  }
