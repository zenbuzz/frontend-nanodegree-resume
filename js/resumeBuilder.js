// Create objects and array of objects for content replacing %data% in helper.js by index.html.
var bio = {
	"name": "Pennywise Clown",
	"role": "Childood Trauma Development",
  "contacts": {
		"mobile": "207-666-5309",
		"email": "pennywise@beepbeeprichie.com",
		"github": "zenbuzz",
		"twitter": "zenonbass",
		"location": "Derry, ME"
	},
	"welcomeMessage": "\"We all float down here!\"",
	"skills": ["Balloons", "Joke Telling", "Eating Kids", "Sewer Remediation"],
  "biopic": "images/me.png"
};

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
  "onlineCourses": [
    {
      "title": "Intro to Programming",
      "school": "Udacity",
      "dates": "2017",
      "url": "http://www.udacity.com"
    }
  ]
};

var work = {
    "jobs": [
    {
      "employer": "Pennywise & Clown Foolish Enterprises, LLC.",
      "title": "Owner and President",
      "location": "Derry, ME",
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
};

var projects = {
  "projects": [
    {
      "title": "Project Richie",
      "dates": "1955-1986",
      "description": "Study of clowns on the long term psychological development of rural youth.",
			"chartTitle": "Number of children in each year of the study:",
			"chart": [5, 8, 16, 35, 56, 69],
      "images": ["images/projectrichie.png"]
		},
		{
			"title": "Project Georgie",
			"dates": "1955-1955",
			"description": "Developed a experimental program to help kids float. We all float down here.",
			"chartTitle": "",
			"chart": [],
			"images": ["images/projectgeorgie.png"]
		}
	]
};

var footer = {
  "contacts": ""
};

// Prepend data in the bio object, replace %data% in helper.js.
bio.display = function() {
	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
	$("#topContacts, #footerContacts").prepend(HTMLlocation.replace("%data%", bio.contacts.location));
	$("#topContacts, #footerContacts").prepend(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts, #footerContacts").prepend(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts, #footerContacts").prepend(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#header").append(HTMLskillsStart);
	//Appends the array of bio.skills to the #skills section.
	for (var indexCount = 0; indexCount < bio.skills.length; indexCount++) {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[indexCount]);
		$("#skills").append(formattedSkill);
	}
};

// If there are any jobs in the work object, replace %data% in helper.js.
work.display = function() {
$("#workExperience").append(HTMLworkStart);
for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[indexCount].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[indexCount].title);
	var formattedEmployerTitle = formattedEmployer +
			formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[indexCount].dates);
	$(".work-entry:last").append(formattedDates);

	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[indexCount].location);
	$(".work-entry:last").append(formattedLocation);

	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[indexCount].description);
	$(".work-entry:last").append(formattedDescription);
	}
};

// If there are any jobs in the projects object, replace %data% in helper.js.
projects.display = function() {
	for (var indexCount = 0; indexCount < projects.projects.length; indexCount++) {

		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[indexCount].title);
		$(".project-entry:last").append(formattedProjectTitle);

		var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[indexCount].dates);
		$(".project-entry:last").append(formattedProjectDates);

		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[indexCount].description);
		$(".project-entry:last").append(formattedProjectDescription);

		//If there are images in projects, display them.
		if (projects.projects[indexCount].images.length > 0) {
			for (var indexCount2 = 0; indexCount2 < projects.projects[indexCount].images.length; indexCount2++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[indexCount].images);
				$(".project-entry:last").append(formattedProjectImage);
			}
		}

		//Use D3 to display chart data on projects.
		$("#projects").append(HTMLprojectChart);
		if (projects.projects[indexCount].chart.length > 0) {
			$(".project-entry:last").append(projects.projects[indexCount].chartTitle);
			var formattedProjectChart =
				d3.select(".chart")
					.selectAll("div")
					.data(projects.projects[indexCount].chart)
						.enter()
						.append("div")
						.style("width", function(d) { return d + "px"; })
						.text(function(d) { return d; });
			$(".project-entry:last").append(formattedProjectChart);
		}
	}
};

// If there are any jobs in the education object, replace %data% in helper.js.
education.display = function() {
	$("#education").append(HTMLschoolStart);

	for (var indexCount = 0; indexCount < education.schools.length; indexCount++) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[indexCount].name);
		$(".education-entry:last").append(formattedSchoolName);
		var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[indexCount].degree);
		$(".education-entry:last").append(formattedSchoolDegree);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[indexCount].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[indexCount].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajors = HTMLschoolMajor.replace("%data%", education.schools[indexCount].majors);
		$(".education-entry:last").append(formattedSchoolMajors);
	}

	$(".education-entry:last").append(HTMLonlineClasses);

	for (var indexCount = 0; indexCount < education.onlineCourses.length; indexCount++) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[indexCount].title);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[indexCount].school);
		var formattedOnlineCourse = formattedOnlineTitle + formattedOnlineSchool;
		$(".education-entry:last").append(formattedOnlineCourse);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[indexCount].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[indexCount].url);
		$(".education-entry:last").append(formattedOnlineURL);
	}
};

// Add a map to the page.
$("#mapDiv").append(googleMap);
