// Dubstep
// Link to Kata: https://www.codewars.com/kata/551dc350bf4e526099000ae5

// Solution:

function songDecoder(song) {
  const ogSong = song
    .split("WUB")
    .filter((x) => x !== "")
    .join(" ");
  return ogSong;
}
