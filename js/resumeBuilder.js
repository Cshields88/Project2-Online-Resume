//Click Counter
$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;
  logClicks(x,y);
});

//Displays Bio Information
var bio={ //valid
      "name":"Chris Shields",
      "role":"Front-end Web Developer",
      "contacts": {
        "email": "chrisshields88@gmail.com",
        "mobile": "734-652-3316",
        "github": "Cshields88",
        "twitter": "Cshieldsphoto",
        "location": "Erie, MI,"
      },
      "biopic": ["images/me2.jpg"],
      "welcomeMessage": "Welcome To My Resume, Thanks For Your Interest!",
      "skills": ["HTML", "CSS", "JavaScript", "Command Line"]
};

bio.display = function() {
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  var formattedImage = HTMLbioPic.replace("%data%", bio.biopic);
  $("#topContacts").append(formattedImage);
  //var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
  //$("#header").append(formattedWelcomeMsg);
  var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
  $("#topContacts").append(formattedMobile);
  $("#footerContacts").append(formattedMobile);
  var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
  $("#topContacts").append(formattedEmail);
  $("#footerContacts").append(formattedEmail);
  var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
  $("#topContacts").append(formattedTwitter);
  $("#footerContacts").append(formattedTwitter);
  var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
  $("#topContacts").append(formattedGithub);
  $("#footerContacts").append(formattedGithub);
  var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
  $("#topContacts").append(formattedLocation);
  $("#footerContacts").append(formattedLocation);

  if(bio.skills.length>0){
    $("#header").append(HTMLskillsStart);
    var formattedSkill= HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkill);
    formattedSkill= HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkill);
  }
};
bio.display();

//Displays Education
var education= {
  "schools": [
    {
      "name":"Monroe County Community College",
      "location":"Monroe, MI",
      "degree":"Certificate",
      "major":["PC Support Technician"],
      "dates": 2011,
      "url": "www.monroeccc.edu"
    },
    {
      "name":"Film Connection",
      "location":"Los Angeles, CA & Toledo, OH",
      "degree":"Certificate",
      "major":["Digital Cinematography"],
      "dates": 2010,
      "url": "http://www.filmconnection.com/"
        }
],
  "onlineCourses": [
    {
      "title": "Introduction to JavaScript, Learn the Command Line, Make a Website",
      "school": "Code Academy",
      "date": 2015,
      "url": "https://www.codecademy.com"
    },
    {
      "title": "Front-end Web Development Nanodegree",
      "school": "Udacity",
      "date": 2015,
      "url": "http://www.udacity.com"
    }

  ]
};

education.display = function(){
  for(school in education.schools){
    $("#education").append(HTMLschoolStart);
    var formattedName= HTMLschoolName.replace("%data%", education.schools[school].name);
    $(".education-entry:last").append(formattedName);
    var formattedDegree= HTMLschoolDegree.replace("%data%", education.schools[school].degree);
    $(".education-entry:last").append(formattedDegree);
    var formattedDates= HTMLschoolDates.replace("%data%", education.schools[school].dates);
    $(".education-entry:last").append(formattedDates);
    var formattedLocation= HTMLschoolLocation.replace("%data%", education.schools[school].location);
    $(".education-entry:last").append(formattedLocation);
    var formattedMajor= HTMLschoolMajor.replace("%data%", education.schools[school].major);
    $(".education-entry:last").append(formattedMajor);
  }
  if(education.onlineCourses.length){
    $("#education").append(HTMLonlineClasses);
  for(online in education.onlineCourses){
    $("#education").append(HTMLschoolStart);
    var formattedOnlineTitle= HTMLonlineTitle.replace("%data%", education.onlineCourses[online].title);
    $(".education-entry:last").append(formattedOnlineTitle);
  //var formattedOnlineSchool= HTMLonlineSchool.replace("%data%", education.onlineCourses[online].school);
  //$(".education-entry:last").append(formattedOnlineSchool);
    var formattedOnlineDates= HTMLonlineDates.replace("%data%", education.onlineCourses[online].date);
    $(".education-entry:last").append(formattedOnlineDates);
    var formattedOnlineUrl= HTMLonlineURL.replace("%data%", education.onlineCourses[online].url);
    $(".education-entry:last").append(formattedOnlineUrl);
  }
  }
};
education.display();

//Displays Projects Worked On
var projects={ //valid
  "projects": [
    {
      "title":"Website Mock-up",
      "dates":"2015",
      "description":"We were given a web design mock-up, then we had to build the mock-up using HTMl & CSS.",
      "images":["images/mockup.jpg"]
    },
    //TODO: ADD INFORMATION WHEN AVAILABLE
// {
//   "title":"Arcade Game",
//   "dates":"2015",
//    "description":"",
//    "images":[""]
//  },
//  {
//    "title":"Neighborhood Map",
//    "dates":"2016",
//    "description":"",
//    "images":[""]
//    }
  ]
}

projects.display = function(){
  for(project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle= HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates= HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription= HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  if (projects.projects[project].images.length>0){
  for(image in projects.projects[project].images){
    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
    $(".project-entry:last").append(formattedImage);
  }
  }
  }
};
projects.display();

//Displays Work Experience
var work={ //valid
  "jobs": [
    {
      "employer":"La Fiesta Restaurant",
      "title":"Head Line-cook",
      "location":"Erie, MI",
      "dates":"May 2005-present",
      "description":["I currently work Full-time as a line-cook at La Fiesta Restaurant in Erie, MI.  My daily duties include cooking and preparing the food for customers, Opening the restaurant, and managing the kitchen as needed."]
    },
    {
      "employer":"Malone & Dodge Motion Picture Photography",
      "title":"Production Assistant/Second Cameraman",
      "location":"Toledo, OH",
      "dates":"May 2010-June 2011",
      "description":["I worked/interned at Malone & Dodge for a year following my degree completion in Digital Cinematography.  My duties included shooting video, lighting, audio (placing and monitoring microphones), backdrop set-up, and video editing"]
    }
  ]
}

work.display = function(){
  for(job in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle= HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle= formattedEmployer + formattedTitle;
    $(".work-entry:last").append(formattedEmployerTitle);
    var formattedDates= HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
};
work.display();

//Displays Map of Places Worked/Lived
$("#mapDiv").append(googleMap);
