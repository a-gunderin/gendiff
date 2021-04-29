import { Command } from 'commander/esm.mjs';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.');

export default program;