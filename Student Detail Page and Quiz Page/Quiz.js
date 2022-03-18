//timer
var timer;
var seconds = 60;
var seconds2;
  
window.onload = function timeCount(){           //window.onload is fired when the entire page loads,Including its content(images, CSS, scripts, etc.).  
	timer = setInterval(function(){
		seconds--;
        if (seconds == 0){
			clearTimeout(timer);
			alert("Oops !! Your session is finished. Please submit the Quiz.")
		}else if(seconds == 00){
			seconds = 60;
		}
		document.getElementById("timer").innerHTML = "Remaining Time : "+ seconds + " Seconds"  ;  
		},1000);
}
/*--------------------------------------------------------------------------------------------------------------------------------------------*/
//Validation
function getRadioValue(){
clearTimeout(timer)

	var i;
	var score = 0;
	var correct = 0;
	
	var userSelectAnswerQ1 = " " ;
	var userSelectAnswerQ2 = " " ;
	var userSelectAnswerQ3 = " " ;
	var userSelectAnswerQ4 = " " ;
	var userSelectAnswerQ5 = " " ;
	var userSelectAnswerQ6 = " " ;
	var userSelectAnswerQ7 = " " ;
	var userSelectAnswerQ8 = " " ;
	var userSelectAnswerQ9 = " " ;
	var userSelectAnswerQ10 = " " ;
	
	var que1Array = document.getElementsByName("question1");
	var que2Array = document.getElementsByName("question2");
	var que3Array = document.getElementsByName("question3");
	var que4Array = document.getElementsByName("question4");
	var que5Array = document.getElementsByName("question5");
	var que6Array = document.getElementsByName("question6");
	var que7Array = document.getElementsByName("question7");
	var que8Array = document.getElementsByName("question8");
	var que9Array = document.getElementsByName("question9");
	var que10Array = document.getElementsByName("question10");
	
//Question 01 (Check the user answer)
    for (i = 0;  i < que1Array.length; i++){
		if (que1Array[i].checked){
			userSelectAnswerQ1 = que1Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ1 == "c") {
		    document.getElementById("resultQ1c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ1 == " "){
			document.getElementById("resultQ1").innerHTML = "You did not select an answer. Answer is (c).Sri Jayawardenapura Kotte" ;
		}else {
			document.getElementById("resultQ1").innerHTML = "Your Answer is wrong. Correct answer is (c).Sri Jayawardenapura Kotte" ;
			score--;
		}
	
//Question 02 (Check the user answer)	
	for (i = 0;  i < que2Array.length; i++){
		if (que2Array[i].checked){
			userSelectAnswerQ2 = que2Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ2 == "c") {
		    document.getElementById("resultQ2c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ2 == " "){
			document.getElementById("resultQ2").innerHTML = "You did not select an answer. Answer is (a).Nile" ;
		}else {
			document.getElementById("resultQ2").innerHTML = "Your Answer is wrong. Correct answer is (a).Nile" ;
			score--;
		}

//Question 03 (Check the user answer)	
	for (i = 0;  i < que3Array.length; i++){
		if (que3Array[i].checked){
			userSelectAnswerQ3 = que3Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ3 == "a") {
		    document.getElementById("resultQ3c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ3 == " "){
			document.getElementById("resultQ3").innerHTML = "You did not select an answer. Answer is (a).France" ;
		}else {
			document.getElementById("resultQ3").innerHTML = "Your Answer is wrong. Correct answer is (a).France" ;
			score -= 1;
		}

//Question 04 (Check the user answer)	
	for (i = 0;  i < que4Array.length; i++){
		if (que4Array[i].checked){
			userSelectAnswerQ4 = que4Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ4 == "d") {
		    document.getElementById("resultQ4c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ4 == " "){
			document.getElementById("resultQ4").innerHTML = "You did not select an answer. Answer is (d).Good Image" ;
		}else {
			document.getElementById("resultQ4").innerHTML = "Your Answer is wrong. Correct answer is (d).Good Image" ;
			score -= 1;
		}		

//Question 05 (Check the user answer)	
	for (i = 0;  i < que5Array.length; i++){
		if (que5Array[i].checked){
			userSelectAnswerQ5 = que5Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ5 == "b") {
		    document.getElementById("resultQ5c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ5 == " "){
			document.getElementById("resultQ5").innerHTML = "You did not select an answer. Answer is (b).Swiss franc" ;
		}else {
			document.getElementById("resultQ5").innerHTML = "Your Answer is wrong. Correct answer is (b).Swiss franc" ;
			score -= 1;
		}

//Question 06 (Check the user answer)	
	for (i = 0;  i < que6Array.length; i++){
		if (que6Array[i].checked){
			userSelectAnswerQ6 = que6Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ6 == "d") {
		    document.getElementById("resultQ6c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ6 == " "){
			document.getElementById("resultQ6").innerHTML = "You did not select an answer. Answer is (d).Portuguese" ;
		}else {
			document.getElementById("resultQ6").innerHTML = "Your Answer is wrong. Correct answer is (d).Portuguese" ;
			score -= 1;
		}

//Question 07 (Check the user answer)	
	for (i = 0;  i < que7Array.length; i++){
		if (que7Array[i].checked){
			userSelectAnswerQ7 = que7Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ7 == "c") {
		    document.getElementById("resultQ7c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ7 == " "){
			document.getElementById("resultQ7").innerHTML = "You did not select an answer. Answer is (c).Kangaroo" ;
		}else {
			document.getElementById("resultQ7").innerHTML = "Your Answer is wrong. Correct answer is (c).Kangaroo" ;
			score -= 1;
		}	

//Question 08 (Check the user answer)	
	for (i = 0;  i < que8Array.length; i++){
		if (que8Array[i].checked){
			userSelectAnswerQ8 = que8Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ8 == "b") {
		    document.getElementById("resultQ8c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ8 == " "){
			document.getElementById("resultQ8").innerHTML = "You did not select an answer. Answer is (b).Dubai" ;
		}else {
			document.getElementById("resultQ8").innerHTML = "Your Answer is wrong. Correct answer is (b).Dubai" ;
			score -= 1;
		}

//Question 09 (Check the user answer)	
	for (i = 0;  i < que9Array.length; i++){
		if (que9Array[i].checked){
			userSelectAnswerQ9 = que9Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ9 == "a") {
		    document.getElementById("resultQ9c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ9 == " "){
			document.getElementById("resultQ9").innerHTML = "You did not select an answer. Answer is (a).Pacific Ocean" ;
		}else {
			document.getElementById("resultQ9").innerHTML = "Your Answer is wrong. Correct answer is (a).Pacific Ocean" ;
			score -= 1;
		}

//Question 10 (Check the user answer)	
	for (i = 0;  i < que10Array.length; i++){
		if (que10Array[i].checked){
			userSelectAnswerQ10 = que10Array[i].value;
			break;			
		}
	}	
	    if (userSelectAnswerQ10 == "a") {
		    document.getElementById("resultQ10c").innerHTML = "Correct!! Well Done." ;
			score +=2;
			correct++
	    } else if (userSelectAnswerQ10 == " "){
			document.getElementById("resultQ10").innerHTML = "You did not select an answer. Answer is (a).Changi International Airport" ;
		}else {
			document.getElementById("resultQ10").innerHTML = "Your Answer is wrong. Correct answer is (a).Changi International Airport" ;
			score -= 1;
		}
		
 	seconds2 = 60 - seconds;
	
//Changing background color according to the marks user obtained
    if (score == 20) {
	    document.getElementById("fieldset1").style.backgroundColor = "#00FFFF"; //purple
	}else if (score >= 15) {
		document.getElementById("fieldset1").style.backgroundColor = "#00BFFF"; //blue
	}else if (score >= 10) {
		document.getElementById("fieldset1").style.backgroundColor = "#008000"; //green
	}else if (score >= 5){
		document.getElementById("fieldset1").style.backgroundColor = "#FF4500"; //orange
	}else if (score == 0){
		document.getElementById("fieldset1").style.backgroundColor = B
	}
	else{
		document.getElementById("fieldset1").style.backgroundColor = "#DC143C"; //red
	}
	
//Displaing final Results
	document.getElementById("result_top").innerHTML = "Test is Completed!!";	
    document.getElementById("result_score").innerHTML = "You scored " + score + " marks out of 20 marks.";
	document.getElementById("result_time").innerHTML = "You took  " + seconds2 + " Seconds to complete."; 
	document.getElementById("result_correct").innerHTML = "Number of Correct Question is " + correct +".";
}
	
	


