import Promise from "bluebird";
import models from "../../../models"
export class BillDao {

  static createNew(request) {
    console.log('--------------');
    //let i:any;
    console.log('aa');
  //  console.log(request[0]);
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
/*
* models.Bill.create({

        purchasedBy:request.purchasedBy,
        purchasedOn:request.purchasedOn,
        ListOfItems:request.listOfItems,
        total:request.itemsTotalCost



      })*/
