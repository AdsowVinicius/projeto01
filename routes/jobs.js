const express   = require('express');
const Job       = require('../models/job');
const router    = express.Router();


router.get('/test', (req, res) => {
    res.send('deu certo');
});


//ADD JOB VIAS POST
router.post('/add', (req, res)=> {
    let {title, salary, company, description, email, new_job} = req.body;

    //insert
    Job.create({
        title,
        salary, 
        company, 
        description, 
        email, 
        new_job
    })
    .then(() => res.redirect('/'))
    .catch(err => console.log(err));

});
module.exports = router
