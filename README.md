# Installation

1. Run `yarn install` to install deps
2. Run `yarn start-api` to start a repro mesh instance

By default mesh is listening on localhost:5000

# Reproduction

Execute this query:
```json
{
  "operationName": "getCountries",
  "variables": {},
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "6dbbfe8395bc50a37773efd5303375227cc1150b2671de2d220709e89be08097"
    }
  },
  "query": "query getCountries {countries {code name}}"
}
```

The result is returned as expected.

Now execute this query:
```json
{
  "operationName": "getCountries",
  "variables": {},
  "extensions": {
    "persistedQuery": {
      "version": 1,
      "sha256Hash": "6dbbfe8395bc50a37773efd5303375227cc1150b2671de2d220709e89be08097"
    }
  }
}
```

Expected result: the same as the previous query.
Actual result:
```
{"errors":[{"message":"Must provide query string."}]}
```