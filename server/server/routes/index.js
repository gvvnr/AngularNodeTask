import ProductRoutes from '../api/Product/route/product-route';
import ItemRoutes from '../api/items/route/item-route';
import BillRoutes from '../api/bill/route/bill-route';
import RegistrationRoutes from '../api/registration/route/registration-route';
import LoginRoutes from '../api/login/route/login-route';
export default class Routes {
   static init(router) {
     ProductRoutes.init(router);
     ItemRoutes.init(router);
     BillRoutes.init(router);
     RegistrationRoutes.init(router);
     LoginRoutes.init(router);
   }
}
