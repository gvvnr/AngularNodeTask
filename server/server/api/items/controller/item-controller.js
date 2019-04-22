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
    //console.log(_reqBody);
    for(let i=0;i<_reqBody.length;i++) {
      ItemDao.createNew(_reqBody[i])
        .then(ShopDao => {
          //res.status(201).json(ShopDao);
        })
        .catch(error => {
          console.log(error);
        });
    }

  }

}
