const router = require("express").Router();
const md = require("./accounts-middleware");
const Account = require('./accounts-model')

// TEST ERR: http get :9000/api/accounts -v
router.get("/", async (req, res, next) => {
  // DO YOUR MAGIC
  // http get :7000/api/accounts -v
  // res.send('TEST: GET /api/accounts')
  try {
    // throw new Error('argh!!!')
    // res.json([{},{}])
    // res.json("get accounts ");
    const  accounts = await Account.getAll()
    res.json(accounts)
  } catch (err) {
    next(err);
  }
});

router.get("/:id", md.checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  // http get :7000/api/accounts/1 -v
  // res.send('TEST: GET /api/accounts/1')
  try {
    // res.json("get account by id");
    // const  account = await Account.getById(req.params.id)
    // res.json(account)
    res.json(req.account)
  } catch (err) {
    next(err);
  }
});

router.post(
  "/",
  md.checkAccountPayload,
  md.checkAccountNameUnique,
  async (req, res, next) => {
    // DO YOUR MAGIC
    // http post :7000/api/accounts name=fff budget=ffffff -v
    // res.json("TEST: create by endpoint")
    try {
      res.json("post account");
      // const account = await Account.create(req.body)
      // res.status(201).json(account)
    } catch (err) {
      next(err);
    }
  }
);

router.put(
  "/:id",
  md.checkAccountId,
  md.checkAccountPayload,
  (req, res, next) => {
    // DO YOUR MAGIC
    // http put :7000/api/accounts/2 name=fff budget=ffffff -v
    // res.json('TEST: update by endpoint')
    try {
      res.json("put account by id");
    } catch (err) {
      next(err);
    }
  }
);

router.delete("/:id", md.checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  // http delete :7000/api/accounts/7  -v
  // res.json('test delete by endpoint')
  try {
    res.json("delete account by id");
  } catch (err) {
    next(err);
  }
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = router;
