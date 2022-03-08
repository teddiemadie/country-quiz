function randomNumber(data,amount){

    //input: array and amount of elements to take out, output: array of chosen elements
    const chosenNums = [];
    for (let i=0; i<amount; i++){
        let ri = Math.round(Math.random()*(data.length-1));
        console.log(`ri = ${ri}`);
        chosenNums.push(data[ri]);
        data.splice(ri,1);
    }
    data.forEach(newnum => console.log(`newnum = ${newnum}`));

    return chosenNums;
    
}
export default randomNumber;