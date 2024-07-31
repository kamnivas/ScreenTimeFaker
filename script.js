// Daily screen time data (in minutes)
const screenTimeData = [60, 45, 30, 90, 50, 110, 40];

// Default variables
let currentLabelType = 'label012';
let currentTime = '';
let viewMode = 'week'; // Default view mode
let currentDataTime = '';

// Function to update the time
function updateTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    const displayHours = hours % 12 || 12;
    const displayMinutes = minutes < 10 ? '0' + minutes : minutes;

    currentTime = `${displayHours}:${displayMinutes} ${ampm}`;

    // Update the HTML element with the current time
    document.getElementById('time-display').textContent = `Updated today at ${currentTime}`;
}

// Function to calculate the weekly average
function calculateWeeklyAverage(data) {
    const total = data.reduce((sum, time) => sum + time, 0);
    const average = total / data.length;
    return average;
}

// Function to format the average time
function formatTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return hours > 0 ? `${hours} h ${mins} m` : `${mins} m`;
}

function getFormattedDate() {
    const today = new Date();
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    const todayDate = new Date().toDateString(); // Today's date
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1); // Yesterday's date
    const yesterdayDate = yesterday.toDateString();
    
    // Format the date
    const day = today.getDate();
    const month = monthNames[today.getMonth()];
    
    // Determine the label based on the date
    if (todayDate === new Date().toDateString()) {
        return `Today, ${month} ${day}`;
    } else if (yesterdayDate === new Date().toDateString()) {
        return `Yesterday, ${month} ${day}`;
    } else {
        // For dates beyond yesterday, return the day name and date
        return `${dayNames[today.getDay()]}, ${month} ${day}`;
    }
}


// Update current-data-time in details.html
function updateCurrentData() {
    if (viewMode === 'day') {
        currentDataTime = screenTimeData[screenTimeData.length - 1]; // Assuming the last entry is today's data
        document.querySelector('.current-data-time').textContent = formatTime(currentDataTime);
        document.querySelector('.current-data').textContent = getFormattedDate(); // Update the label

        document.querySelector('.extra-grid').style.display = 'block';
    } else if (viewMode === 'week') {
        currentDataTime = calculateWeeklyAverage(screenTimeData);
        document.querySelector('.current-data-time').textContent = formatTime(currentDataTime);
        document.querySelector('.current-data').textContent = 'Daily Average'; // Default label for week view

        document.querySelector('.extra-grid').style.display = 'none';
    }
}

function updateIntervalLabels(screenTimeData) {
    const labelsElement = document.getElementById('interval-labels');

    // Find the maximum screen time from the data
    const maxTime = Math.max(...screenTimeData);
    
    let labels;
    let positions = [39.5, 25.5, 11.5];
    
    // Determine labels based on maximum usage
    if (maxTime >= 2 * 60) { // If max time is 2 hours or more (120 minutes)
        labels = ["0", "2h", "4h"];
        currentLabelType = 'label024'
    } else { // Default Case (0, 1, 2 hours)
        labels = ["0", "1h", "2h"];
        currentLabelType = 'label012'
    }

    // Update the labels in the HTML
    labelsElement.innerHTML = `
        <text x="98" y="${positions[0]}" class="interval-label">${labels[0]}</text>
        <text x="98" y="${positions[1]}" class="interval-label">${labels[1]}</text>
        <text x="98" y="${positions[2]}" class="interval-label">${labels[2]}</text>
    `;
}

// Function to render the screen time data
function renderBars(screenTimeData) {
    const maxTime = Math.max(...screenTimeData);
    const maxBarHeight = 28;
    let pixelPerMinute;
    if (currentLabelType === 'label024') {
        pixelPerMinute = maxBarHeight / (4 * 60); // 4 hours maximum for this label type
    } else {
        pixelPerMinute = maxBarHeight / (2 * 60); // 2 hours maximum for this label type
    }

    let heightMultiplier = 1;
    if (currentLabelType === 'label024') {
        heightMultiplier = 0.5;
    }

    const barsContainer = document.getElementById('bars-container');
    barsContainer.innerHTML = ''; // Clear existing bars

    screenTimeData.forEach((time, index) => {
        const height = (time * pixelPerMinute) * heightMultiplier;
        const xPosition = (index * 13.75) + 3.75;
        const yPosition = (maxBarHeight - height) + 10;

        // Create the bar with rounded top corners
        const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        bar.setAttribute('x', xPosition);
        bar.setAttribute('y', yPosition);
        bar.setAttribute('width', 6.25);
        bar.setAttribute('height', height);
        bar.setAttribute('rx', 0.75); // Round all corners (cover rounded bottom later)
        bar.setAttribute('fill', '#40c8e0');
        barsContainer.appendChild(bar);

        // Cover rectangle to hide rounded bottom
        const coverRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        coverRect.setAttribute('x', xPosition);
        coverRect.setAttribute('y', yPosition + height - 1);
        coverRect.setAttribute('width', 6.25);
        coverRect.setAttribute('height', 1); // Height of the cover to hide rounded bottom
        coverRect.setAttribute('fill', '#40c8e0');
        barsContainer.appendChild(coverRect);
    });
}

// Function to calculate the average y value for line height
function calculateAverageY(screenTimeData, currentLabelType) {
    // Calculate average screen time
    const average = calculateWeeklyAverage(screenTimeData);

    // Calculate pixels per minute
    let pixelPerMinute;
    if (currentLabelType === 'label024') {
        pixelPerMinute = 28 / (4 * 60); // 4 hours maximum for this label type
    } else {
        pixelPerMinute = 28 / (2 * 60); // 2 hours maximum for this label type
    }

    // Calculate average Y position
    const averageYPosition = 10 + (28 - (average * pixelPerMinute));
    return averageYPosition;
}

// Function to render the avg line based on the average y value
function renderAverageLine(screenTimeData, currentLabelType) {
    const averageYPosition = calculateAverageY(screenTimeData, currentLabelType);

    const averageLineContainer = document.getElementById('average-line-container');
    averageLineContainer.innerHTML = ''; // Clear any existing content

    // Create and append the average line
    const averageLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
    averageLine.setAttribute('x1', '0');
    averageLine.setAttribute('y1', averageYPosition);
    averageLine.setAttribute('x2', '96.25');
    averageLine.setAttribute('y2', averageYPosition);
    averageLine.setAttribute('class', 'average-line');
    averageLineContainer.appendChild(averageLine);

    // Create and append the average label
    const averageLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
    averageLabel.setAttribute('x', '98');
    averageLabel.setAttribute('y', averageYPosition + 1);
    averageLabel.setAttribute('class', 'average-text');
    averageLabel.textContent = 'avg';
    averageLineContainer.appendChild(averageLabel);
}

window.updateTime = updateTime;
window.calculateWeeklyAverage = calculateWeeklyAverage;
window.formatTime = formatTime;
window.updateCurrentData = updateCurrentData;
window.updateIntervalLabels = updateIntervalLabels;
window.renderBars = renderBars;
window.renderAverageLine = renderAverageLine;
window.screenTimeData = screenTimeData;
window.currentLabelType = currentLabelType;
window.viewMode = viewMode;