import { initState } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .split(" ")
    .filter((line) => line.trim() !== "");
}

export function startREPL(): void {
  const state = initState();
  const { rl } = state;

  rl.prompt();
  rl.on("line", (line: string) => {
    const input = cleanInput(line);

    if (input.length < 1) {
      rl.prompt();
    } else if (input.length === 1) {
      const command = input[0];
      if (command in state.commands) {
        state.commands[command].callback(state);
      } else {
        console.log("Unknown Command");
        rl.prompt();
      }
    }
  });
}
