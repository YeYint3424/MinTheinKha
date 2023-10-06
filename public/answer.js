const questionNo = document.getElementById('questionNo').value;
const answerNo = document.getElementById('answerNo').value;

function showAns(){
    fetch(`/api/${questionNo}/${answerNo}`)
    .then((response)=>response.json())
    .then((data)=>{
        const p= document.createElement("p");
        p.textContent=data.answerResult;
        document.getElementById('answer').appendChild(p)
    })
    .catch((err)=>console.log(err))
}
showAns();