import Promise from "bluebird";
import models from "../../../models";
import Sequelize from "sequelize";
export class RegistrationDao {

  static createNew(request) {

    return new Promise((resolve, reject) => {
      console.log(request.emailid)
      models.Registration.create({
        name:request.name,
        emailId:request.emailId,
        password:request.password

      }).then(body => {
        resolve(body);

      })
        .catch(error => {
          reject(error);
        })
    })
  }

}
