<!-- THIS FILE IS A BASE FOR EACH OF THE STUDENT RATINGS AND IS NOT A FINALIZED VERSION 
Written by: Riley Payung
For: Ratings Website
Function: This is to be a base for all of the expandable student ratings

THIS FILE IS FOR TESTING PURPOSES ONLY AND WILL BE TREATED AS SUCH. ALL PROGRAMMING DONE HERE IS SUBJECT TO CHANGE.

-->

<html>
	<header>
		<title>Student Ratings</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<script src="https://code.jquery.com/jquery-3.2.1.js"></script>
	</header>
	<body>
	
		<script> 
			//This script is for testing purposes only.
			
			$(function(){
				$("#ratingHeader").click(function(){
					var par = $(this).children('#ratingHolder');
					par.find("#rating").slideToggle();
					return false;
					
				});
			});
			
			
		</script>
	
		<div id="ratingHeader" class = "ratingHeader" name="a">
			<div id="ratingHolder">
				<span id="ratingInformation">
					<p id="name">FORMAT: NAME</p>
					<p id="date">FORMAT: MM/DD/YYYY</p>
				</span>
				<div id="rating" class="rating">
				
					<span id = "ratingData"> <!-- Allows for data visibility changes -->
					
						<div id = "ratingHeader"> <!-- Children here will float left -->
							<div id="classInformation">
								<div id="classCourseId" class=""> <!-- Class course name and Id. Children will be evenly spaced here. -->
									<h1 id = "class" class="normal"></h1> <!-- Class name -->
									<p id = "course" class="15ft"></p> <!-- Course id -->
								</div>
									
								<h3 id = "professor" class="normal"></h3> <!-- Professor name -->
								
								<p id ="avgRatings" class="15ft">Average Ratings</p>
								<div id="classAvgData" class="ProfData"> <!-- Will use the average class and professor rating based on multiple ratings. CHILDREN WILL BE EVENLY SPACED HERE -->
									<h1 id="classRating" class="normal">0.0</h1> <!-- Average rating of Class (Overall-> eg. basically the average of all CS112 classes) -->
									<h1 id="profRating" class="normal">0.0</h1> <!-- Average rating of Professor -->
									<p id="noRating" class="15ft"></p> <!-- If the professor has no rating yet, this is what will appear -->
								</div>
							</div>
							<div id="studentInformation">
								
							
							
							</div>
						</div>
						
						<div id = "reviews">
							<div id = "lectureReview"></div>
							<div id = "examsReview"></div>
							<div id = "homeworkReview"></div> <!-- Normal Floating downward appearance -->
							<div id = "professor Review"></div> <!-- Will Float Right -->
						
						</div>
					</span>
				</div>
			</div>
		</div>
	</body>
	<footer>
		
	</footer>
</html>