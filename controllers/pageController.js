const Data = require("../mtk.json");

const home = (req,res) => {
    res.render('home')
}
const answerList = (req,res) => {
    const questionNo = req.params.questionNo;
    const question = Data.questions.find(q => q.questionNo == questionNo);
    res.render('answerList',{questionNo : questionNo,question: question})
}
const answer = (req,res) => {
    const questionNo = req.params.questionNo;
    const answerNo = req.params.answerNo;
    res.render('answer',{questionNo:questionNo,answerNo:answerNo})
}

module.exports={
    home,
    answerList,
    answer
}