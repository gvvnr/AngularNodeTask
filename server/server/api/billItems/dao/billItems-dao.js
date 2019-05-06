import Promise from "bluebird";
import models from "../../../models"
export class BillItemsDao {

  static findAndCountAll(pageData,limit) {

    return new Promise((resolve, reject) => {
      console.log('billItems DAO');
    //  let limit=5;
      models.Bill.findAll()
        .then(data=>{
          let page = pageData;      // page number
          let pages = Math.ceil(data.count / limit);
          let offset = limit * (page - 1);
          models.Bill.findAndCountAll({
            limit: limit,
            offset: offset,
            order: [
              ['createdAt', 'DESC'],

            ],
            include:[

              {
                model:models.item
                //BillItems//Bill
              },
              /*{
                model:models.item,
                include:[{model:models.ProductModel}]
              }*/

            ]
          }).then(result =>{

            resolve(result);
          })
            .catch(err =>{
              reject(err);
            });

        },
          )
        .catch(error=>{
          reject(error);
        })

    })
  }




}
/* offset: parseInt(val), limit: 2,
  order: [
    ['id', 'DESC']
  ],*/
/* include:[

   {
     model:models.Bill
   },
   {
     model:models.item,
     include:[{model:models.ProductModel}]
   }

   ]*/
