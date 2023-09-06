import { Router } from 'express'

const professorRouter = Router()

professorRouter.get('/novo', (req, res) => {
  return res.send('Enpoint Professor Novo')
})

professorRouter.get('/listar', (req, res) => {
  return res.send('Enpoint Professor Listar')
})

export default professorRouter