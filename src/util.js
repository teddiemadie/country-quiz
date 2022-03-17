export function randomNumber(data,amount) {

    //input: array and amount of elements to take out, output: array of chosen elements
    const chosenNums = [];
    for (let i=0; i<amount; i++){
        let ri = Math.round(Math.random()*(data.length-1));
        // console.log(`ri = ${ri}`);
        chosenNums.push(data[ri]);
        data.splice(ri,1);
    }
    data.map(newnum => console.log(`newnum = ${newnum}`));

    return chosenNums;
    
}

export function createSetQA(data) {
    console.warn('hello>>>>>', data)
    const setQA = {
        question_type: null,
        question_value:null,
        question: null,
        answer_selection: ['A', 'B', 'C', 'D'],
        answer_type: null,
        answers: [],
        correct_answer: null,
    };

    let randomQuestionTypeNum = Math.floor(Math.random()* (3 + 1));
    let randomCountries = randomNumber(data,4);
    let randomQuestionValue = randomCountries[Math.floor(Math.random()* (3 + 1))];
    console.warn('randomQuestioTypeNum',randomQuestionTypeNum);
    console.warn(`randomCountries: ${randomCountries.length}`);
    console.warn('randomCountries:',randomCountries);
    console.warn('randomQuestionValue:',randomQuestionValue);

    switch (randomQuestionTypeNum) {
        case 0:
            setQA.question_type = 'capital';
            setQA.question_value = randomQuestionValue.capital.length > 1? randomQuestionValue.capital.join(', '): randomQuestionValue.capital;
            setQA.question = ' is the capital of ';
            setQA.answer_type = 'country';
            randomCountries.map(c => setQA.answers.push(c.name.common));
            setQA.correct_answer = randomQuestionValue.name.common;
            break;
        case 1:
            setQA.question_type = 'country';
            setQA.question_value = randomQuestionValue.name.common;
            setQA.question = ' has the capital named ';
            setQA.answer_type = 'capital';
            randomCountries.map(c => setQA.answers.push(c.capital.length > 1? c.capital.join(', '): c.capital));
            setQA.correct_answer = randomQuestionValue.capital;
            break;
        case 2:
            setQA.question_type = 'flag';
            setQA.question_value = randomQuestionValue.flags.png;
            setQA.question = 'Which country does this flag belong to';
            setQA.answer_type = 'country';
            randomCountries.map(c => setQA.answers.push(c.name.common));
            setQA.correct_answer = randomQuestionValue.name.common;
            break;
        case 3:
            setQA.question_type = 'population';
            setQA.question_value = randomQuestionValue.name.common;
            setQA.question = ' has a population of ';
            setQA.answer_type = 'number';
            randomCountries.map(c => setQA.answers.push(c.population>1000000?`${Math.round(c.population/1000000)} million`:`${Math.round(c.population/1000)} thousand`));
            setQA.correct_answer = randomQuestionValue.population>1000000?`${Math.round(randomQuestionValue.population/1000000)} million`:`${Math.round(randomQuestionValue.population/1000)} thousand`;
            break;
    
        default:
            break;        
    }
    console.warn('correct_answer',setQA.correct_answer);
    return setQA;
}