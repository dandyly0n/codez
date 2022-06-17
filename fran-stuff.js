/**
 * 
 * @param date {string} 
 * @param names {[string]} List of student names
 * @param submissions {[object]} The quiz submissions
 * @returns {[string]} The students who didn't submit anything on the given date
 */
const findUnsubmitted2 = (date, names, submissions) => {
  // Figure out today's submissions
  const todaysSubmissions = [];
  for (const submission of submissions) {
      if (submission.submissionDate === date) {
          todaysSubmissions.push(submission);
      }
  }
  
  // Cross out the people who submitted anything
  for (const submission of todaysSubmissions) {
      if (names.includes(submission.studentName)) {
        names = crossOutName(submission.studentName, names)
      }
  }

  // return the people who didn't submit anything
  return names
}

/**
 * Remove a name from the given list
 * @param name {string} The name to remove from the list
 * @param names {[string]} The list of names
 * @returns {[string]} The given list of names without name
 */
const crossOutName = (name, names) => {
  const listWithoutName = []

  for (const someName of names) {
    if (someName !== name) {
      listWithoutName.push(someName)
    }
  }

  return listWithoutName
} 
