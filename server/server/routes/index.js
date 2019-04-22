import TodoRoutes from "../api/todo/route/todo-route";
import ProductRoutes from "../api/Product/route/product-route"
import ItemRoutes from "../api/items/route/item-route";
import BillRoutes from "../api/bill/route/bill-route";
export default class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     ProductRoutes.init(router);
     ItemRoutes.init(router);
     BillRoutes.init(router);
     

     app.use("/", router);
   }
}
