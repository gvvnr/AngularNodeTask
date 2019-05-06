import Promise from "bluebird";
import models from "../../../models"

export class BillDao {


  static getById(_paramet) {
    return new Promise((resolve, reject) => {
      models.Bill.findAll({where : { id: _paramet},
          include:[

            {
              model:models.item,
              include:[{model:models.ProductModel}]
            }
          ]
      },

        )
        .then(post => {
          resolve(post);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  }


  static findAndCountAll(pageData,limit) {
    return new Promise((resolve, reject) => {
      models.Bill.findAndCountAll({

      })
        .then( data =>{
         console.log(data.count,'DATA COUNT');
          let page = pageData;      // page number
          let pages = Math.ceil(data.count / limit);
          let offset = limit * (page - 1);

          models.Bill.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [
              ['createdAt', 'DESC']
            ],
            include:[

              {
                model:models.item,
                include:[{model:models.ProductModel}]
              }
              ]
          })
            .then(result =>{
              resolve(result);
            })
            .catch(err =>{
              reject(err);
            });
        })

    })
  }
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



  static createNew(request) {
  console.log('In Bill DAO');
    return new Promise((resolve, reject) => {
      models.Bill.create({




        purchasedBy:request.purchasedBy,
        purchasedOn:request.purchasedOn,
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
