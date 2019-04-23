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
    console.log('In body');
    console.log(_reqBody[0].product_id);
    for(let i=0;i<_reqBody.length;i++) {
      ItemDao.createNew(_reqBody[i])
        .then(() => {
          console.log(res.status(201));
        })
        .catch(error => {
          console.log(error);
        });
    }

  }

}
