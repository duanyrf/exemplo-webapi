import { Router } from 'express'

const disciplinaRouter = Router()

disciplinaRouter.get('/novo', (req, res) => {
  return res.send('Enpoint Disciplina Novo')
})

disciplinaRouter.get('/listar', (req, res) => {
  return res.send('Enpoint Disciplina Listar')
})

export default disciplinaRouter