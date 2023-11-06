# Use the official Node.js image.
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .

# Set the command to run your app using Node.js
CMD [ "node", "index.js" ]
