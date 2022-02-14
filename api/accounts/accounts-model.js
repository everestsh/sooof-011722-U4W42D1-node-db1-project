const db= require('../../data/db-config')
const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts
  return db('accounts')
}

const getById = id => {
  // DO YOUR MAGIC
  // select * from accounts where id = 7;
  return db('accounts').where('id', id).first()
}

const create = async account => {
  // DO YOUR MAGIC
  // insert into accounts (name, budgget) values ('foo', 1000)
  // return db('accounts').insert(account, ['id', 'name', 'budget'])
  const [id] = await db('accounts').insert(account)
  return getById(id)
}

const updateById =async (id, change) => {
  // DO YOUR MAGIC
  await db('accounts').where('id', id).update(change)
  return getById(id)
}

const deleteById = id => {
  // DO YOUR MAGIC
  // delete from accounts where id=1
  return db('accounts').where('id', id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
