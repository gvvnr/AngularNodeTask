import {BillDao} from "../dao/bill-dao";

export default class BillController {

  static getAll(req, res) {
    BillDao.findAndCountAll(parseInt(req.query.pageNo),parseInt(req.query.itemsPerPage),req.query.search)
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }
  static searchAndGetByCoulmnName(req, res) { ///--search by specific coulmn name-----------------//

    BillDao.searchAndGetByCoulmnName(parseInt(req.query.pageNo),parseInt(req.query.itemsPerPage),req.query.searchCoulmnName,req.query.search)
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }

  static searchByMinAndMaxPrice(req, res) { ///--search by difference in price cou,mn of pagination-----------------//

    BillDao.searchByPrice(parseInt(req.query.pageNo),parseInt(req.query.itemsPerPage),parseInt(req.query.max),req.query.priceType)
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }
  static searchByDate(req, res) {
    BillDao.SearchByDate(parseInt(req.query.page),parseInt(req.query.itemsPerPage),req.query.date)
      .then(BillDao => {
        res.status(201).json(BillDao);
      })
      .catch(error => {
        console.log(error);
      });


  }

  static getById(req, res) {
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
    BillDao.createNewImage(_reqBody)
      .then(BillDao => {
        res.status(201).json(BillDao);
      })
      .catch(error => {
        console.log(error);
      });


  }

}
