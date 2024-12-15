import readline from "node:readline";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .split(" ")
    .filter((line) => line.trim() !== "");
}

export function startREPL() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });
  rl.prompt();
  rl.on("line", (line: string) => {
    const input = cleanInput(line);
    if (input.length < 1) {
      rl.prompt();
    } else {
      console.log(`Your command was: ${input[0]}`);
      rl.prompt();
    }
  });
}
