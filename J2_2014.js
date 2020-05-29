//function for the logic
function myFunction() {
	
	//getting the inputs
	var voteCount = document.getElementById("voteCount").value;
	var vote = document.getElementById("vote").value;
	var result;

	//check the count and the length of the vote string
	if(voteCount == vote.length){

		//checking the occurance of the votes
		var count_A = char_count(vote,'A');
		var count_B = char_count(vote,'B');

		//checking the conditions for the number of votes of singer A and B
		if(count_A > count_B){
			document.getElementById("result").innerHTML = "A";
		}

		else if(count_B > count_A){
			document.getElementById("result").innerHTML = "B";
		}

		else if(count_B == count_A){
			document.getElementById("result").innerHTML = "Tie";
		}

		else{
			document.getElementById("result").innerHTML = "No Vote";
		}
	}

	else{
		document.getElementById("result").innerHTML = "Please enter valid sequence of votes";
	}

	//function to check the occurances of the vote for singer A or B
	function char_count(str, letter) 
		{
			var letter_Count = 0;

			//to check all the characters of the string
			for (var position = 0; position < str.length; position++) 
			{
				//compares the letter at the position with desired letter
				if (str.charAt(position) == letter) 
				{
					//incrementing the letter count
					letter_Count += 1;
				}
			}
		return letter_Count;
		}

}