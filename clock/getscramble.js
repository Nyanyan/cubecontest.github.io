const outputElement2 = document.getElementById('scramble');

function getCsvData(dataPath) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', (event) => {
        const response = event.target.responseText;
        convertArray(response);
    });
    request.open('GET', dataPath, true);
    request.send();
}

function convertArray(data) {
    const dataArray = [];
    const dataString = data.split('\n');
    for (let i = 0; i < dataString.length; i++) {
        dataArray[i] = dataString[i].split(',');
    }
    let insertElement = '';
    let flag = false;
    dataArray.forEach((element) => {
        //insertElement += '<tr>';
        element.forEach((childElement) => {
            alert(childElement)
        });
        if (flag){
            break
        }
        //insertElement += '</tr>';
    });
    //alert(insertElement)
    outputElement2.innerHTML = insertElement;
}

getCsvData('../scramble.csv');