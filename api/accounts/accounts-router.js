const router = require('express').Router()


// TEST ERR: http get :9000/api/accounts -v
router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  try{
    throw new Error('argh!!!')
  }catch(err){
    next(err)
  }
})

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status|| 500).json({
    message: err.message
  })
})

module.exports = router;
