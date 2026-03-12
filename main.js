const SUBJECT_PAGES = {
  "basic section": {
    Basic1: {
      "VOCATIONAL APTITUDE":
        "https://eaglecrestwood.modebills.com/vocational-aptitude-basic-1/",
      ICT: "https://eaglecrestwood.modebills.com/ict-basic1/",
    },
    Basic2: {
      "VOCATIONAL APTITUDE":
        "https://eaglecrestwood.modebills.com/vocational-aptitude-basic1-2/",
      ICT: "https://eaglecrestwood.modebills.com/ict-basic2/",
    },
    Basic3: {
      "VOCATIONAL APTITUDE":
        "https://eaglecrestwood.modebills.com/vocational-apt-basic3/",
      ICT: "https://eaglecrestwood.modebills.com/ict-basic3/",
    },
    Basic4: {
      "VOCATIONAL APTITUDE":
        "https://eaglecrestwood.modebills.com/vocational-apt-basic4/",
      ICT: "https://eaglecrestwood.modebills.com/ict-basic4/",
    },
    Basic5: {
      "VOCATIONAL APTITUDE":
        "https://eaglecrestwood.modebills.com/vocational-apt-basic5/",
      ICT: "https://eaglecrestwood.modebills.com/ict-basic5/",
    },
  },
  "jss section": {
    JSS1: {
      "CULTURAL AND CREATIVE ARTS":
        "https://eaglecrestwood.modebills.com/cca-jss1/",
      "HOME ECONOMICS": "https://eaglecrestwood.modebills.com/econs-jss1/",
      "SOCIAL STUDIES":
        "https://eaglecrestwood.modebills.com/socialstudies-jss1/",
    },
    JSS2: {
      "CULTURAL AND CREATIVE ARTS":
        "https://eaglecrestwood.modebills.com/cca-jss2/",
      "HOME ECONOMICS": "https://eaglecrestwood.modebills.com/homecons-jss3/",
      "SOCIAL STUDIES":
        "https://eaglecrestwood.modebills.com/socialstudies-jss2/",
    },
    JSS3: {
      "CULTURAL AND CREATIVE ARTS":
        "https://eaglecrestwood.modebills.com/cca-jss3/",
      "HOME ECONOMICS": "https://eaglecrestwood.modebills.com/honecons-jss3/",
      "SOCIAL STUDIES":
        "https://eaglecrestwood.modebills.com/socialstudies-jss3/",
    },
  },
  "sss section": {
    SS1: {
      /* Add subjects & links */
    },
    SS2: {
      /* Add subjects & links */
    },
    SS3: {
      /* Add subjects & links */
    },
  },
};

const levelSelect = document.getElementById("levelSelect");
const classSelect = document.getElementById("classSelect");
const subjectsContainer = document.getElementById("subjectsContainer");

// Populate levels
Object.keys(SUBJECT_PAGES).forEach((level) => {
  const option = document.createElement("option");
  option.value = level;
  option.textContent = level.toUpperCase();
  levelSelect.appendChild(option);
});

// Update classes when level changes
levelSelect.addEventListener("change", () => {
  populateClasses(levelSelect.value);
});

function populateClasses(level) {
  classSelect.innerHTML = "";
  const classes = Object.keys(SUBJECT_PAGES[level]);
  classes.forEach((cls) => {
    const option = document.createElement("option");
    option.value = cls;
    option.textContent = cls;
    classSelect.appendChild(option);
  });
  showSubjects(level, classes[0]);
}

// Show subjects for selected level & class
classSelect.addEventListener("change", () => {
  showSubjects(levelSelect.value, classSelect.value);
});

function showSubjects(level, cls) {
  subjectsContainer.innerHTML = "";
  const subjects = SUBJECT_PAGES[level][cls];
  if (!subjects || Object.keys(subjects).length === 0) {
    subjectsContainer.innerHTML = `<p class="no-subjects">No subjects available. Check back later</p>`;
    return;
  }

  Object.entries(subjects).forEach(([subjectName, url]) => {
    const card = document.createElement("div");
    card.classList.add("subject-card");
    card.innerHTML = `
      <h3>${subjectName}</h3>
      <a href="${url}" target="_blank">Take Exam</a>
    `;
    subjectsContainer.appendChild(card);
  });
}

// Initialize default selection
levelSelect.selectedIndex = 0;
populateClasses(levelSelect.value);
