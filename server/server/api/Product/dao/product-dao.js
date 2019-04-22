import Promise from "bluebird";
import models from "../../../models"
export class ProductDao {

  static getAll() {
    return new Promise((resolve, reject) => {
      models.ProductModel.findAll({

      })
        .then(users => {
          console.log(JSON.stringify(users));
          resolve(users);
        }, (error) => {
          console.log(error);
         // reject(error);
        })
    })
  }

  }
