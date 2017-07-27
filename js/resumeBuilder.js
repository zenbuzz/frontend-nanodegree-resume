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

//If there are any skills in the bio object, replace %data% in helper.js.
bio.display = function() {
	$("#header").append(HTMLskillsStart);

	//This should be a forEach since it loops an array, but I haven't gotten it working.
	//      bio.skills.forEach(function(skill) {
	//        console.log(skill);
	//        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
	//        $("#skills").append(formattedSkill);
	//      }
	for (skill in bio.skills)  {
		var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
		$("#skills").append(formattedSkill);
	}
}

//If there are any jobs in the work object, replace %data% in helper.js.
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
