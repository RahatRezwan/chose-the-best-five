const selectBtn = document.getElementsByClassName("select-btn");
const selectedPlayer = [];
for (let btn of selectBtn) {
    btn.addEventListener("click", function (event) {
        //get the player name from the parentNode
        const players = event.target.parentNode.children[0].innerText;
        selectedPlayer.push(players);
        //check if the players list is less than five
        if (selectedPlayer.length <= 5) {
            const playerList = getInnerTextById("selected-player-list");
            //add player in the player list
            const li = document.createElement("li");
            li.innerText = players;
            li.classList.add("mb-4");
            playerList.appendChild(li);
            //make button disabled
            btn.style.backgroundColor = "grey";
            btn.style.color = "white";
            btn.disabled = true;
        } else {
            //Cannot Add More Than 5 Warning
            let warningText = getInnerTextById("warning-text");
            warningText.innerText = "You Can't Select More Than 5 Players";
            document.getElementById("notification-container").classList.add("show");
        }
    });
}
