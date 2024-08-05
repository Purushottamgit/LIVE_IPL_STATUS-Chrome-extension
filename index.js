const getMatchData = async () => {
    try {
        const response = await fetch('https://api.cricapi.com/v1/currentMatches?apikey=77efa91e-8527-42e8-a798-e12669e69e4b&offset=0');
        const data = await response.json();
        const matchData = data.data;
        const iplData = matchData.filter(match => match.series_id == "76ae85e2-88e5-4e99-83e4-5f352108aebc");
        const matchStatus = iplData.map((match) =>  `${match.name} , ${match.status}`);
        console.log(matchData);

        // console.log(iplData[0].teamInfo[0].shortname);
        // console.log(iplData[0].teamInfo[1].shortname);
        // const team1 = iplData[0].teamInfo[0].shortname;
        // const team2 = iplData[0].teamInfo[1].shortname;
        // console.log(team1, team2);

        document.getElementById("score").innerHTML = matchStatus.map(match => `<li>${match}</li>`).join('');
        // document.getElementById("status").innerText = `${team1} + " vs " + ${team2}`;
    } catch (error) {
        console.error('Error fetching match data:', error);
    }
}

getMatchData();
