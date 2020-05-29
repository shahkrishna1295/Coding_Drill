//variables for the count of the words
var adjCount; 
var nounCount;  

// defining array
var adjArr = [];
var nounArr = [];

//function to get adjcectives 
function getAdjectives(){             
    adjCount = document.getElementById("adjCount").value;
     // loop to get the values inputs
    for (var i = 0; i < adjCount; i++) {      
        
        // push the value into the array of adjective
        adjArr.push(prompt('Enter adjectives ' + (i+1))); 
    }
}

//funtion to get nouns
function getNouns(){
    nounCount = document.getElementById("nounCount").value;
     // loop to get the values inputs
     for (var i = 0; i < nounCount; i++) {      
        
        // push the value into the array of adjective
        nounArr.push(prompt('Enter nouns ' + (i+1))); 
    }
     // displaying the results
     //document.getElementById('result').innerHTML =  casesArr.join(', ');     
}

//function to display the final result
function displayResult(){

    //loop to get all the adjecetives
    for(var i = 0; i < adjArr.length; i++){

        //loop to get all the nouns
        for(var j = 0; j < nounArr.length; j++){

            //result
            document.getElementById('result').innerHTML += adjArr[i] + " as " + nounArr[j] + "<br>" ;
        }
    }
}
