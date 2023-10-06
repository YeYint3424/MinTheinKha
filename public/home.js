function showQuestions() {
    const questionsLi = document.getElementById('allQuestion');

    fetch("/api")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if (data.length > 0) {
                
                const ol = document.createElement("ol");

                data.forEach((mtk) => {
                    const li = document.createElement("li");
                    li.textContent = mtk.questionName;
                    
                    const anchor = document.createElement("a");
                    anchor.classList.add("text-decoration-none", "text-dark");
                    
                    anchor.setAttribute("href", `/mintheinkha/${mtk.questionNo}`);
                    anchor.appendChild(li);
                    ol.appendChild(anchor);
                  });
                questionsLi.appendChild(ol);
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

showQuestions();


