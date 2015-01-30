'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})


function initializePage() 
{
 var tabListItems = document.getElementById('tabs').childNodes;
 for (var i = 0; i< tabListItems.length; i++)
 {
  if(tabListItems[i].nodeName == "LI")
  {
    var tabLink = getFirstChildWithTagName(tabListItems[i], 'A');
    var id = getHash( tabLink.getAttribute('href'));
    tabLinks[id] = tabLink;
    contentDivs[id]= document.getElementById(id);
  }
 }

 function tabClick(e) { 
	console.log("Project clicked");
    // prevent the page from reloading 
    e.preventDefault();
    // In an event handler, $(this) refers to 
    // the object that triggered the event 
    //$(this).css("background-color", "#7fff00");
    var projectTitle = $(this).find("p").text();
    //var jumbotronHeader = $("#jumbotron h1");
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);
    var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    if (description.length == 0) { 
       $(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
    } else { 
       description.html("<p>Stop clicking on me! You just did it at " + (new Date()) + "</p>");
    }
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}



