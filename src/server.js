import express from 'express'
import alunoRouter from './routes/aluno.router'
import disciplinaRouter from './routes/disciplina.router'
import professorRouter from './routes/professor.router'

const api = express();

api.use('/aluno', alunoRouter)
api.use('/professor', professorRouter)
api.use('/disciplina', disciplinaRouter)

api.listen(3000, () => console.log('API up and running!'))