FROM node:lts-slim

# Create server directory
WORKDIR /webapp

ENV NODE_ENV=production

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json /webapp/

RUN npm install

# Bundle app source
COPY . /webapp/

RUN npm run build

COPY . /webapp/

EXPOSE 3001

CMD [ "npm", "run", "server" ]
