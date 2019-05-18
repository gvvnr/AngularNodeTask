import Promise from "bluebird";
import models from "../../../models";
import Sequelize from "sequelize";
const Op = Sequelize.Op;
export class ProductDao {

  static getAll() {
    return new Promise((resolve, reject) => {
      models.ProductModel.findAll({

      })
        .then(users => {
          resolve(users);
        }, (error) => {
         // console.log(error);
          reject(error);
        })
    })
  }
  //getByCategory
  static getByCategory(_category) {
    return new Promise((resolve, reject) => {
      models.ProductModel.findAll({
        where:{
          category:_category.category
        }

      })
        .then(users => {
          resolve(users);
        }, (error) => {
          // console.log(error);
          reject(error);
        })
    })
  }
  //filterBy
  static filterBy(data) {
    return new Promise((resolve, reject) => {
      var whereStatement =[];
      console.log('aaa');
      if(data.Blue=='true'){
        whereStatement.push({color:'Blue'})
      }
      if(data.Green=='true'){
        whereStatement.push({color:'Green'})
      }
      if(data.White=='true'){
        whereStatement.push({color:'White'})
      }
      models.ProductModel.findAll({
        where:{
          category:data.category,
          [Op.or]:whereStatement
        }

      })
        .then(users => {
          resolve(users);
        }, (error) => {
          // console.log(error);
          reject(error);
        })
    })
  }

  }
/*
 category:data.category,
          [Op.and]:{
            color:{

              [Op.like]:'%'+data.color+'%'
            }

          }
 */
