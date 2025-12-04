const SUBJECT_PAGES = {
  basic_section: {
    Basic1: {
      "Physical & Health Education":
        "https://eaglecrestwood.modebills.com/physical-and-health-education-basic1/",
      "Prevocational Studies":
        "https://eaglecrestwood.modebills.com/prevocational-studies-basic/",
    },
    Basic2: {
      "Physical & Health Education":
        "https://eaglecrestwood.modebills.com/physical-and-health-education-basic2/",
      "Prevocational Studies":
        "https://eaglecrestwood.modebills.com/prevocational-studies-basic2/",
    },
    Basic3: {
      "Physical & Health Education":
        "https://eaglecrestwood.modebills.com/physical-and-health-education-basic3/",
      "Prevocational Studies":
        "https://eaglecrestwood.modebills.com/prevocational-studies-basic3/",
    },
    Basic4: {
      "Physical & Health Education":
        "https://eaglecrestwood.modebills.com/physical-and-health-education-basic4/",
      "Prevocational Studies":
        "https://eaglecrestwood.modebills.com/prevocational-studies-basic4/",
    },
    Basic5: {
      "Physical & Health Education":
        "https://eaglecrestwood.modebills.com/physical-and-health-education-basic5/",
      "Prevocational Studies":
        "https://eaglecrestwood.modebills.com/prevocational-aptitude-basic5/",
    },
  },
  jss_section: {
    JSS1: {
      History: "https://eaglecrestwood.modebills.com/history-jss1/",
      "ENGLISH LANGUAGE":
        "https://eaglecrestwood.modebills.com/english-language-jss1/",
    },
    JSS2: {
      History: "https://eaglecrestwood.modebills.com/history-jss2/",
      "ENGLISH LANGUAGE":
        "https://eaglecrestwood.modebills.com/english-language-jss2-2/",
    },
    JSS3: {
      History: "https://eaglecrestwood.modebills.com/history-jss3/",
      "ENGLISH LANGUAGE":
        "https://eaglecrestwood.modebills.com/english-language-jss3/",
    },
  },
  sss_section: {
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
