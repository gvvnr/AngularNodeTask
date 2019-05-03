import Promise from "bluebird";
import models from "../../../models"
export class BillDao {


  static findAndCountAll(pageData,limit) {
    return new Promise((resolve, reject) => {
      models.Bill.findAndCountAll({

      })
        .then( data =>{
          let page = pageData;      // page number
          let pages = Math.ceil(data.count / limit);
          let offset = limit * (page - 1);

          models.Bill.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [
              ['createdAt', 'DESC']
            ]
          })
            .then(result =>{
              resolve(result);
            })
            .catch(err =>{
              reject(err);
            });
        })

/*        .then(users => {
          console.log(JSON.stringify(users));
          resolve(users);
        }, (error) => {
          reject(error);
        })*/
    })
  }
//findAndCountAllImage
  static findAndCountAllImage(pageData,limit) {
    return new Promise((resolve, reject) => {
      models.ExamplePhoto.findAndCountAll({

      }).then(result =>{
        resolve(result);
      })
        .catch(err =>{
          reject(err);
        });
    })
  }

  static createNewImage(request) {

    return new Promise((resolve, reject) => {
      //console.log(request);
      console.log('image---------------------');
      //console.log(request.name);
      models.ExamplePhoto.create({




        photo:request

      }).then(body => {
        console.log('image then');
        console.log(body.photo);
        resolve(body);

      })
        .catch(error => {
          reject(error)
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
