const express = require('express')

const router = express.Router()
// const PORT = process.env.PORT || 3000

const { curioDao: dao} = require('../../daos/dao')

// router.get('/', (req, res) => {
//     const url = `http://localhost:${PORT}/api/curio`

//     // const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/curio', {
//                 title: 'All Curios',
//                 name: 'All Curios',
//                 data
//             })
//         })
// })


router.get('/', (req, res) => {
    dao.findAll(res, dao.table)
})

router.get('/count', (req, res) => {
    dao.countAll(res, dao.table)
})

// router.get('/:id', (req, res) => {
//     const id = req.params.id
//     const url = `http://localhost:${PORT}/curio/api/${id}`

//     const fetch = (...args)=> import('node-fetch').then(({default: fetch}) => fetch(...args))

//     fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             res.render('pages/actor_single', {
//                 title: `${data.curio_name}`,
//                 name: `${data.curio_name}`,
//                 data
//             })
//         })
// })

router.get('/:id', (req, res) => {
    dao.findById(res, dao.table, req.params.id)
})

router.post('/create', (req, res) => {
    dao.create(req, res)
})

router.patch('/update/:id', (req, res) => {
    dao.update(req, res)
})

module.exports = router