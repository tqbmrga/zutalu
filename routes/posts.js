const express = require('express');

const router = express.Router();

router.get('/',(req,res) => {
    res.send('hello posts');
}); 

router.get('/test',(req,res) => {
    res.send('hello test');
}); 


module.exports = router;