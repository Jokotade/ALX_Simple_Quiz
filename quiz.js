function checkAnswer() {
    // Select the checked radio button by its name attribute
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an option is selected
    if (!selectedOption) {
        alert('Please select an answer.');
        return;
    }

    // Access the value property of the selected radio button
    const userAnswer = selectedOption.value;

    // Assuming the correct answer is stored in a variable called correctAnswer
    const correctAnswer = "4"; // Replace with the actual correct answer value

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Check if the user's answer is correct
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = 'Correct! Well done.';
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);