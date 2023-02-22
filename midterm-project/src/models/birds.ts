import { Sequelize, DataTypes, InferAttributes, InferCreationAttributes, Model, } from "sequelize";


export class Birds extends Model<InferAttributes<Birds>, InferCreationAttributes<Birds>>{
    declare birdId: number;
    declare name: string;
    declare species: string;
    declare description: string;
    declare price: number;
    declare image: string;
    declare createdAt?: Date;
    declare updatedAt?: Date;
}

export function BirdFactory(sequelize: Sequelize) {
    Birds.init({
        birdId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false   
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW,
        }
    }, {
        freezeTableName: true,
        tableName: 'birds',
        sequelize
    })
};