document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const backButton = document.getElementById('backButton');
    const gameContainer = document.getElementById('gameContainer');
    const menuContainer = document.getElementById('menu');

    menuButtons.forEach(button => {
        button.addEventListener('click', () => {
            const gameName = button.dataset.game;
            loadGame(gameName);
        });
    });

    backButton.addEventListener('click', () => {
        showMenu();
    });

    function loadGame(gameName) {
        // Hide the menu and display the game container
        menuContainer.style.display = 'none';
        gameContainer.style.display = 'block';

        // Clear the current game container
        gameContainer.innerHTML = '';

        // Dynamically load the selected game
        const scriptElement = document.createElement('script');
        scriptElement.src = `${gameName}.js`; // Assuming each game has a separate JavaScript file
        scriptElement.onerror = () => {
            alert(`Failed to load the ${gameName} game. Please try again later.`);
        };
        document.body.appendChild(scriptElement);
    }

    function loadGame(tictactoe) {
        // Hide the menu and display the game container
        menuContainer.style.display = 'none';
        gameContainer.style.display = 'block';

         // Clear the current game container
         gameContainer.innerHTML = '';

    // Dynamically load the selected game
    const scriptElement = document.createElement('script');
    scriptElement.src = `tictactoe.js`; // Assuming each game has a separate JavaScript file
    scriptElement.onerror = () => {
        alert(`Failed to load the $tictactoe game. Please try again later.`);
    };
    document.body.appendChild(scriptElement);



}

    function showMenu() {
        // Hide the game container and display the menu
        gameContainer.style.display = 'none';
        menuContainer.style.display = 'block';
    }
});
