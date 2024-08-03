// Define default categories with '&' instead of 'and'
const categories = [
    "Social",
    "Games",
    "Entertainment",
    "Creativity",
    "Productivity & Finance",
    "Education",
    "Information & Reading",
    "Health & Fitness",
    "Utilities",
    "Shopping & Food",
    "Travel",
    "Other"
];

// Initialize data for each day with all categories set to 0
function initializeDayData() {
    return categories.reduce((acc, category) => {
        acc[category] = 0;
        return acc;
    }, {});
}

// Get data from localStorage or initialize with default values
let sundayScreenTimeData = JSON.parse(localStorage.getItem('sundayScreenTimeData')) || initializeDayData();
let mondayScreenTimeData = JSON.parse(localStorage.getItem('mondayScreenTimeData')) || initializeDayData();
let tuesdayScreenTimeData = JSON.parse(localStorage.getItem('tuesdayScreenTimeData')) || initializeDayData();
let wednesdayScreenTimeData = JSON.parse(localStorage.getItem('wednesdayScreenTimeData')) || initializeDayData();
let thursdayScreenTimeData = JSON.parse(localStorage.getItem('thursdayScreenTimeData')) || initializeDayData();
let fridayScreenTimeData = JSON.parse(localStorage.getItem('fridayScreenTimeData')) || initializeDayData();
let saturdayScreenTimeData = JSON.parse(localStorage.getItem('saturdayScreenTimeData')) || initializeDayData();

// Function to calculate the total screen time for each day
function calculateTotalScreenTime(dayData) {
    return Object.values(dayData)
        .map(value => Number(value))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

// Calculate totals for each day
let totalSunday = calculateTotalScreenTime(sundayScreenTimeData);
let totalMonday = calculateTotalScreenTime(mondayScreenTimeData);
let totalTuesday = calculateTotalScreenTime(tuesdayScreenTimeData);
let totalWednesday = calculateTotalScreenTime(wednesdayScreenTimeData);
let totalThursday = calculateTotalScreenTime(thursdayScreenTimeData);
let totalFriday = calculateTotalScreenTime(fridayScreenTimeData);
let totalSaturday = calculateTotalScreenTime(saturdayScreenTimeData);

let totalScreenTimeData = [totalSunday, totalMonday, totalTuesday, totalWednesday, totalThursday, totalFriday, totalSaturday];

export {
    sundayScreenTimeData,
    mondayScreenTimeData,
    tuesdayScreenTimeData,
    wednesdayScreenTimeData,
    thursdayScreenTimeData,
    fridayScreenTimeData,
    saturdayScreenTimeData,
    totalScreenTimeData
};
