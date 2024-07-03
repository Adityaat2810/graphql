import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;

const server = new ApolloServer({
  typeDefs: `type Query{ hello:String} `,
  resolvers: {
    Query: {
      hello: () => "Hello World",
    }
  },
});

startStandaloneServer(server, {
  listen: {
    port,
  },
})
  .then(() => {
    console.log(`Server is running on port ${port}`);
  })
  .catch((err) => {
    console.log(err);
  });
