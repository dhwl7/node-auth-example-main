// const sequelize = new Sequelize('sqlite::memory:');
const { DataTypes } = require("sequelize");
const sequelize = require('../services/postgreSQL');

const Customer = sequelize.define("Customers", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(15)
    },
    age: {
        type: DataTypes.SMALLINT,
        defaultValue: 10,
    },
    team: {
        type: DataTypes.STRING(15)
    },
    // createdAt: {
    //     type: DataTypes.DATE, // Define createdAt column as DATE type
    //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'), // Set default value to current timestamp
    //     allowNull: false
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    //     allowNull: false
    // }
}, {
    freezeTableName: true,  //create a model named Customer pointing to a table also named Customer.
    timestamps: true,
    createdAt: true,
    updatedAt: false
    // updatedAt: 'update_at'
    // tableName: 'any', any anther name
}
);
module.exports = Customer;

// Customer.id;
//Customer = new Customer({ id: 1 });

// Customer.sync();


// Customer.sync({ force : true });
// Customer.sync({ alert : true }); //not using producation
// Customer.drop(); //delete table
// await sequelize.drop();
// sequelize.sync({ force: true, match: /_test$/ });