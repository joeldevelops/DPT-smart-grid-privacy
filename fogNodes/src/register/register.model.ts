// Model definition for the Register table

import { Model, DataTypes } from 'sequelize';

import sequelize from '../db';

class Register extends Model {
  public id!: number;
  public userId: string;
  public name!: string;
  public registeredDomain!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Initialize within PG
Register.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    registeredDomain: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    modelName: 'register',
    sequelize,
  }
);

export default Register;