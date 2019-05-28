import {LoginDao} from "../dao/login-dao";

export default class LoginController {

    static getbyId(req, res) {
      LoginDao.getById(req.query)
        .then(BillDao => {
          res.status(201).json(BillDao);
        })
        .catch(error => {
          console.log(error);
        });
  }


}
