import { Config } from "jest";

const customJestConfig: Config = {
  preset: "react-native",
  testPathIgnorePatterns: ["constants"],
};

export default customJestConfig;
