function calculateGrade() {
    // Retrieve the scores from the input fields and convert to percentages (e.g., 86 becomes 0.86)
    const attendanceScore = parseFloat(document.getElementById('attendance').value) / 100 || 0;
    const eval1Score = parseFloat(document.getElementById('eval1').value) / 100 || 0;
    const eval2Score = parseFloat(document.getElementById('eval2').value) / 100 || 0;
    const productScore = parseFloat(document.getElementById('product').value) / 100 || 0;
    const essay1Score = parseFloat(document.getElementById('essay1').value) / 100 || 0;
    const essay2Score = parseFloat(document.getElementById('essay2').value) / 100 || 0;
    const variousScore = parseFloat(document.getElementById('various').value) / 100 || 0;
    const finalExamScore = parseFloat(document.getElementById('finalExam').value) / 100 || 0;

    // Calculate the weighted scores for each category
    const engineerPerformance = (eval1Score * 0.12) + (eval2Score * 0.18) + (productScore * 0.7);
    const learningPrinciples = (essay1Score * 0.5) + (essay2Score * 0.5);
    const applicationTechniques = variousScore; // This is 100% of the Techniques Track

    // Calculate the final weighted score
    const finalGrade = (
      (attendanceScore * 0.10) +
      (engineerPerformance * 0.55) +
      (learningPrinciples * 0.15) +
      (applicationTechniques * 0.15) +
      (finalExamScore * 0.05)
    ) * 100;

    const letterGrade = getLetterGrade(finalGrade);

    // Display the result, rounded to two decimal places
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Final Grade: ${finalGrade.toFixed(2)}% (${letterGrade})`;
    setResultColor(resultElement, letterGrade);
}


// Function to determine the letter grade
function getLetterGrade(numericGrade) {
    if (numericGrade >= 94) return 'A';
    else if (numericGrade >= 90) return 'A-';
    else if (numericGrade >= 87) return 'B+';
    else if (numericGrade >= 83) return 'B';
    else if (numericGrade >= 80) return 'B-';
    else if (numericGrade >= 77) return 'C+';
    else if (numericGrade >= 73) return 'C';
    else if (numericGrade >= 70) return 'C-';
    else if (numericGrade >= 67) return 'D+';
    else if (numericGrade >= 60) return 'D';
    else return 'F';
}


// Function to set the result color based on the letter grade
function setResultColor(element, letterGrade) {
    let backgroundColor;
    let textColor = '#fff'; // Default text color for better contrast on colored backgrounds

    switch (letterGrade) {
      case 'A':
        backgroundColor = '#4CAF50'; // Green
        break;
      case 'A-':
        backgroundColor = '#8BC34A'; // Light Green
        break;
      case 'B+':
      case 'B':
      case 'B-':
        backgroundColor = '#CDDC39'; // Lime
        break;
      case 'C+':
      case 'C':
      case 'C-':
        backgroundColor = '#FFEB3B'; // Yellow
        textColor = '#333'; // Dark text color for better contrast on light background
        break;
      case 'D+':
      case 'D':
        backgroundColor = '#FFC107'; // Amber
        break;
      case 'F':
        backgroundColor = '#F44336'; // Red
        break;
      default:
        backgroundColor = '#BDBDBD'; // Default grey for undefined grades
        textColor = '#333';
    }

    element.style.backgroundColor = backgroundColor;
    element.style.color = textColor;
    element.style.padding = '10px';
    element.style.borderRadius = '4px';
}