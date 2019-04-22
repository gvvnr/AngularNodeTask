import {BillDao} from "../dao/bill-dao";

export default class BillController {

  static createNew(req, res) {
    const _reqBody = req.body;
    BillDao.createNew(_reqBody)
        .then(ShopDao => {
          res.status(201).json(ShopDao);
        })
        .catch(error => {
          console.log(error);
        });


  }

}
