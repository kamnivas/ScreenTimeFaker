<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add/Change Usage</title>
    <style>
        html, body {
            height: 100%;
            margin: 0;
            font-family: Arial, sans-serif;
            background-color: #000000;
            color: #e0e0e0;
            overflow-x: hidden;
        }
        .header {
            background-color: #000000;
            padding: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        .header .back-button {
            position: absolute;
            left: 10px;
            font-size: 28px;
            color: #007aff;
            text-decoration: none;
            background: transparent;
            border: none;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .header .back-button svg {
            width: 28px;
            height: 28px;
        }
        .header .back-button svg path {
            fill: none;
            stroke: #007aff;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
        }
        .header .back {
            position: absolute;
            left: 35px;
            font-size: 17px;
            color: #007aff;
        }
        .header .title {
            font-size: 17px;
            font-weight: 600;
            color: #f0f0f5;
            text-align: center;
        }
        .button-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 20px;
        }
        .input {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 50px;
            width: calc(100% - 100px);
            box-sizing: border-box;
        }

        .input label {
            margin-right: 10px;
            width: 120px;
        }

        .input input {
            width: 100px;
            text-align: center;
        }

        .button {
            background-color: #007aff;
            color: #ffffff;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
        }
        input {
            background-color: #222222;
            color: #e0e0e0;
            border: 1px solid #444444;
            border-radius: 5px;
            padding: 5px;
            width: 100px;
            text-align: center;
        }
        .clear-data-button-container {
            display: flex;
            justify-content: center;
            padding: 20px;
            margin-top: 30px;
        }
        .clear-data-button {
            background-color: #ff3b30;
            color: #ffffff;
            border: none;
            padding: 10px 20px;
            font-size: 16px;
            border-radius: 5px;
            cursor: pointer;
            text-align: center;
            font-weight: bold;
        }
        .day-button {
            width: 100%;
            padding: 12px;
            color: #ffffff;
            background-color: #333333;
            border: 1px solid #555555;
            margin-bottom: 10px;
            border-radius: 5px;
            text-align: left;
        }
        .day-button a {
            text-decoration: none;
            color: #ffffff;
            display: block;
        }
    </style>
</head>
<body>
    <div class="header">
        <a href="index.html" class="back-button">
            <div class="back">Back</div>
            <svg viewBox="0 0 24 24" class="icon">
                <path d="M15 18l-6-6 6-6" stroke="#007aff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </a>
        <div class="title">Edit Data</div>
    </div>
    <div id="screenTimeData"></div>
    <div class="input">
        <label for="phone-name">Phone Name:</label>
        <input type="text" id="phone-name" value="">
    </div>
    <div class="button-container">
        <button class="day-button"><a href="edit-day.html?day=Sunday">Sunday</a></button>
        <button class="day-button"><a href="edit-day.html?day=Monday">Monday</a></button>
        <button class="day-button"><a href="edit-day.html?day=Tuesday">Tuesday</a></button>
        <button class="day-button"><a href="edit-day.html?day=Wednesday">Wednesday</a></button>
        <button class="day-button"><a href="edit-day.html?day=Thursday">Thursday</a></button>
        <button class="day-button"><a href="edit-day.html?day=Friday">Friday</a></button>
        <button class="day-button"><a href="edit-day.html?day=Saturday">Saturday</a></button>
    </div>
    <div class="button-container">
        <button class="button" onclick="saveChanges()">Save Changes</button>    
    </div>
    <div class="clear-data-button-container">
        <button class="clear-data-button" onclick="clearAllData()">Clear All Data</button>
    </div>
    <script src="./script.js"></script>
    <script>
        // Load data on startup
        window.onload = loadData;

        document.addEventListener('DOMContentLoaded', function() {
            const screenTimeDataContainer = document.getElementById('screenTimeData');
            const phoneName = localStorage.getItem('phoneName') || 'Apple iPhone';

            // Initialize Phone Name
            document.getElementById('phone-name').value = phoneName;

            // Example list of days
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

            // Function to convert minutes to hours and minutes
            function formatMinutes(minutes) {
                const hours = Math.floor(minutes / 60);
                const remainingMinutes = minutes % 60;
                return `${hours}h ${remainingMinutes}m`;
            }
        });

        function calculateTotalScreenTime(dayData) {
            return Object.values(dayData).reduce((acc, val) => acc + (typeof val === 'number' ? val : 0), 0);
        }

        function editDay(day) {
            window.location.href = `edit-day.html?day=${day}`;
        }
    </script>    
</body>
</html>