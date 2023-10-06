const express = require('express');
const Data = require("./mtk.json");
const app = express();
const apiRoute = require('./routers/api');
const pageRoute = require('./routers/page');


app.set("view engine", "ejs");

// app.get('/api/:questionNo', (req, res) => {
//     const questionNo = req.params.questionNo;
//     const question = Data.questions.find(q => q.questionNo === questionNo);
//     const numberList = Data.numberList;
//     if (question) {
//       res.json(question,numberList);
//     } else {
//       res.status(404).json({ error: 'Question not found' });
//     }
//   });

// app.get('/api/:questionNo', (req,res)=>{
//     const questionNo = req.params.questionNo;
//     const answerNos = Data.numberList;

//     if(answerNos){
//         res.json({questionNo,answerNos});
//     }else{
//         res.status(404).json({ error: 'Question not found' });
//     }
// })

// app.get('/api/:questionNo/:answerNo',(req,res)=>{
//     const answerNo = req.params.answerNo;
//     const questionNo = req.params.questionNo;
//     const answer = Data.answers.find(ans=>ans.answerNo== answerNo && ans.questionNo == questionNo);

//     if (answer){
//         res.json(answer);
//     }else{
//         res.status(404).json({ error: 'Answer not found' });
//     }

// })

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public')); 

app.listen(3000, ()=>{
    console.log('listening');
});

app.get('/',(req,res)=>{
    res.redirect('/mintheinkha')
})


app.use('/mintheinkha',pageRoute);
app.use('/api',apiRoute);

