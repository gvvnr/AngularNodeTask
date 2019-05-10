import Promise from "bluebird";
import models from "../../../models"
import Sequelize from "sequelize";
const Op = Sequelize.Op
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
  static searchAndGetByCoulmnName(pageData,limit,searchCoulmnName,searchingItem) {
    return new Promise((resolve, reject) => {
      models.Bill.findAndCountAll({

      })
        .then( data =>{
          let item=0;
            item=Number(searchingItem);
          console.log(data.count,'DATA COUNT',item);
          let page = pageData;      // page number
        //  let pages = Math.ceil(data.count / limit);
          let offset = limit * (page - 1);

          models.Bill.findAndCountAll({

            where:{
              [Op.or]: [
                {
                  [searchCoulmnName]: {
                    [Op.like]: '%'+searchingItem+'%'
                  }
                },

              ]
            },
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
              console.log(result);
              resolve(result);
            })
            .catch(err =>{
              console.log(err);
              reject(err);
            });
        })

    })
  }




  static findAndCountAll(pageData,limit,searchingItem) {//----search by purchasedon and purchasedby----
    return new Promise((resolve, reject) => {
      models.Bill.findAndCountAll({

      })
        .then( data =>{
          console.log(searchingItem);
          let data1=0;
         console.log(data.count,'DATA COUNT11',Number(searchingItem));
         data1= Number(searchingItem);
         let page = pageData;      // page number
          let pages = Math.ceil(data.count / limit);
          let offset = limit * (page - 1);
          models.Bill.findAndCountAll({

            where:{
              [Op.or]: [
                {
                  purchasedBy: {
                    [Op.like]: '%'+searchingItem+'%'
                  }
                },
                {
                  purchasedOn: {
                    [Op.like]: '%'+searchingItem+'%'
                  },

                },
                {

                  total:{
                    [Op.eq]:Number(searchingItem)
                  },
                }
              ]
          },
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
              console.log(JSON.stringify(result));
              resolve(result);
            })
            .catch(err =>{
              console.log(err);
             // reject(err);
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
