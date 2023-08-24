# cypress-grep-example

This is example of using [@mmisty/cypress-grep(https://www.npmjs.com/package/@mmisty/cypress-grep) package for cypress


To run tests: 
 - `CYPRESS_GREP='@smoke' npm run cy:grep` - will run all with `@smoke`
 - `CYPRESS_GREP='!@smoke' npm run cy:grep` - will run all non-`@smoke`
 - `CYPRESS_GREP='@smoke|@P1' npm run cy:grep` - will run all tests with `@smoke` or `@P1` 
 - `CYPRESS_GREP='@smoke&@P1' npm run cy:grep` - will run all tests with `@smoke` AND `@P1`
 - `CYPRESS_GREP='!(@smoke&@P1)' npm run cy:grep` - inverts result - will run all tests without `@smoke` and `@P1` (case in-sensitive)


All tags are case in-sensitive - you can either use `@p1` or `@P1`