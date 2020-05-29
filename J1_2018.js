//function for the logic
function myFunction() {
	
	//getting the inputs
	var fdigit = document.getElementById("fdigit").value;
	var sdigit = document.getElementById("sdigit").value;
	var tdigit = document.getElementById("tdigit").value;
	var ldigit = document.getElementById("ldigit").value;
	var ans;
  
	//conditions to check the 4 digits as required to identify the telemarketers number
	if((fdigit == 8 || fdigit == 9) && (ldigit == 8 || ldigit == 9) && (sdigit == tdigit)){
	  ans = false;
	}

	else{
	  ans = true;
	}

	//display the result wheather the phone should be ignored or answered
	if(ans == false){
	  document.getElementById("result").innerHTML = "ignore";
	}

	else{
	  document.getElementById("result").innerHTML = "answer";
	}

}