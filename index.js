const express = require('express')
const app = express()//새로운 익스프레스 앱 만들기
const port = 5000//포트 3000
const bodyParser = require('body-parser')
const{ User } = require("./models/User")

const config = require('./config/key');

//bodyParser가 클라이언트에서 오는 정보를 서버에서 분석해서 가져올 수 있게
//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB connected.. '))
.catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('새해 복 많이 받으세요 안녕하세요')//루트 디렉토리에 오면 헬로 월드 출력
})

app.post('/register', (req, res) => {
   //회원 가입할 때 필요한 정보들을 client에서 가져오면
   //그것들을 데이터 베이스에 넣어준다.
   const user = new User(req.body)
  
   user.save((err, userInfo) =>{
     if (err) return res.json({ success: false, err })
     return res.status(200).json({
       success: true
     })
   })//몽고에서 오는 메서드, 정보들이 유저모드에서 옴


})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})