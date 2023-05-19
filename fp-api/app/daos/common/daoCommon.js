const con = require('../../config/dbconfig')

const daoCommon = {
    findAll: (res, table) => {
        con.execute(
            `Select * From ${table};`,
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    },
    
    findById: (res, table, id) => {
        con.execute(
            `Select * From ${table} Where ${table}_id = ?;`,
            [id],
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    },

    countAll: (res, table) => {
        con.execute(
            `Select Count(*) count From ${table};`,
            (error, rows) => {
                if(!error) {
                    if(rows.length === 1) {
                        res.json(...rows)
                    } else {
                        res.json(rows)
                    }
                } else {
                    console.log('DAO ERROR', error)
                }
            }
        )
    }
}

module.exports = daoCommon