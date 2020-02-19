const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');

router.get('/',(req,res) => {
    res.send('hello posts');
}); 

router.post('/',(req,res) => {
    // res.setHeader('Content-Type', 'application/json')    
    // res.end(JSON.stringify(req.body, null, 2))
    
    const post = new Posts({
        title : req.body.title,
        description : req.body.description
    });
    console.log(post);    
    post.save()        
        .then(data => {
            res.json(data);
            console.log('save');
        })
        .catch(err => {
            res.json({message : err})
            console.log('not save');
        });
}); 

// router.get('/test',(req,res) => {
//     res.send('hello test');
// }); 


module.exports = router;