import {ItemDao} from "../dao/item-dao";

export default class ItemController {

  static getAll(req, res) {
    ItemDao.getAll()
      .then(products => {
        res.status(201).json(products);
      })
      .catch(error => {
        res(error).json(error);
      })

  }
  static createNew(req, res) {

    const _reqBody = req.body;
    for (let i = 0; i < _reqBody["itemValues"].length; i++) {
      ItemDao.createNew(_reqBody["itemValues"][i], _reqBody["billId"].id)
        .then((itemDao) => {
          console.log('controller');
          res.status(201).json(itemDao);
        })
        .catch(error => {
          console.log(error);
        });
    }

  }
    //BulkcreateNew
  static BulkcreateNew(req, res) {

    const _reqBody = req.body;
   // console.log('in controller of bulk',_reqBody["billId"]);
    ItemDao.BulkcreateNew(_reqBody, _reqBody["billId"].id)
      .then( itemDao =>{
        console.log('then in controller',itemDao);
        res.status(201).json(itemDao);

      })
      .catch(error => {
        console.log('controller error page',error);
        console.log(error);
        res(error).json(error);
      });

  }



  //return id;
  /*  ItemDao.createNew(_reqBody)
      .then( res =>{
        console.log('then in controller');
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });*/


}
