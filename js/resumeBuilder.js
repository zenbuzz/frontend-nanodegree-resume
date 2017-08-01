// Create objects and array of objects for content replacing %data% in helper.js by index.html.
var bio = {
	"name": "Pennywise Clown",
	"role": "Childood Trauma Development",
  "contacts": {
		"mobile": "207-666-5309",
		"email": "pennywise@beepbeeprichie.com",
		"github": "zenbuzz",
		"twitter": "zenonbass",
		"location": "Bangor, ME"
	},
	"welcomeMessage": "\"We all float down here!\"",
	"skills": ["Balloons", "Joke Telling", "Eating Kids", "Sewer Remediation"],
  "biopic": "images/me.png"
}

var education = {
  "schools": [
    {
      "name": "Clown College of Maine",
      "location": "Bangor, ME",
      "degree": "Clown Business Administration",
      "majors": ["Polymorphic Performing Arts, Psychology"],
      "dates": "1948-1955",
      "url": "http://www.ccom.edu"
    },
    {
      "name": "Clown State Institute of Newark",
      "location": "Newark, NJ",
      "degree": "Expelled",
      "majors": ["Clown Management"],
      "dates": "1947-1947",
      "url": "http://www.bccmc.edu"
    }
  ],
  "onlinecourses": [
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com"
    }
  ]
}

var work = {
    "jobs": [
    {
      "employer": "Pennywise & Clown Foolish Enterprises, LLC.",
      "title": "Owner and President",
      "location": "Bangor, ME",
      "dates": "1955-present",
      "description": "Birthday entertainment and \"tough love\" disciplinary services."
    },
		{
			"employer": "Beelzebub's Hate Emporium, Inc.",
			"title": "Greeter",
			"location": "7th Level, HL",
			"dates": "0034-1947",
			"description": "Oversee the new member intake process. Develop community outreach programs."
		}
  ]
}

var projects = {
  "projects": [
    {
      "title": "Project Richie",
      "dates": "1955-1986",
      "description": "Study of clowns on the long term psychological development of rural youth.",
      "images": ["images/projectrichie.png"]
		}
	]
}

var map = {
	"content": work.jobs.employer
}

// If there are any skills in the bio object, replace %data% in helper.js.
bio.display = function() {
	$("#header").append(HTMLskillsStart);
// When I moved these over from index.html, they caused the skills to move to the top for some reason.
	$("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").prepend(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#header").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#header").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#header").prepend(HTMLemail.replace("%data%", bio.contacts.email));
	$("#header").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	//Appends the array of bio.skills to the #skills section.
	//TODO: Can the indexing be any cleaner?
	index = 0
	bio.skills.forEach(function(skill) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[index]);
		$("#skills").append(formattedSkill);
		index += 1
	});
}

// If there are any jobs in the work object, replace %data% in helper.js.
work.display = function() {
$("#workExperience").append(HTMLworkStart);
for (job in work.jobs) {
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer +
			formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
	}
}

// If there are any jobs in the projects object, replace %data% in helper.js.
projects.display = function() {
	for (project in projects.projects)  {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedProjectDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}
	}
}

// If there are any jobs in the education object, replace %data% in helper.js.
education.display = function() {
	$("#education").append(HTMLschoolStart);

	for (school in education.schools)  {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
		$(".education-entry:last").append(formattedSchoolMajors);
	}
}

// Add a map to the page.
$("#mapDiv").append(googleMap);

// Add an overlay in HTML when the marker is clicked on the map.
//map.overlay = function() {
//	mapOverlay.replace("%data%", map.content);
//}
