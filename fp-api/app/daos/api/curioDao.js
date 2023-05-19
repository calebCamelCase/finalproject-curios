const con = require('../../config/dbconfig')

const curioDao = {
    table: 'curio',

    create: (req,res) => {
        if(Object.keys(req.body).length === 0) {
            res.json({
                "error": true,
                "message": "No fields to create."
            })
        } else {
            const fields = Object.keys(req.body) //creates an array
            const values = Object.values(req.body)

            con.execute(
                `Insert Into curio Set ${fields.join(' = ?, ')} = ?;`,
                values,
                (error, dbres) => {
                    if(!error) {
                        res.send(`Last id: ${dbres.insertId}`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error creating record')
                    }
                }
            )
        }
    },

    update: (req, res) => {
        if(isNaN(req.params.id)){
            res.json({
                "error": true,
                "message": "Id must be a number."
            })
        } else if (Object.keys(req.body.length === 0)) {
            res.json({
                "error": true,
                "message": "No fields to update."
            })
        } else {
            const fields = Object.keys(req.body)
            const values = Object.values(req.body)

            con.execute(
                `Update curio Set ${fields.join(' = ?, ')} = ? Where curio_id = ?;`,
                [...values, req.params.id],
                (error, dbres) =>{
                    if(!error) {
                        res.send(`Changed ${dbres.changedRows} row(s)`)
                    } else {
                        console.log('DAO ERROR', error)
                        res.send('Error updating record')
                    }
                }
            )
        }
    }
}

module.exports = curioDao