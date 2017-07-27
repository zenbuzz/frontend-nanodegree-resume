//Create objects and array of objects for content replacing %data% in helper.js by index.html.
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
