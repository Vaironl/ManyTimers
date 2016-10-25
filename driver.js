$(document).ready( function(){

	var started = false;

	var hours = 0;
	var minutes = 0;
	var seconds = 0;

	var hoursLabel = $("#hours");
	var minutesLabel = $("#minutes");
	var secondsLabel = $("#seconds");

	var hoursInput = $("#hoursInput");
	var minutesInput = $("#minutesInput");
	var secondsInput = $("#secondsInput");

	var intervalID;

	$("#startButton").click(function(){

		// if seconds not empty

		hours = hoursInput.val();
		minutes = minutesInput.val();
		seconds = secondsInput.val();		


		if(!started)
		{
			intervalID = setInterval(updateLabels,100);
			started = true;
		}
	});

	

	function updateLabels()
	{

		hoursLabel.text(hours);
		minutesLabel.text(minutes);
		secondsLabel.text(seconds);

		seconds--;

		if(seconds <= 0)
		{
			if(minutes <= 0 && hours > 0)
			{
				hours--;
				minutes = 60;
			}
			if(minutes > 0)
			{
				minutes--;
				seconds = 60;
			}
		}

		if((hours + minutes + seconds) <= 0)
		{
			clearInterval(intervalID);
			started = false;
		}

		

	}
});