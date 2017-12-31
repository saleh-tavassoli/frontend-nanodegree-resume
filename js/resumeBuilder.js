var bio = {
    'name': 'Mahmoud (Saleh) Joz Tavassoli',
    'role': 'Web Developer',
    'contacts': {
        'mobile': '000-0000',
        'email': 'm.s.j.tavassoli@gmail.com',
        'location': 'Berlin',
        'github': 'saleh-tavassoli'
    },
    'welcomeMessage': 'Hi. I work as Frontend developer in Berlin. I love my' +
        'profession. I boost my work quality and efficiency by continuous' +
        'learning by doing strategy. Goal and result oriented when coding.' +
        '<br> I’m currently working full-time but I have an eye for new ' +
        'opportunities on freelancing or full-time positions(Remote or Berlin)',
    'skills': [
        'Awesomeness', 'Programming', 'HTML', 'CSS', 'JavaScript', 'jQuery',
        'Bootstrap', 'SASS', 'LESS', 'Git', 'PHP', 'MySql', 'Smarty'
    ],
    'biopic': 'images/saleh.jpg',
    'display': function() {
        var data = '%data%';
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        var formattedName = HTMLheaderName.replace(data, bio.name);
        var formattedbiopic = HTMLbioPic.replace(data, bio.biopic);
        var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
        var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
        var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
        var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
        var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
        $('#header').prepend(formattedRole);
        $('#header').prepend(formattedName);
        $('#header').append(formattedbiopic);
        $('#header').append(formattedWelcomeMsg);
        $('#topContacts, #footerContacts').append(formattedEmail);
        $('#topContacts, #footerContacts').append(formattedLocation);
        $('#topContacts, #footerContacts').append(formattedMobile);
        $('#topContacts, #footerContacts').append(formattedGithub);
        $('#header').append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace('%data%', skill);
            $('#skills').append(formattedSkill);
        });
    }
};
var education = {
    'schools': [{
        'name': 'KIT',
        'location': 'Karlsruhe',
        'degree': 'MA',
        'majors': ['Optics'],
        'dates': '2013',
        'url': 'http://www.kit.edu/'
    }],
    'onlineCourses': [
        {
            'title': 'FEND',
            'school': 'Udacity',
            'dates': '2016',
            'url': 'http://www.udacity.com'
        }
    ],
    'display': function() {
        var data = '%data%';
        education.schools.forEach(function(school) {
            $('#education').append(HTMLschoolStart);
            var formattedSchoolName = HTMLschoolName.replace(data, school.name);
            var formattedSchoolDegree = HTMLschoolDegree.replace(data, school.degree);
            var formattedSchoolDates = HTMLschoolDates.replace(data, school.dates);
            var formattedSchoolLocation = HTMLschoolLocation.replace(data, school.location);
            var formattedSchoolMajor = HTMLschoolMajor.replace(data, school.majors);
            var formattedSchoolURL = HTMLschoolURL.replace(/%data%/g, school.url);
            $('.education-entry:last').append(formattedSchoolName + formattedSchoolDegree);
            $('.education-entry:last').append(formattedSchoolDates);
            $('.education-entry:last').append(formattedSchoolLocation);
            $('.education-entry:last').append(formattedSchoolMajor);
            $('.education-entry:last').append(formattedSchoolURL);
        });
        education.onlineCourses.forEach(function(course){
            $('#education').append(HTMLonlineClasses);
            var formattedOnlineTitle = HTMLonlineTitle.replace(data, course.title);
            var formattedOnlineSchool = HTMLonlineSchool.replace(data, course.school);
            var formattedOnlineDates = HTMLonlineDates.replace(data, course.dates);
            var formattedOnlineURL = HTMLonlineURL.replace(data, course.url);
            $('.online-entry:last').append(formattedOnlineTitle + formattedOnlineSchool);
            $('.online-entry:last').append(formattedOnlineDates);
            $('.online-entry:last').append(formattedOnlineURL);
        });
    }
};
var projects = {
    'projects': [
        {
            'title': 'Premium Energy',
            'dates': '2016',
            'description': '<a href="https://www.premium.energy/">www.premium.energy</a>' +
                ' (E-commerce, Prestashop)<br>Technology stack: JavaScript, jQuery, HTML5, CSS3,' +
                'Bootstrap, SASS, Smarty, PHP, Git',
            'images': [
                'images/PremiumEnergy.jpg', 'images/PremiumEnergy-Screens.jpg'
                ]
        },
        {
            'title': 'Energy2Market',
            'dates': '2016',
            'description': '<a href="https://www.e2m.energy">www.e2m.energy</a>  (CMS, Contao)<br>Technology stack: JavaScript, jQuery, HTML5, CSS3, SASS, PHP, Git  <br>',
            'images': [
                'images/e2m_home.png', 'images/e2m.jpg'
                ]
        }
    ],
    'display': function() {
        projects.projects.forEach(function(project) {
            $('#projects').append(HTMLprojectStart);
            var formattedProjectTitle = HTMLprojectTitle.replace('%data%', project.title);
            var formattedProjectDates = HTMLprojectDates.replace('%data%', project.dates);
            var formattedProjectDescription = HTMLprojectDescription.replace('%data%', project.description);
            $('.project-entry:last').append(formattedProjectTitle);
            $('.project-entry:last').append(formattedProjectDates);
            $('.project-entry:last').append(formattedProjectDescription);
            project.images.forEach(function(image) {
                var formattedProjectImage = HTMLprojectImage.replace('%data%', image);
                $('.project-entry:last').append(formattedProjectImage);
            });
        });
    }
};
var work = {
    'jobs': [
        {
            'employer': 'Webraumfahrer GmbH',
            'title': 'Frontend Developer',
            'location': 'Berlin',
            'dates': '2016 - 2017',
            'description': 'Developing Frontend for various projects<br>Installing, preparing and' +'configuring the base for the projects such as GIT and Bash scripting when needed <br>'+' Projects all managed and developed from scratch:<br>'
        },
        {
            'employer': 'CERN',
            'title': 'physicist',
            'location': 'Geneva',
            'dates': '2014 - 2015',
            'description': 'Software development for CMOS particle detector read-out systems.<br> Major skills acquired: Integrated Python and C++ development to create robust and flexible readout software, based on available readout hardware systems.'
        }
    ],
    'display': function () {
        work.jobs.forEach(function(job) {
            $('#workExperience').append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
            var formattedDates = HTMLworkDates.replace('%data%', job.dates);
            var formattedLocation = HTMLworkLocation.replace('%data%', job.location);
            var formattedDescription = HTMLworkDescription.replace('%data%', job.description);
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedLocation, formattedDates);
            $('.work-entry:last').append(formattedDescription);
        });
    }
};
function inName (name) {
    var internationalName = name.trim().split(' ');
    internationalName[0] = internationalName[0].charAt(0).toUpperCase() + internationalName[0].slice(1).toLowerCase();
    internationalName[1] = internationalName[1].toUpperCase();
    return internationalName[0] + ' ' + internationalName[1];
}
// $('#main').append(internationalizeButton);
bio.display();
work.display();
projects.display();
education.display();
$('#mapDiv').append(googleMap);
// Always remember that for-in loop is a bad practice
// Just use for or forEach to iterate through objects and arrays.









