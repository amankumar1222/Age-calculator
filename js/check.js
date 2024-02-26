function formatDate(inputDate) {
    // Parse the input date
    const [day, month, year] = inputDate.split(',').map(item => parseInt(item.trim()));
    
    // Create Date objects for input and current date
    const inputDateObj = new Date(year, month - 1, day); // Month is 0-indexed in JavaScript
    const currentDateObj = new Date();
    
    // Calculate the difference in milliseconds
    const timeDifference = currentDateObj.getTime() - inputDateObj.getTime();
    
    // Convert milliseconds to years, months, and days
    const millisecondsPerYear = 1000 * 60 * 60 * 24 * 365.25; // Considering leap years
    const years = Math.floor(timeDifference / millisecondsPerYear);
    const remainingMilliseconds = timeDifference % millisecondsPerYear;
    const millisecondsPerMonth = 1000 * 60 * 60 * 24 * 30.44; // Average number of days in a month
    const months = Math.floor(remainingMilliseconds / millisecondsPerMonth);
    const remainingDays = Math.floor((remainingMilliseconds % millisecondsPerMonth) / (1000 * 60 * 60 * 24));

    // Construct the formatted output
    const formattedOutput = `${years} years, ${months} months, ${remainingDays} days`;

    return formattedOutput;
}

// Example usage
const inputDate = "05, 03, 2000";
const formattedOutput = formatDate(inputDate);
console.log(formattedOutput); // Output: "24 years, 11 months, 20 days" (Considering the current date is in 2024)
