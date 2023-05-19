const express = require('express')
const router = express.Router()
const PORT = process.env.PORT || 3001

// router.use(express.static("public"))

router.get('/api', (req, res)=> {
    res.json({
        'All Curios': `http://localhost:${PORT}/api/curio`
    })
})

router.use('/api/curio', require('./api/curioRoutes'))

// router.get('/', (req, res) => {
//     res.render('pages/home', {
//         title: 'Home',
//         name: 'Curio Catalog'
//     })
// })

// router.get('*', (req, res) => {
//     if(req.url == '/favicon.ico/') {
//         res.end()
//     } else {
//         res.render('pages/404', {
//             title: '404 Error',
//             name: '404 Error'
//         })
//     }
// })

module.exports = router