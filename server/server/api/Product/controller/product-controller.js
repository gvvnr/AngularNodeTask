import {ProductDao} from "../dao/product-dao";

export default class ProductController {
  static getAll(req, res) {
    console.log('afd');

/*    ProductDao.getAll()
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      });*/
    app.use('/', (req,res) =>{
      res.send("In Productvb");
    });

  }
  //filterBy
  static getByCategory(req, res) {

    ProductDao.getByCategory(req.query)
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }


  static filterBy(req, res) {
   // console.log(req);
    console.log('XYZ');
    console.log(req.query);
    ProductDao.filterBy(req.query)
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }


}
