import { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
  schema: "introspectionSchema.json",
  documents: ["queries.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./gql/": {
      preset: "client",
      plugins: [],
    },
  },
}

export default config
