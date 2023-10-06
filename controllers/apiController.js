const Data = require("../mtk.json");

const questions = (req,res) => {
    const question = Data.questions;
    if (question) {
        res.json(question);
      } else {
        res.status(404).json({ error: 'Question not found' });
      }
}

const selectRamdom = (req, res) => {
    const questionNo = req.params.questionNo;
    const question = Data.questions.find(q => q.questionNo == questionNo);
    const numberList = Data.numberList;
    if (question) {
      res.json({question,numberList});
    } else {
      res.status(404).json({ error: 'Question not found' });
    }
  }
const answer = (req,res)=>{
    const answerNo = req.params.answerNo;
    const questionNo = req.params.questionNo;
    const answer = Data.answers.find(ans=>ans.answerNo== answerNo && ans.questionNo == questionNo);

    if (answer){
        res.json(answer);
    }else{
        res.status(404).json({ error: 'Answer not found' });
    }

}


  module.exports={
    selectRamdom,
    answer,
    questions
  }