# forgEtsy_ImageGrid_fullstack

Microservice/component from etsy project page https://bit.ly/2q5vJq7

### Entry

Entry is App.tsx for routing, primary entry for content is "BelowMainContent"

### Scripts

`npm run start:dev` for local development will, check the linter and if it passes start the application

`npm run server:dev` to build the application, and run it in node.

### Deployment

`docker-compose up` will containerize the applictaion, and spin up the db
make sure `database/db.js` has the host set to `mongo` and not `localhost`, or else you will not be able to access the db.
