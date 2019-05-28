import Promise from "bluebird";
import models from "../../../models";
import Sequelize from "sequelize";

import * as jwt from 'jsonwebtoken';


const Op = Sequelize.Op;

export class LoginDao {

  static getById(data) {

    return new Promise((resolve, reject) => {
      console.log('In DAO');
      models.Registration.findAndCountAll({
        where:{
          [Op.and]:[{emailId:data.emailId},{password:data.password}]
        }
      }).then(res => {
        if(res.count==1){
          const jwtBearerToken = jwt.sign({userID: res.id,Name:res.name,emailId:res.emailId}, 'todo-app-super-shared-secret', {expiresIn: '2h'});
          resolve(jwtBearerToken);

        }

        console.log('login DAO')
        resolve(res);

      })
        .catch(error => {
          console.log('login catch dao');
          reject(error);
        })
    })
  }

}
