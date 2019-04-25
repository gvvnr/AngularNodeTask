import Promise from "bluebird";
import models from "../../../models"
export class BillItemsDao {

  static getAll() {
    return new Promise((resolve, reject) => {
      models.BillItems.findAll({

      })
        .then(users => {
          console.log(JSON.stringify(users));
          resolve(users);
        }, (error) => {
          // console.log(error);
          reject(error);
        })
    })
  }




}
