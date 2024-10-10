import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.json';
const baseDir = '<rootDir>/src/app/pass_checker';
const baseTestDir = '<rootDir>/src/test/pass_checker';

const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: [`${baseDir}/**/*.ts`],
  testMatch: [`${baseTestDir}/**/*.test.ts`],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src',
  }),
};

export default config;
