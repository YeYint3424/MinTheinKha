
const gridContainer = document.querySelector('.grid-container');
const questionNo = document.getElementById('questionNo').value;



function answerList(questionNo) {
    console.log(questionNo);

    fetch(`/api/${questionNo}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Question:', data.question);
            console.log('Number List Length:', data.numberList.length);
            const numbers = data.numberList;
            let numberList = [];
            
                const gridContainer = document.querySelector('.grid-container');

                for (let i = 1; i <= 9; i++) {
                    for (let j = 1; j <= 9; j++) {
                        const gridItem = document.createElement('div');
                        const anchor = document.createElement("a");
                        anchor.classList.add("text-decoration-none", "text-light");
                        gridItem.classList.add('grid-item');
                        
                        
                        const index = (i - 1) * 9 + j - 1;

                        if (index >= 0 && index < numbers.length) {
                            gridItem.textContent =numbers[index];

                                switch (numbers[index]) {
                                    case "၁": numbers[index]=1; break;
                                    case "၂": numbers[index]=2; break;
                                    case "၃": numbers[index]=3; break;
                                    case "၄": numbers[index]=4; break;
                                    case "၅": numbers[index]=5; break;
                                    case "၆": numbers[index]=6; break;
                                    case "၇": numbers[index]=7; break;
                                    case "၈": numbers[index]=8; break;
                                    case "၉": numbers[index]=9; break;
                                    case "၁၀": numbers[index]=10; break;
                                }


                            anchor.setAttribute("href", `/mintheinkha/${questionNo}/${numbers[index]}`);
                        }

                        anchor.appendChild(gridItem);
                        gridContainer.appendChild(anchor);
                    }
                }
            
        })

        .catch((err) => console.error('Error:', err));
}


answerList(questionNo);

