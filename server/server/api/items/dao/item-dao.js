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
  static createNew(request,billId) {
      return new Promise((resolve, reject) => {

        models.item.create({
          product_id:request.product_id,
          quantity: request.quantity,
          totalCost:request.totalCost
        })
          .then(resp =>{
            models.BillItems.create({
              bill_id:billId,
              item_id:resp.id
            })
          })
      .then( (item) => {
          resolve(item)
        })
        .catch(error => {
          reject(error)
        })
    })
  }





  static BulkcreateNew(request,billId) {

    return new Promise((resolve, reject) => {
      var productList = [];
      for(let i=0;i<request.itemValues.length;i++){
        productList.push({
          product_id:request.itemValues[i].product_id,
          quantity: request.itemValues[i].quantity,
          totalCost:request.itemValues[i].totalCost

        })
      }
      models.item.bulkCreate(productList,{returning: true})
        .then(resp =>{
          var billList=[];
          for(let i=0;i<resp.length;i++){
            billList.push({
              bill_id:billId,
              item_id:resp[i].id
            })
          }
          models.BillItems.bulkCreate(billList, {returning:true})
        })
        .then((list)=>{
          resolve(list);
        })
        .catch(error => {
          reject(error)
        })
    })
  }

  }
