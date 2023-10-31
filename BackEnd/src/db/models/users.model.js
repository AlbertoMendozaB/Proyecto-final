const { Model, DataTypes, Sequelize} = require('sequelize');
const USERS_TABLE = 'users';
class User extends Model{
    static config(sequelize){
        return{
            sequelize,
            tablename:USERS_TABLE,
            modelName:'user',
            timestamps: true
        }
    }
}

const UserSchema ={
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    email:{
        allowNull:false,
        type: DataTypes.STRING,
        field:'email'
    },
    password:{
        allowNull:false,
        type: DataTypes.STRING,
        field:'password'       
    },
    idHospital:{
        allowNull:true,
        type: DataTypes.INTEGER,
        field: 'idHospital'
    }
}


module.exports = {User, UserSchema} ;