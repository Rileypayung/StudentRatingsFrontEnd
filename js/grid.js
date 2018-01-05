//jQuery file

//basic data structure upon api call

var ratings_list = [
	{	
		username: 'mdo9', 			
		test_diff: 3.5, 		//use overall rating to determine which emoji gets displayed
		section: 'test_info', 		//use section to determine which column to insert the div
		major: 'bioengineering',	//use major to insert into description below emoji 
		year_taken: 'junior', 		//use year_taken to insert into description below emoji
		concentration: 'pre-med', 	//use concentration to insert into description below emoji
		gpa: 3.31,					//use gpa to insert into description below emoji
		time_written: 'fall 2017',	//use time_written to display on rating bubble
		schedule_match: 90.2
	},

	{
		username: 'bwong', 			
		test_diff: 7.8, 		//use overall rating to determine which emoji gets displayed
		section: 'workload', 		//use section to determine which column to insert the div
		major: 'computer science',	//use major to insert into description below emoji 
		year_taken: 'junior', 		//use year_taken to insert into description below emoji
		concentration: null, 		//if null, don't display it
		gpa: null,
		time_written: 'spring 2018',
		schedule_match: 90.2
	}	
];

var test_info = [
	{username: 'user1', overall_rating: 3.5},
	{username: 'user2', overall_rating: 5.1},
	{username: 'user3', overall_rating: 9.8}
];

var teach_qual = [
	{username: 'user4', overall_rating: 5.9},
	{username: 'user5', overall_rating: 3.5},
	{username: 'user6', overall_rating: 3.5},
	{username: 'user7', overall_rating: 5.9}
];

var workload = [
	{username: 'user8', overall_rating: 9.5},
	{username: 'user9', overall_rating: 7.5},
	{username: 'user10', overall_rating: 5.9},
	{username: 'user11', overall_rating: 3.9},
	{username: 'user12', overall_rating: 1.9}
];

var class_exp = [
	{username: 'user13', overall_rating: 9.5},
	{username: 'user14', overall_rating: 7.5},
	{username: 'user15', overall_rating: 4.9},
	{username: 'user16', overall_rating: 8.9},
	{username: 'user17', overall_rating: 2.9},
	{username: 'user18', overall_rating: 6.3}
];

var elementID = '';
var ratingType = ratings_list.type;
var ratingTime = '';
var raterConc = null;
var raterConc_str = '';
var raterGPA = null;
var raterGPA_str = '';		//convert to str 
var raterMajor = '';
var raterYear = '';
var raterSchedule = '';
var raterSchedule_str = '';	//convert to str
var raterTestDiff = '';
var raterTestDiff_str = '';	//convert to str

$(document).ready(function(){
	for(var i=0; i < ratings_list.length; i++){
		elementID = ratings_list[i].username;
		raterMajor = ratings_list[i].major;
		raterYear = ratings_list[i].year_taken;
		raterTestDiff = ratings_list[i].test_diff;
		raterTestDiff_str = (ratings_list[i].test_diff).toString();
		raterSchedule = ratings_list[i].schedule_match;
		raterSchedule_str = (ratings_list[i].schedule_match).toString();
		ratingTime = ratings_list[i].time_written;
		
		if(ratings_list[i].concentration != null){
			raterConc = ratings_list[i].concentration; 
			raterConc_str = ratings_list[i].concentration;
			//if user provides info, raterConc = string, raterGPA_str = string
			//if user does not provide info, raterConc = null, raterConc_str = ''
		}
		
		if(ratings_list[i].gpa != null){
			raterGPA_str = ratings_list[i].gpa.toString(); 
			raterGPA = ratings_list[i].gpa;
			//if user provides info, raterGPA = float, raterGPA_str = string
			//if user does not provide info, raterGPA = null, raterGPA_str = ''
		}
		
		switch(ratingType){
			case "test_info":
				
				
			break;
			
			case "teach_qual":
			
			break;
			case "workload":
			
			break;
			case "class_exp":
			
			break;
		}
	}
	/*for loop creates a div element with a button element inside based on number of ratings written for that section;
	for loop also sets id of button element to the username;
	conditionals inside for loops inserts and img element (with emoji inside) depending on overall_rating; 
	(sad face: < 4, neutral face: 4 < 6, smirking face: > 6);
	in the future, copy and past for loop below for teaching quality, class exp, and workload;
	also adjust format of button element and possibly find different emojis to avoid copyright */
	
	//test information column
	for(var i=0; i<test_info.length; i++){
		elementID = test_info[i].username;
		user_rating = test_info[i].overall_rating;
		$('#tests').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
		
		//$('#tests').append('<button type="button" class="btn btn-primary" id="'+elementID+'"></button>');
		//$('#tests').append('<a type="button" class="btn btn-default" href="#" id="'+elementID+'"></a>');
		if(user_rating < 4){
			
			$('#'+elementID).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else if(user_rating >= 4 && user_rating <= 6) {
			
			$('#'+elementID).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else {
			
			$('#'+elementID).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Smirking Face" width="90" height="90" id="'+elementID+'"></img>');
		
		}
	
	}
	
	//teaching quality column
	for(var i=0; i<teach_qual.length; i++){
		elementID = teach_qual[i].username;
		user_rating = teach_qual[i].overall_rating;
		$('#teach_qual').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
		
		if(user_rating < 4){
			
			$('#'+elementID).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else if(user_rating >= 4 && user_rating <= 6) {
			
			$('#'+elementID).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else {
			
			$('#'+elementID).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		}
	
	}
	
	//workload column
	for(var i=0; i<workload.length; i++){
		elementID = workload[i].username;
		user_rating = workload[i].overall_rating;
		$('#workload').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
		
		if(user_rating < 4){
			
			$('#'+elementID).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else if(user_rating >= 4 && user_rating <= 6) {
			
			$('#'+elementID).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else {
			
			$('#'+elementID).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		}
	
	}
	
	//class experience column
	for(var i=0; i<class_exp.length; i++){
		elementID = class_exp[i].username;
		user_rating = class_exp[i].overall_rating;
		$('#class_exp').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
		
		if(user_rating < 4){
			
			$('#'+elementID).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else if(user_rating >= 4 && user_rating <= 6) {
			
			$('#'+elementID).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		} else {
			
			$('#'+elementID).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
		
		}
	
	}
	
	/*when button in test section is clicked, an alert pops up giving the username,
	for future purposes, alert will be replaced with expanding preview of rating */
	$("button").click(function(event){
		alert(event.target.id);
	});
});