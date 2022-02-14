const router = require('express').Router()


// TEST ERR: http get :9000/api/accounts -v
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  // http get :7000/api/accounts -v
  // res.send('TEST: GET /api/accounts')
  try{
    // throw new Error('argh!!!')
    res.json([{},{}])
  }catch(err){
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  // http get :7000/api/accounts/1 -v
  // res.send('TEST: GET /api/accounts/1') 
  try{

  }catch(err){
    next(err)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
  // http post :7000/api/accounts name=fff budget=ffffff -v
  // res.json("TEST: create by endpoint")
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  // http put :7000/api/accounts/2 name=fff budget=ffffff -v
  // res.json('TEST: update by endpoint') 
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
  // http delete :7000/api/accounts/7  -v
  // res.json('test delete by endpoint')
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status|| 500).json({
    message: err.message
  })
})

module.exports = router;
