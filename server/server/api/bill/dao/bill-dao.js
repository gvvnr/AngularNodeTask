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
  static SearchByDate(pageData,limit,date) {
    return new Promise((resolve, reject) => {
      let offset = limit * (pageData - 1);
          models.Bill.findAndCountAll({

            where:{
              'createdAt': {
                [Op.gte]:new Date(date),
                [Op.lte]:new Date(new Date(date).setUTCHours(23,59,59,9999))//.setHours(23)
              }
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
              resolve(result);
            })
            .catch(err =>{
              reject(err);
            });
        })

  }


  static searchByPrice(pageData,limit,max,priceType) {
    return new Promise((resolve, reject) => {
      let priceDifference;
      if(priceType=='Max')
       priceDifference=Op.lte;
      else if(priceType=='Min')
        priceDifference=Op.gte;

          let offset = limit * (pageData - 1);

          models.Bill.findAndCountAll({

            where:{
                  'total': {
                    [priceDifference]:max
                  }
            }
            ,
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
              //console.log(result);
              resolve(result);
            })
            .catch(err =>{
            //  console.log(err);
             reject(err);
            });
        })


  }
  static searchAndGetByCoulmnName(pageData,limit,searchCoulmnName,searchingItem) {
    return new Promise((resolve, reject) => {
      let page = pageData;
      let offset = limit * (pageData - 1);
          models.Bill.findAndCountAll({

            where:{
              [Op.or]: [
                {
                  [searchCoulmnName]: {
                    [Op.iLike]: '%'+searchingItem+'%'
                  }
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
              resolve(result);
            })
            .catch(err =>{
              reject(err);
            });
        })


  }




  static findAndCountAll(pageData,limit,searchingItem) {//----search by purchasedon and purchasedby----
    return new Promise((resolve, reject) => {
      models.Bill.findAndCountAll({

      })
        .then( data =>{
          console.log(searchingItem);
          let data1=0;
         console.log(data.count,'DATA COUNT11',limit);
         if(Number(searchingItem))
             data1= Number(searchingItem);
         else
           data1=0;
         let page = pageData;      // page number
          let offset = limit * (page - 1);
          models.Bill.findAndCountAll({

            where:{
              [Op.or]: [
                {
                  purchasedBy: {
                    [Op.iLike]: '%'+searchingItem+'%'
                  }
                },
                {
                  purchasedOn: {
                    [Op.iLike]: '%'+searchingItem+'%'
                  },

                },
                {

                  total:{
                    [Op.eq]:data1
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
