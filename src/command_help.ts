import type { State } from "./state.js";

export function commandHelp(state: State): void {
  console.log("Welcome to the Pokedex!");
  console.log("");
  console.log("Usage: ");
  console.log("");
  for (const commandName in state.commands) {
    const command = state.commands[commandName];
    console.log(`Command: ${command.name} - ${command.description}`);
  }
  state.rl.prompt();
}
