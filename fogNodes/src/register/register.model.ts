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
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registeredDomain: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    modelName: 'register',
    sequelize,
  }
);

export default Register;