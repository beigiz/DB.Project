const { sequelize, Member, Book, Return, Issue } = require('./models')
const express = require('express')


 const bodyParser = require('body-parser');
 const cors = require('cors');
 const router = express.Router();
const app = express()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);


// MeMBER 


router.route('/member').post(async (req, res) => {
  const { name, age } = req.body
  try {
    const member = await Member.create({
      name,
      age
    })
  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})

router.route('/member').get( async(req, res) => {

  try {
    const members = await Member.findAll()
    return res.json(members)
  }
  catch(err){
        console.log('err', err)
        return res.status(500).json(err)
  }
})


router.route('/member:id').get(async (req, res) => {
  const id = req.params.id 
  try {
    const member = await Member.findOne({ where: {id} })
    return res.json(member)

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


router.route('/member:id').delete(async (req, res) => {
  const id = req.params.id
  try {
    const member = await Member.findOne({
      where: { id }
    })
    await Member.destroy()
    return res.json({message:'Memeber Deleted'})

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


// ----------------- book

router.route('/book').post(async (req, res) => {
  const {
    name,
    age
  } = req.body
  try {
    const book = await Book.create({
      name,
      age
    })
  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})

router.route('/book').get(async (req, res) => {

  try {
    const books = await Book.findAll()
    return res.json(books)
  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


router.route('/book:id').get(async (req, res) => {
  const id = req.params.id
  try {
    const book = await Book.findOne({
      where: {
        id
      }
    })
    return res.json(book)

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


router.route('/book:id').delete(async (req, res) => {
  const id = req.params.id
  try {
    const book = await Book.findOne({
      where: {
        id
      }
    })
    await book.destroy()
    return res.json({
      message: 'book Deleted'
    })

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})



// ----------------- Issue

router.route('/issue').post(async (req, res) => {
  const {
    name,
    age
  } = req.body
  try {
    const issue = await Issue.create({
      name,
      age
    })
  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})

router.route('/issue').get(async (req, res) => {

  try {
    const issues = await Issue.findAll()
    return res.json(issues)
  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


router.route('/issue:id').get(async (req, res) => {
  const id = req.params.id
  try {
    const issue = await Issue.findOne({
      where: {
        id
      }
    })
    return res.json(issue)

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


router.route('/issue:id').delete(async (req, res) => {
  const id = req.params.id
  try {
    const issue = await Issue.findOne({
      where: {
        id
      }
    })
    await issue.destroy()
    return res.json({
      message: 'book Deleted'
    })

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


// ----------------- Return

router.route('/returned-book').post(async (req, res) => {
  const {
    name,
    age
  } = req.body
  try {
    const returnedBook = await Return.create({
      name,
      age
    })
  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})

router.route('/returned-book').get(async (req, res) => {

  try {
    const returnedBooks = await Return.findAll()
    return res.json(returnedBooks)
  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


router.route('/returned-book:id').get(async (req, res) => {
  const id = req.params.id
  try {
    const returnedBook = await Return.findOne({
      where: {
        id
      }
    })
    return res.json(returnedBook)

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})


router.route('/returned-book:id').delete(async (req, res) => {
  const id = req.params.id
  try {
    const returnedBook = await Return.findOne({
      where: {
        id
      }
    })
    await returnedBook.destroy()
    return res.json({
      message: 'book Deleted'
    })

  } catch (err) {
    console.log('err', err)
    return res.status(500).json(err)
  }
})



// app.post('/members', async(req, res) => {
//   const { name, age } = req.body
//   try {
//     const member = await member.create({name, age})
//   }
//   catch(err) {
//     console.log('err', err)
//     return res.status(500).json(err)
//   }
// })

app.listen({port: 3000} , async () => {
  await sequelize.authenticate()
  console.log("tadaaa it's connected")
})


