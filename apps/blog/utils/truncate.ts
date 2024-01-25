export function truncate(
  str: string,
  max: number = 70,
  mark: string = "\u2026"
): string {
  let result: string[] = [];
  let words = str.split(" ");
  let curr_len = 0;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (curr_len + i + word.length < max) {
      result.push(word);
      curr_len = curr_len + word.length;
    } else {
      break;
    }
  }

  return result.join(" ") + mark;
}
