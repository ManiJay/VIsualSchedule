const schedule = [
    { time: '08:00 AM', activity: 'Breakfast', image: 'breakfast.jpg', audio: 'breakfast.aiff' },
    { time: '09:00 AM', activity: 'Brush Teeth', image: 'toothbrush.jpg', audio: 'brush_teeth.wav' },
    // Add more schedule items as needed
];

const scheduleContainer = document.getElementById('schedule');
const addScheduleBtn = document.getElementById('addScheduleBtn');
const profilePage = document.getElementById('profilePage');
const activitiesPage = document.getElementById('activitiesPage');
const settingsPage = document.getElementById('settingsPage');
const helpPage = document.getElementById('helpPage');
const closeBtn = document.getElementById('closeBtn');
const addSchedulePage = document.getElementById('addSchedulePage')


addScheduleBtn.addEventListener('click', ()=> {
    addSchedulePage.style.display= 'block';
    schedulePage.style.display = 'none';
  
})


schedule.forEach(item => {
    createScheduleItem(item);
});

function createScheduleItem(item) {
    const scheduleItem = document.createElement('div');
    scheduleItem.classList.add('schedule-item');

    const image = document.createElement('img');
    image.src = item.image;

    const activity = document.createElement('span');
    activity.textContent = item.activity;

    const audio = document.createElement('audio');
    audio.controls = true;
    audio.src = item.audio;

    scheduleItem.appendChild(image);
    scheduleItem.appendChild(activity);
    scheduleItem.appendChild(audio);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
        // Prompt for confirmation
        const confirmDelete = confirm('Are you sure you want to delete this schedule?');
        if (confirmDelete) {
            // Delete the schedule
            schedules.splice(i, 1);
            // Update the display
            displaySchedules();
        }
    });
    scheduleItem.appendChild(deleteButton);

    scheduleContainer.appendChild(scheduleItem);
}

const scheduleLink = document.getElementById('scheduleLink');
const profileLink = document.getElementById('profileLink');
const activitiesLink = document.getElementById('activitiesLink');   
const settingsLink = document.getElementById('settingsLink');
const helpLink = document.getElementById('helpLink');
const editProfileBtn = document.getElementById('editProfileBtn');
const profileModal = document.getElementById('profileModal');
const profileForm = document.getElementById('profileForm');
const profileName = document.getElementById('profileName');
const profileAge = document.getElementById('profileAge');
const profileInterests = document.getElementById('profileInterests');
const addScheduleContent = document.getElementById('addScheduleContent');
const scheduleImage = document.getElementById('scheduleImage');
const scheduleName = document.getElementById('scheduleName');
const scheduleSave = document.getElementById('scheduleSave');

scheduleLink.addEventListener('click', openSchedulePage);
profileLink.addEventListener('click', openProfilePage);
activitiesLink.addEventListener('click', openActivitiesPage);
settingsLink.addEventListener('click', openSettingsPage);
helpLink.addEventListener('click', openHelpPage);
editProfileBtn.addEventListener('click', openProfileModal);
profileForm.addEventListener('submit', saveProfile);
closeBtn.addEventListener('click', closeProfileModal);
scheduleSave.addEventListener('click', saveSchedule);

function saveSchedule(event) {
    event.preventDefault();
    const image= document.getElementById('scheduleImage').value;
    const name = document.getElementById('scheduleName').value;
  

    scheduleImage.textContent = Image;
    scheduleName.textContent = Image;

}



function openSchedulePage() {
    hideAllPages();
    schedulePage.style.display = 'block';
    addSchedulePage.style.display = 'none';

}

function openProfilePage() {
    hideAllPages();
    profilePage.style.display = 'block';
    addSchedulePage.style.display = 'none';

}

function openActivitiesPage() {
    hideAllPages();
    activitiesPage.style.display = 'block';
    addSchedulePage.style.display = 'none';

}

function openSettingsPage() {
    hideAllPages();
    settingsPage.style.display = 'block';
    addSchedulePage.style.display = 'none';

}

function openHelpPage() {
    hideAllPages();
    helpPage.style.display = 'block';
    addSchedulePage.style.display = 'none';
}

function openProfileModal() {
    profileModal.style.display = 'block';
}

function saveProfile(event) {
    event.preventDefault();
    const name = document.getElementById('nameInput').value;
    const age = document.getElementById('ageInput').value;
    const interests = document.getElementById('interestsInput').value;

    profileName.textContent = name;
    profileAge.textContent = age;
    profileInterests.textContent = interests;

    closeProfileModal();
}

function closeProfileModal() {
    profileModal.style.display = 'none';
}

function hideAllPages() {
    schedulePage.style.display = 'none';
    profilePage.style.display = 'none';
    activitiesPage.style.display = 'none';
    helpPage.style.display = 'none';
    settingsPage.style.display = 'none';
}

// Initial profile information
profileName.textContent = 'John Doe';
profileAge.textContent = '10 years';
profileInterests.textContent = 'Reading, Drawing';

hideAllPages();
openSchedulePage();
