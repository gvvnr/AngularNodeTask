import Promise from "bluebird";
import models from "../../../models"
export class ItemDao {

  static getAll() {
    return new Promise((resolve, reject) => {
      models.item.findAll({

      })
        .then(users => {
          console.log(JSON.stringify(users));
          resolve(users);
        }, (error) => {
          console.log(error);
          reject(error);
        })
    })
  }
  static createNew(request) {
   // console.log(request[0].product_id);
    console.log('--------------');
       console.log('in DOB');
      return new Promise((resolve, reject) => {
        models.item.create({
            product_id:request.product_id,
            quantity: request.quantity,
            totalCost:request.totalCost,

          }

        )
      .then( (body) => {
        console.log('body');
         // resolve(body)
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  }
