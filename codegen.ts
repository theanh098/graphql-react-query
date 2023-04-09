import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'http://localhost:8080/graphql',
  documents: ['src/**/*.graphql'],
  generates: {
    './src/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query']
    }
  },
  config: {
    fetcher: 'graphql-request'
  },
  hooks: {
    afterOneFileWrite: ['prettier --write']
  }
};

export default config;
