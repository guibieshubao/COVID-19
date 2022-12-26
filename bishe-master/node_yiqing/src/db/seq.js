const { Sequelize } = require('sequelize')

// !连接数据库
const seq = new Sequelize('node', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})
// const seq=new Sequelize({
//     host:'localhost',
//     port:3306,
//     database:'vue_store',
//     user:'root',
//     password:'123456',
//     dialect: 'mysql'

// })

seq.authenticate().then(() => {
    console.log('数据库链接成功');
}).catch(err => {
    console.log(err);
})

module.exports = seq