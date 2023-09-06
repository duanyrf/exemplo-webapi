import { Router } from 'express'

const alunoRouter = Router()

alunoRouter.get('/novo', (req, res) => {
  return res.send('Enpoint Aluno Novo')
})

alunoRouter.get('/listar', (req, res) => {
  return res.send('Enpoint Aluno Listar')
})

export default alunoRouter