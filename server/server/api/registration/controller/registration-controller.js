import {RegistrationDao} from "../dao/registration-dao"

export default class RegistrationController {




    static createNew(req, res) {
    const _reqBody = req.body;
    console.log(req.body);
    console.log('-------------------------');

  //  console.log(req);
      RegistrationDao.createNew(_reqBody)
        .then(BillDao => {
          res.status(201).json(BillDao);
        })
        .catch(error => {
          console.log(error);
        });


  }


}
