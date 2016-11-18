/*JQuery once document has finished loading*/
$( document ).ready(function() {	
	
	/*Set the initial content to be shown in skills area as 'Computing', and make the correct tab look selected*/
	$('#skillsContent').html($("#Computing").html());
	$('.skillsTab:first').css("color","#C30404");
	$('.skillsTab:first').css("border-bottom","3px solid #C30404");
	
	/*If a skills nav item is clicked, reset all the items, and load in new content corresponding with clicked tab
	also change styling of item that was clicked to show the current content*/
	$('.skillsTab').click(function(e){
		/*Reset all buttons*/
		resetSkillsButtons();
		
		/*Style clicked button to look selected*/
		$(this).css("color","#C30404");
		$(this).css("border-bottom","3px solid #C30404");
		
		/*Get the first word in text of clicked button*/
		var clickedTabContentID = '#' + $(this).text().split(' ')[ 0 ];		
		
		/*Load in the new content using the first word from text*/
		$('#skillsContent').html($(clickedTabContentID).html());
		
	});
	
	/*If a link on the navbar is clicked scroll the user down to the corresponding section*/
	$('.links').click(function(e){
		/*Extract text from clicked link*/
		var clickedLink = '#' + $(this).text();	
		/*Scroll the user to the clicked section*/
		$("html, body").delay(200).animate({scrollTop: $(clickedLink).offset().top - 50 }, 300);
	});

});

/*This is a function that resets all the skills buttons to their default styling*/
function resetSkillsButtons(){
	$('.skillsTab').css("color","#000");
	$('.skillsTab').css("border-bottom","3px solid #fff");
}

/*Changes the location indication on the navbar.  It uses the window on scroll event*/
$(function(){
  $(window).scroll(function(){
	  
	//Gets the distance the top of the window is from the top of the document
	var top = $(this).scrollTop();
	
	//Gets the distance between each section and the top of the document  (80 to allow for offset, to change the navbar early)
	var Skills = $('#Skills').offset().top -80;	
	var Education = $('#Education').offset().top -80;	
	var Experience = $('#Experience').offset().top -80;
	
	var Referees = $('#Referees').offset().top -80;
	
	var Contact = $('#Contact').offset().top -80;		
	
	var index = -1;
	
	//If in content area 1
	if(top <= Skills){
		index = -1
	}
	
	//If in content area 1
	if(top >= Skills && top <= Education){
		index = 0;
	}
	//If in content area 2
	else if(top >= Education && top <= Experience){
		index = 1;		
	}
	//If in content area 3
	else if(top >= Experience && top <= Referees){
		index = 2;		
	}
	//If in content area 3
	else if(top >= Referees && top <= Contact){
		index = 3;		
	}
	//If at bottom of page
	if($(window).scrollTop() + $(window).height() + 30 >= $(document).height()) {
       index = 4;
   }		
	
	setAllInactive();
	setActive(index);
	
  });
});

function setActive(index){
	if (index != -1){
		$('.links').eq(index).css("border-bottom","3px solid #C30404");
	}	
}

function setAllInactive(){
	$('.links').css("border-bottom","3px solid #000");
}
