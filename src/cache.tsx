import { InMemoryCache, makeVar } from "@apollo/client";

export const clickCountVar = makeVar(0);

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clickCount: {
          read() {
            return clickCountVar();
          },
        },
      },
    },
  },
});
