export function getNameInitials(name: string) {
  const words = name.split(" ");

  let nameInitials = "";

  if (words.length === 1) {
    // If there's only one word, take the first two characters
    nameInitials = `${words[0].slice(0, 2)}`;
  } else if (words.length > 2 && words[1] === "&") {
    // If there are more than two words and the second is "&", take the first and third initials
    nameInitials = `${words[0][0]} ${words[2][0]}`;
  } else {
    // If there are exactly two words or none of the above conditions, take the first initials of the first two words
    nameInitials = `${words[0][0]} ${words[1][0]}`;
  }

  return nameInitials;
}