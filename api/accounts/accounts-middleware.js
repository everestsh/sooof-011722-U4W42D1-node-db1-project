const Account = require('./accounts-model')
const db = require('../../data/db-config')

//  http post :9000/api/accounts name=aa budget:=1000 -v   
// http post :9000/api/accounts name=aaa budget="1000" -v
exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
  // console.log('checkAccountPayload middleware')
  // next()
  const error = { status: 400}
  const {name, budget} = req.body
  if(name === undefined || budget === undefined){
    error.message = 'name and budget are required'
    next(error)
  }else if(typeof name !== 'string'){
    error.message = 'name of account must be a string';
    next(error)
  }else if (name.trim().length<3 || name.trim().length>100){
    error.message = 'name of account must be between 3 and 100'
    next(error)
  }else if(typeof budget !== 'number'){
    error.message = 'budget of account must be a number'
    next(error)
  }else if(budget<0||budget>1000000){
    error.message = 'budget of account is too large or too small';
    next(error)
  }
  if(error.message){
    next(error)
  }else(
    next()
  )
}
// TEST http post :9000/api/accounts name=account-01 budget:=1000 -v
exports.checkAccountNameUnique = async (req, res, next) => {
  // DO YOUR MAGIC
  // console.log('checkAccountNameUnique middleware')
  // next()
  try{
    const existing = await db('accounts').where('name', req.body.name.trim()).first()
    if(existing){
      next({status:400, message: "that name is taken"})
    }else{
      next()
    }
  }catch(err){
    next(err)
  }
}

exports.checkAccountId = async (req, res, next) => {
  // DO YOUR MAGIC
  // console.log('checkAccountId middleware')
  // next()
  try{
    const account = await Account.getById(req.params.id)
    if(!account){
      // res.status(404).json({ message: "Account not found" })
      next({status: 404, message: 'Account not found'})
    }else{
      req.account = account
      next()
    }
  }catch(err){
    next(err)
  }
}


