import LoginController from "../controller/login-controller";

export default class LoginRoutes {
  static init(router) {

    router
      .route('/login')
      .get(LoginController.getbyId);
    console.log('IN Login ROUTE');


  }


}
