var ratings_list = [
	{	
		username: 'mdo9', 			
		overall_rating: 3.5, 		//use overall rating to determine which emoji gets displayed
		type: 'test_info', 		//use type to determine which column to insert the div
		major: 'Bioengineering B.S.',	//use major to insert into description below emoji 
		year_taken: 'Junior', 		//use year_taken to insert into description below emoji
		concentration: 'Pre-Med', 	//use concentration to insert into description below emoji
		gpa: 3.31,					//use gpa to insert into description below emoji
		semester_taken: 'Fall 2017',	//use semester_taken to display on rating bubble
		schedule_match: 2.5
	},
	{	
		username: 'mdo6180', 			
		overall_rating: 8.0, 		//use overall rating to determine which emoji gets displayed
		type: 'test_info', 		//use type to determine which column to insert the div
		major: 'Bioengineering B.S.',	//use major to insert into description below emoji 
		year_taken: 'Junior', 		//use year_taken to insert into description below emoji
		concentration: null, 	//use concentration to insert into description below emoji
		gpa: 3.31,					//use gpa to insert into description below emoji
		semester_taken: 'Fall 2017',	//use semester_taken to display on rating bubble
		schedule_match: 3.5
	},
	{
		username: 'bwong', 			
		overall_rating: 7.8, 		//use overall rating to determine which emoji gets displayed
		type: 'workload', 		//use type to determine which column to insert the div
		major: 'Computer Science',	//use major to insert into description below emoji 
		year_taken: 'Junior', 		//use year_taken to insert into description below emoji
		concentration: null, 		//if null, don't display it
		gpa: 3.55,
		semester_taken: 'Spring 2018',
		schedule_match: 5.2
	},
	{
		username: 'whitney', 			
		overall_rating: 5.4, 		//use overall rating to determine which emoji gets displayed
		type: 'teach_qual', 		//use type to determine which column to insert the div
		major: 'Physics',	//use major to insert into description below emoji 
		year_taken: 'Junior', 		//use year_taken to insert into description below emoji
		concentration: 'Education', 		//if null, don't display it
		gpa: null,
		semester_taken: 'Spring 2018',
		schedule_match: 5.2
	},
	{
		username: 'Jay', 			
		overall_rating: 7, 		//use overall rating to determine which emoji gets displayed
		type: 'class_exp', 		//use type to determine which column to insert the div
		major: 'Electrical Engineering',	//use major to insert into description below emoji 
		year_taken: 'Junior', 		//use year_taken to insert into description below emoji
		concentration: null, 		//if null, don't display it
		gpa: null,
		semester_taken: 'Spring 2018',
		schedule_match: 5.2
	}
];

ratings_list.sort(function(obj1, obj2) {
	// Descending order: highest schedule_match first
	return obj1.schedule_match - obj2.schedule_match;
});

var elementID = '';
var ratingType = '';
var ratingTime = '';
var raterConc = null;
var raterGPA = null;
var raterMajor = '';
var raterYear = '';
var raterSchedule = '';
var raterSchedule_str = '';	//convert to str
var raterOverall = '';
var raterOverall = '';
var raterOverall_str = '';	//convert to str
var element_display = '';

//function determines if GPA or conc should be displayed under emoji
function display(conc, GPA){
	if(conc == null && GPA == null){
		return '';
	} else if(conc != null && GPA == null){
		return 'Conc: ' + conc.toString();
	} else if(conc == null && GPA != null){
		return 'GPA: ' + GPA.toString();
	} else if(conc != null && GPA != null) {
		return 'Conc: ' + conc.toString();
	}
}

//function determines which emoji should be displayed for test_info section
function test_info_emoji(rater_id, numeric){
	if(numeric < 4){
			
		$('#'+rater_id).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+rater_id+'"></img>');
	
	} else if(numeric >= 4 && numeric <= 6) {
		
		$('#'+rater_id).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+rater_id+'"></img>');
	
	} else {
		
		$('#'+rater_id).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Smirking Face" width="90" height="90" id="'+rater_id+'"></img>');
	
	}
}

function teach_qual_emoji(rater_id, numeric){
	if(numeric < 4){
			
		$('#'+rater_id).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+rater_id+'"></img>');
	
	} else if(numeric >= 4 && numeric <= 6) {
		
		$('#'+rater_id).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+rater_id+'"></img>');
	
	} else {
		
		$('#'+rater_id).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Smirking Face" width="90" height="90" id="'+rater_id+'"></img>');
	
	}
}

/*
function test_info_emoji(section, rater_id, numeric){
	if(numeric < 4 && section=="test_info"){
			
		$('#'+rater_id).append('<img src="emojis/Anxious_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+rater_id+'"></img>');	//Anxious_Face_Emoji
	
	} else if(numeric >= 4 && numeric <= 6 && section=="test_info") {
		
		$('#'+rater_id).append('<img src="emojis/Unamused_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+rater_id+'"></img>');	//Unamused_Face_Emoji
	
	} else if(numeric > 6 && section=="test_info") {
		
		$('#'+rater_id).append('<img src="emojis/Winking_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+rater_id+'"></img>');	//Winking_Face_Emoji
	
	} else if(numeric < 4 && section=="workload"){
			
		$('#'+rater_id).append('<img src="emojis/Tired_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+rater_id+'"></img>');		//Tired_Face_Emoji
	
	} else if(numeric >= 4 && numeric <= 6 && section=="workload") {
		
		$('#'+rater_id).append('<img src="emojis/Bored_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+rater_id+'"></img>');		//Bored_Face_Emoji
	
	} else if(numeric > 6 && section=="workload") {
		
		$('#'+rater_id).append('<img src="emojis/Sunglasses_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+rater_id+'"></img>');	//Sunglasses_Face_Emoji
	
	} else {
		
		$('#'+rater_id).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Smirking Face" width="90" height="90" id="'+rater_id+'"></img>');
	
	}
}
*/
$(document).ready(function(){
	//for loop loops through ratings_list
	for(var i=0; i < ratings_list.length; i++){
		
		//declaring all of the variables
		ratingType = ratings_list[i].type;
		elementID = ratings_list[i].username;
		raterMajor = ratings_list[i].major;
		raterYear = ratings_list[i].year_taken;
		raterOverall = ratings_list[i].overall_rating;
		raterOverall_str = (ratings_list[i].overall_rating).toString();
		raterSchedule = ratings_list[i].schedule_match;
		raterSchedule_str = (ratings_list[i].schedule_match).toString();
		ratingTime = ratings_list[i].semester_taken;
		
		//element_display is either conc or GPA
		element_display = display(ratings_list[i].concentration, ratings_list[i].gpa);
		
		//switch statements determine which column to put the ratings under 
		switch(ratingType){
			
			case "test_info":
				
				$('#tests').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
			
				test_info_emoji(elementID, raterOverall);
				
				$('#'+elementID).append('<div id="'+elementID+'">'+raterYear+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+raterMajor+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+element_display+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">Schedule Match: '+raterSchedule_str+'</div>');
				
				break;
				
			case "teach_qual":
				$('#teach_qual').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
				
				teach_qual_emoji(elementID, raterOverall);
				
				$('#'+elementID).append('<div id="'+elementID+'">'+raterYear+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+raterMajor+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+element_display+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">Schedule Match: '+raterSchedule_str+'</div>');
				
				break;
			
			case "workload":
				
				$('#workload').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
				
				if(raterOverall < 4){
			
					$('#'+elementID).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
				
				} else if(raterOverall >= 4 && raterOverall <= 6) {
					
					$('#'+elementID).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+elementID+'"></img>');
				
				} else {
					
					$('#'+elementID).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Smirking Face" width="90" height="90" id="'+elementID+'"></img>');
				
				}
				
				$('#'+elementID).append('<div id="'+elementID+'">'+raterYear+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+raterMajor+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+element_display+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">Schedule Match: '+raterSchedule_str+'</div>');
				
				break;
			
			case "class_exp":
				$('#class_exp').append('<div class="emoji_div"><button type="button" class="btn btn-default" id="'+elementID+'"></button></div>');
				
				if(raterOverall < 4){
			
					$('#'+elementID).append('<img src="emojis/Crying_Face_Emoji.PNG" alt="Crying Face" width="90" height="90" id="'+elementID+'"></img>');
				
				} else if(raterOverall >= 4 && raterOverall <= 6) {
					
					$('#'+elementID).append('<img src="emojis/Expressionless_Face_Emoji.PNG" alt="Expressionless Face" width="90" height="90" id="'+elementID+'"></img>');
				
				} else {
					
					$('#'+elementID).append('<img src="emojis/Smirk_Face_Emoji.PNG" alt="Smirking Face" width="90" height="90" id="'+elementID+'"></img>');
				
				}
				
				$('#'+elementID).append('<div id="'+elementID+'">'+raterYear+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+raterMajor+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">'+element_display+'</div>');
				$('#'+elementID).append('<div id="'+elementID+'">Schedule Match: '+raterSchedule_str+'</div>');
				
				break;
			
			default:
		}
		
	}
	
	/*when button in test section is clicked, an alert pops up giving the username,
	for future purposes, alert will be replaced with expanding preview of rating */
	
	$("button").click(function(event){
		alert(event.target.id);
	});
});