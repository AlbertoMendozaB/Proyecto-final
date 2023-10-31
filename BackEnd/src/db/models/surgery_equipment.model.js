const { Model, DataTypes, Sequelize} = require('sequelize');
const SURGERY_EQUIPMENT_TABLE = 'surgery_equipments';
class Surgery_Equipment extends Model{
    static config(sequelize){
        return{
            sequelize,
            tablename: SURGERY_EQUIPMENT_TABLE,
            modelName:'surgery_equipment',
            timestamps: true
        }
    }
}

const Surgery_EquipmentSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    specialization_id:{
        allowNull:false,
        type: DataTypes.INTEGER,
        field:'specialization_Id'
    },
    surgery_equipments_name:{
        allowNull:false,
        type: DataTypes.STRING,
        field: 'surgery_equipments_name'
    }
}


module.exports = {Surgery_Equipment, Surgery_EquipmentSchema} ;