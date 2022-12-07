const capitalizeFirstLetter = word => `${word.substring(0, 1).toUpperCase()}${word.toUpperCase().split('_').join(' ').substring(1)}`;

const capitalizeFirstLetter2 = word => word.split('_').map(subWord => {
  if (subWord === 'id') return subWord.toUpperCase();
  return subWord[0].toUpperCase() + subWord.substring(1);
}).join(' ');

const capitalizeFirstLetter3 = word => word.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

export default capitalizeFirstLetter;
export { capitalizeFirstLetter2, capitalizeFirstLetter3 };
