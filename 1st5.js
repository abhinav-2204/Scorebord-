document.addEventListener('DOMContentLoaded', function() {
    const team1Players = JSON.parse(localStorage.getItem('team1Players')) || [];
    const team2Players = JSON.parse(localStorage.getItem('team2Players')) || [];

    populateDropdown('team1Player1', team1Players);
    populateDropdown('team1Player2', team1Players);
    populateDropdown('team1Player3', team1Players);
    populateDropdown('team1Player4', team1Players);
    populateDropdown('team1Player5', team1Players);

    populateDropdown('team2Player1', team2Players);
    populateDropdown('team2Player2', team2Players);
    populateDropdown('team2Player3', team2Players);
    populateDropdown('team2Player4', team2Players);
    populateDropdown('team2Player5', team2Players);
});

function populateDropdown(dropdownId, players) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.innerHTML = `<option value="">Select a player</option>`; // Default option

    players.forEach(player => {
        const option = document.createElement('option');
        option.value = player;
        option.textContent = player;
        dropdown.appendChild(option);
    });
}

document.getElementById('submitButton').addEventListener('click', function() {
    const selectedTeam1Players = [
        document.getElementById('team1Player1').value,
        document.getElementById('team1Player2').value,
        document.getElementById('team1Player3').value,
        document.getElementById('team1Player4').value,
        document.getElementById('team1Player5').value
    ];

    const selectedTeam2Players = [
        document.getElementById('team2Player1').value,
        document.getElementById('team2Player2').value,
        document.getElementById('team2Player3').value,
        document.getElementById('team2Player4').value,
        document.getElementById('team2Player5').value
    ];

    if (validateSelection(selectedTeam1Players, selectedTeam2Players)) {
        alert('Players have been selected successfully!');
        // Here you can store the selected players or perform the next action
    } else {
        alert('Please select players from both teams.');
    }
    window.location.href = 'score.html';
});

function validateSelection(team1Players, team2Players) {
    return team1Players.every(player => player !== '') && team2Players.every(player => player !== '');
}
