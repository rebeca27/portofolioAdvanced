document.getElementById('start-button').addEventListener('click', function() {
    document.querySelector('.welcome-screen').style.display = 'none';
    document.getElementById('quest-screen').style.display = 'block';
    startQuest();
});

function startQuest() {
    const questScreen = document.getElementById('quest-screen');
    questScreen.innerHTML = `
        <h2>About Me</h2>
        <p>Navigate through the maze to learn more about my background.</p>
        <div class="maze-container" id="maze-container">
            <div class="maze-cell start" id="start"></div>
            <div class="maze-cell" id="cell-1" data-info="I have a Master's degree in Security and Applied Logic from the University of Bucharest."></div>
            <div class="maze-cell" id="cell-2" data-info="I am a Technical Lead Senior Engineer at Infosys, spearheading e-commerce public operational websites."></div>
            <div class="maze-cell" id="cell-3" data-info="I have over 5 years of experience in Java, Spring, and React, blending backend robustness with front-end prowess."></div>
            <div class="maze-cell" id="cell-4" data-info="As an Agile Advocate, I champion remote pairing, pair programming, and continuous story stream in my team."></div>
            <div class="maze-cell" id="cell-5" data-info="I guide my team in full-stack development, ensuring adherence to best coding standards, TDD, and architectural practices."></div>
            <div class="maze-cell" id="cell-6" data-info="I have hands-on experience in cloud software development with AWS, Azure, and Google Cloud."></div>
            <div class="maze-cell" id="cell-7" data-info="I am fluent in English and skilled in critical thinking and adaptability."></div>
            <div class="maze-cell finish" id="finish" data-info="Congratulations! You have completed the maze."></div>
        </div>
        <div class="maze-info" id="maze-info"></div>
    `;

    let currentCell = document.getElementById('start');
    currentCell.style.border = '2px solid yellow';

    const cells = document.querySelectorAll('.maze-cell');
    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const infoBox = document.getElementById('maze-info');
            if (cell === document.getElementById('finish')) {
                alert('Congratulations! You completed the maze.');
                infoBox.style.display = 'none';
            } else {
                currentCell.style.border = '2px solid #888';
                currentCell = cell;
                currentCell.style.border = '2px solid yellow';
                infoBox.innerText = cell.getAttribute('data-info');
                infoBox.style.display = 'block';
            }
        });
    });
}
