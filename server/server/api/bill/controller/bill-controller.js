import {BillDao} from "../dao/bill-dao";

export default class BillController {

  static createNew(req, res) {
    const _reqBody = req.body;
    BillDao.createNew(_reqBody)
        .then(BillDao => {
          res.status(201).json(BillDao);
        })
        .catch(error => {
          console.log(error);
        });


  }

}
