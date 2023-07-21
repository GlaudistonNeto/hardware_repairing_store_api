const bcrypt = require("bcrypt");
const knex = require("../database/connection");
const PasswordToken = require('./PasswordToken');

// service

class User {
  async findAll(){
    try{
        var result = await knex.select(["id", "name", "phone", "email"])
                               .table("users");
        return result;
    }catch(err){
        console.log(err);
        return [];
    }
  }

  async findById(id) {
    try{
      var result = await knex.select(["id", "name", "phone", "email"])
                             .where({id: id}).table("users");
      if (result.length > 0) {
        return result[0];
      } else {
        return undefined;
      }
  }catch(err){
      console.log(err);
      return undefined;
  }
  }

  async findByEmail(email) {
    try {
      var result = await knex.select("*")
                             .where({email: email})
                             .table("users");
      
      if (result.length > 0) {
        return result[0];
      } else {
        return undefined;
      }
    } catch (err) {
      console.log(err);
      return undefined;
    }
  }

  async new(name,phone,email,password){
      try{
          var hash = await bcrypt.hash(password, 10);
          await knex.insert({name,phone,email,password: hash})
                    .table("users");
      }catch(err){
          console.log(err);
      }
  }

  async findEmail(email){
      try{
          var result = await knex.select("*")
                                 .from("users")
                                 .where({email: email});
          
          if(result.length > 0){
              return true;
          }else{
              return false;
          }

      }catch(err){
          console.log(err);
          return false;
      }
  }

  async update(id, name, phone, email) {
    var user = await this.findById(id);

    if (user != undefined) {
      var editUser = {};

      if (email != undefined) {
        if (email != user.email) {
          var result = await this.findEmail(email);
          if (result == false) {
            editUser.email = email;
          } else {
            return { status: false, msg: "User email already registered." };
          }
        }
      }

      if (name != undefined) {
        editUser.name = name;
      }

      if (role != undefined) {
        editUser.phone = phone;
      }

      try {
        await knex.update(editUser).where({ id: id }).table("users");
        return ({ status: true });
      } catch (err) {
        return ({ status: false, err });
      }
    } else {
      return ({ status: false, err: "User does not exist." });
    }
  }

  async delete(id) {
    var user = await this.findById(id);

    if (user != undefined) {
      try {
        await knex.delete().where({id: id}).table("users");
        return {status: true}
      } catch (err) {
        return {status: false, err: err}
      }
    } else {
      return {status: false, err: "This user does not exist. It cannot be deleted."}
    }
  }

  async changePassword(newPassword, id, token) {
    var hash = await bcrypt.hash(newPassword, 10);
    await knex.update({ password: hash })
              .where({ id: id })
              .table("users");
    await PasswordToken.setUsed(token);
  }
}

module.exports = new User();