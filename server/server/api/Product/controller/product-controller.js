import {ProductDao} from "../dao/product-dao";

export default class ProductController {
  static getAll(req, res) {
    ProductDao.getAll()
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }

}
