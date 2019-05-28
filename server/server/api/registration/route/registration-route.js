import RegistrationController from "../controller/registration-controller";

export default class RegistrationRoutes {
  static init(router) {

    router
      .route('/register')
      .post(RegistrationController.createNew);



  }


}
