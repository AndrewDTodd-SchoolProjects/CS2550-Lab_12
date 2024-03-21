function parseScores(scoresString) {
   return scoresString.split(" ");
}

function buildDistributionArray(scoresArray) {
   // TODO: Compete the function
    let distribution = [0, 0, 0, 0, 0];

    scoresArray.forEach(score => {
        let numberScore = parseInt(score);
        if(numberScore >= 90) {
            distribution[0]++;
        } else if (numberScore >= 80) {
            distribution[1]++;
        } else if (numberScore >= 70) {
            distribution[2]++;
        } else if (numberScore >= 60) {
            distribution[3]++;
        } else {
            distribution[4]++;
        }
    });

    return distribution;
}

function setTableContent(userInput) {
   // TODO: Compete the function
    let scores = parseScores(userInput);
    
    let dist = buildDistributionArray(scores);

    let fistRow = document.getElementById("firstRow");
    let thirdRow = document.getElementById("thirdRow");

    firstRow.innerHTML = '';
    thirdRow.innerHTML = '';

    for(let i = 0; i < dist.length; i++) {
        let barHeight = dist[i] * 10;
        console.log(barHeight);
        let barColorClass = "bar" + i;

        let cell = document.createElement('td');

        let bar = document.createElement('div');
        bar.classList.add(barColorClass);
        bar.style = "height:" + barHeight + "px";
        console.log("height:" + barHeight + "px");

        cell.appendChild(bar);
        firstRow.appendChild(cell);

        let thirdRowCell = document.createElement('td');
        thirdRowCell.textContent = dist[i];

        thirdRow.appendChild(thirdRowCell);
    }
}

// The argument can be changed for testing purposes
setTableContent("45 78 98 83 86 99 90 59");