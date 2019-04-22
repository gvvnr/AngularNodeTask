import ItemController from "../controller/item-controller"

export default class ItemRoutes {
  static init(router) {
    console.log('getting into Item routes');
    router
      .route('/item')
      .get(ItemController.getAll)
     .post(ItemController.createNew);

    ;
  }


  }
