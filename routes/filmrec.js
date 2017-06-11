// this file would be able to route the API to the recommended film database.
// In the future I would like to have the API set up to resolve the issue of connecting the client and server.
const filmRouter = require('express').Router();
let fetch = require('node-fetch');

 let allFilms = [];

 filmRouter.get('/film', function showAllFilms(req, res, next){
 fetch(//'the fresh potato api',
    {
     method:'GET'
    }
    ).then(function handleRes(resObj){
     return resObj.json();
    }).then(function resData(data){
     return res.json(data);
    }).catch(function handleErr(err){
     console.log(err);
      res.status(500);
      res.json({ error: 'Unable to load your data from the  API'});
    });
  });
 module.exports = filmRouter;
