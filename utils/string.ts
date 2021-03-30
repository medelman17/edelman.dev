export const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

export const titleCase = (s: string) => s.split(" ").map(capitalize).join(" ");
