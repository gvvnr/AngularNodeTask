import {BillDao} from "../dao/bill-dao";
import {ProductDao} from "../../Product/dao/product-dao";

export default class BillController {

  static getAll(req, res) {
    BillDao.getAll()
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }

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
