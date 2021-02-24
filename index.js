const express = require('express')
const app = express()//새로운 익스프레스 앱 만들기
const port = 5000//포트 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://joonghyun:jp025879@cluster0.wwvsw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected.. '))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')//루트 디렉토리에 오면 헬로 월드 출력
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})