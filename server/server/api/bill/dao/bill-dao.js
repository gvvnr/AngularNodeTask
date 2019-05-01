import Promise from "bluebird";
import models from "../../../models"
export class BillDao {


  static getAll() {
    return new Promise((resolve, reject) => {
      models.Bill.findAll({

      })
        .then(users => {
          console.log(JSON.stringify(users));
          resolve(users);
        }, (error) => {
          reject(error);
        })
    })
  }

  static createNew(request) {

    return new Promise((resolve, reject) => {
      models.Bill.create({




        purchasedBy:request.purchasedBy,
        purchasedOn:request.purchasedOn,
        ListOfItems:request.listOfItems,
        total:request.itemsTotalCost

      }).then(body => {
        resolve(body);

      })
        .catch(error => {
          reject(error)
        })
    })
  }

}
