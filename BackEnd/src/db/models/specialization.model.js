const { Model, DataTypes, Sequelize} = require('sequelize');
const SPECIALIZATION_TABLE = 'specializations';
class Specialization extends Model{
    static config(sequelize){
        return{
            sequelize,
            tablename: SPECIALIZATION_TABLE,
            modelName:'Specialization',
            timestamps: true
        }
    }
}

const SpecializationSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    specialization_name:{
        allowNull:false,
        type: DataTypes.STRING,
        field:'specialization_name'
    },
    hospital_id:{
        allowNull:false,
        type: DataTypes.INTEGER,
        field: 'hospital_id'
    }
}


module.exports = {Specialization, SpecializationSchema} ;