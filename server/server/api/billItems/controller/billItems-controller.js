import {BillItemsDao} from "../dao/billItems-dao";

export default class BillItemsController {
  static getAll(req, res) {
    console.log('in bill-controller');
    console.log(req.query);
    BillItemsDao.findAndCountAll(parseInt(req.query.pageNo),parseInt(req.query.itemsPerPage))//req.body.page
      .then(products => {
        console.log(products);
        res.status(201).json(products);

      })
      .catch(error => {
        console.log('in bill-controller-catch');
        console.log(error);
        res(error).json(error);
      })

  }

  static createNew(req, res) {
    const _reqBody = req.body;
    BillItemsDao.createNew(_reqBody)
        .then(BillDao => {
          res.status(201).json(BillDao);
        })
        .catch(error => {
          res(error).json(error);
        });


  }

}
