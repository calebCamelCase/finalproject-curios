const daoCommon = require('./common/daoCommon')

const curioDao = {
    ...daoCommon,
    ...require('./api/curioDao')
}

module.exports = {
    curioDao
}