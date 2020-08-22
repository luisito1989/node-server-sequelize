const Sequelize = require('sequelize');
const BDInfo = require('./connection');

const database = "heroku";
let bddata = {};

BDInfo.forEach(bd => {
    if(bd.name === database){
        bddata = bd.connect;
    }
});

const sequelize = new Sequelize(bddata.database, bddata.user, bddata.password, {
    host: bddata.server,
    dialect: bddata.type
});

module.exports = sequelize;