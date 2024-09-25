document.getElementById('submitButton').addEventListener('click', function() {
    const team1Name = document.getElementById('team1Name').value.trim();
    const team2Name = document.getElementById('team2Name').value.trim();

    const team1Players = Array.from(document.getElementById('team1Players').getElementsByTagName('input')).map(input => input.value.trim());
    const team2Players = Array.from(document.getElementById('team2Players').getElementsByTagName('input')).map(input => input.value.trim());

    const errorMessage = validateForm(team1Name, team1Players, team2Name, team2Players);

    if (errorMessage) {
        document.getElementById('message').textContent = errorMessage;
    } else {
        document.getElementById('message').textContent = '';

        // Store team names and players locally
        localStorage.setItem('team1Name', team1Name);
        localStorage.setItem('team2Name', team2Name);
        localStorage.setItem('team1Players', JSON.stringify(team1Players));
        localStorage.setItem('team2Players', JSON.stringify(team2Players));

        alert('Teams and players have been saved successfully!');
        window.location.href = '1st5.html';
    }
});

function validateForm(team1Name, team1Players, team2Name, team2Players) {
    if (!team1Name) {
        return 'Team 1 name cannot be empty.';
    }
    if (!team2Name) {
        return 'Team 2 name cannot be empty.';
    }

    const team1FilledPlayers = team1Players.filter(player => player !== '');
    const team2FilledPlayers = team2Players.filter(player => player !== '');

    if (team1FilledPlayers.length < 5) {
        return 'Team 1 must have at least 5 players.';
    }
    if (team2FilledPlayers.length < 5) {
        return 'Team 2 must have at least 5 players.';
    }

    return '';
}
