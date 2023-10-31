const { Model, DataTypes, Sequelize} = require('sequelize');
const HOSPITAL_TABLE = 'hospitals';
class Hospital extends Model{
    static config(sequelize){
        return{
            sequelize,
            tablename: HOSPITAL_TABLE,
            modelName:'hospital',
            timestamps: true
        }
    }
}

const HospitalSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    hospital_name:{
        allowNull:false,
        type: DataTypes.STRING,
        field:'hospital_name'
    }
}


module.exports = {Hospital, HospitalSchema} ;