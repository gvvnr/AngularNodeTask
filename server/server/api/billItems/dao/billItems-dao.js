import Promise from "bluebird";
import models from "../../../models"
export class BillItemsDao {
  static getAll() {
    return new Promise((resolve, reject) => {
      models.BillItems.findAll({
        include:[

/*          {
            model:models.Bill
          },*/
          {
            model:models.item,
            include:[{model:models.ProductModel}]
          }

          ]

      })
        .then(users => {
          //console.log(JSON.stringify(users));
          resolve(users);
        }, (error) => {
          reject(error);
        })
    })
  }




}
