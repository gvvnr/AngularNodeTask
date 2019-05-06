import {BillDao} from "../dao/bill-dao";
import {ProductDao} from "../../Product/dao/product-dao";

export default class BillController {

  static getAll(req, res) {
    console.log('SSSSSSSSSSSSSSS');
    BillDao.findAndCountAll(parseInt(req.query.pageNo),parseInt(req.query.itemsPerPage))
      .then(products => {
        console.log('In controller');
        console.log(JSON.stringify(products));
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }
//getById
  static getById(req, res) {
    console.log(req.query.id,'aaaaa');
    BillDao.getById(req.query.id)
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

  static createNewImage(req, res) {
    const _reqBody = req.body;
    console.log('req body');
   // console.log(req.body);
    BillDao.createNewImage(_reqBody)
      .then(BillDao => {
        res.status(201).json(BillDao);
      })
      .catch(error => {
        console.log(error);
      });


  }

}
