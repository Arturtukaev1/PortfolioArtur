const personDetails = {
    personal: {
      firstName: "Artur",
      lastName: "Tukaev",
      email: "arturtukaev2@gmail.com",
      age: 25,
      languages: "English and Russian",
      phone: "Will be Available soon 😉",
      contactMail: "arturtukaev2@gmail.com",
      address: "Russia, Kazan",
      nationality: "Tatar in",
      freelance: "+",
      description: "I'm a Web Designer & Full Stack Developer who is focused on crafting user‑friendly products, I have the ability to build Discord bots, Telegram bots, Web apps and Websites. I am passionate about building excellent software that improves the lives of those around me."
    },
    professional: {
      yoe: 1,
      completedProjects: 16,
      happyCustomers: 2,
      awardsWon: 3,
    },
    academic: {
      college: {
        name: "Web Studio",
        duration: "2024-2028(expected)",
        course: "",
      },
      school: {
        name: "Kazan National Research Technological University",
        duration: "2017-2021",
        course: "University"
      }
    },
    skills: {
      // key: skill name
      // value: skill percentage
      "html": 95,
      "javascript": 10,
      "css": 70,
      "nodejs": 10,
      "wordpress": 85,
      "python": 10,
      "gitAndGithub": 50,
      "vscode": 50,
      },
    social: {
      github: "https://github.com/Arturtukaev1",
      telegram: "https://t.me/Crypto_punk1"
    }
  };

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-address', personDetails.personal.address);
  setElemAttribute('person-nationality', personDetails.personal.nationality);
  setElemAttribute('person-freelance', personDetails.personal.freelance);
  setElemAttribute('person-email', personDetails.personal.email);
  setElemAttribute('person-contactMail', personDetails.personal.contactMail);
  setElemAttribute('person-phone', personDetails.personal.phone);
  setElemAttribute('person-languages', personDetails.personal.languages);
  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-duration', personDetails.academic.school.duration);
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('css');
  setSkillValue('javascript');
  setSkillValue('python');
  setSkillValue('nodejs');
  setSkillValue('wordpress');
  setSkillValue('gitAndGithub');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('telegram', personDetails.social.telegram, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');