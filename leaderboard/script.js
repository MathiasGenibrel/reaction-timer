document.addEventListener('DOMContentLoaded', function () {
    // Données simuler
    const bestTimersData = [
        { id: 1, start_time: "2022-01-01T10:00:00", end_time: "2022-01-01T10:00:05", user_id: 1 },
        { id: 2, start_time: "2022-01-02T12:00:00", end_time: "2022-01-02T12:00:03.500", user_id: 1 },
        { id: 3, start_time: "2022-01-03T15:30:00", end_time: "2022-01-03T15:30:02.800", user_id: 1 },
    ];

    const allTimersData = [
        { id: 1, start_time: "2022-01-01T10:00:00", end_time: "2022-01-01T10:00:05", user_id: 1 },
        { id: 2, start_time: "2022-01-02T12:00:00", end_time: "2022-01-02T12:00:03.500", user_id: 1 },
        { id: 3, start_time: "2022-01-03T15:30:00", end_time: "2022-01-03T15:30:02.800", user_id: 2 },
        { id: 3, start_time: "2022-01-03T15:31:00", end_time: "2022-01-03T15:31:12.800", user_id: 3 },

    ];

    // Ajoute un objet associant les ID d'utilisateur à leurs identifiants
    const userNames = {
        1: 'Roger',
        2: 'Bernard',
        3: 'CharlesLeclerc',

    };

    // ID de l'utilisateur connecté (à remplacer par la vraie logique d'authentification par la suite)
    const loggedInUserId = 1;

    // Trie sur temps de réaction
    function sortDataByReactionTime(data) {
        return data.sort((a, b) => {
            const reactionTimeA = calculateTimeDifference(a.start_time, a.end_time);
            const reactionTimeB = calculateTimeDifference(b.start_time, b.end_time);
            return reactionTimeA - reactionTimeB;
        });
    }

    // Remplissage tableau de mes meilleurs temps
    function fillBestTimersTable() {
        const bestTimersTableBody = document.getElementById('best-timers');
        const sortedBestTimersData = sortDataByReactionTime(bestTimersData);
        sortedBestTimersData.forEach(timer => {
            if (timer.user_id === loggedInUserId) {
                const row = bestTimersTableBody.insertRow();
                row.insertCell(0).textContent = timer.id;
                row.insertCell(1).textContent = calculateTimeDifference(timer.start_time, timer.end_time);
            }
        });
    }

    // Remplissage tableau des meilleurs temps
    function fillAllTimersTable() {
        const allTimersTableBody = document.getElementById('all-timers');
        const sortedAllTimersData = sortDataByReactionTime(allTimersData);
        sortedAllTimersData.forEach(timer => {
            const row = allTimersTableBody.insertRow();
            row.insertCell(0).textContent = timer.id;
            row.insertCell(1).textContent = userNames[timer.user_id]; // Ajoute l'identifiant
            row.insertCell(2).textContent = calculateTimeDifference(timer.start_time, timer.end_time);
        });
    }

    // Calculer la différences entres les deux dates
    function calculateTimeDifference(startTime, endTime) {
        const start = new Date(startTime);
        const end = new Date(endTime);
        const differenceInSeconds = (end - start) / 1000; 
        return differenceInSeconds.toFixed(2); 
    }

    fillBestTimersTable();
    fillAllTimersTable();
});