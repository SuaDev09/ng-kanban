/// it return the abbreviation of the project name
// example 1: Project Request => PR
// example 2: Internal => IN
const getAbbreviation = (projectName: string): string => {
  if (!projectName.includes(' ')) {
    return projectName.slice(0, 2).toUpperCase(); // Take the first 2 characters
  }
  return projectName
    .split(' ')
    .map((word) => word[0].toUpperCase())
    .join('');
};

export default getAbbreviation;
