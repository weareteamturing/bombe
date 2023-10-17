import { createProgram, createParser, SchemaGenerator, createFormatter } from 'ts-json-schema-generator';

const config = {
  path: 'src/enigma/types/index.ts',
  tsconfig: 'tsconfig.json',
  type: 'TextView',
};

const program = createProgram(config);

// We configure the parser an add our custom parser to it.
const parser = createParser(program, config);

const formatter = createFormatter(config);
const generator = new SchemaGenerator(program, parser, formatter, config);
const schema = generator.createSchema(config.type);
console.log(schema);
