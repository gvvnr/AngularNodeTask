import {BillDao} from "../dao/bill-dao";
import {ProductDao} from "../../Product/dao/product-dao";

export default class BillController {

  static getAll(req, res) {
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
  //getImage

  static getImage(req, res) {
    BillDao.findAndCountAllImage(parseInt(req.query.pageNo),parseInt(req.query.itemsPerPage))
      .then(products => {
        console.log('In controller');
        console.log(JSON.stringify(products));
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
//createNewImage
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
