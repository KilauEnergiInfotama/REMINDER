FROM node:21.1.0

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Copy the wait-for-it script (assuming it's in the same directory as your Dockerfile)
COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Modify your CMD to use the wait-for-it script
CMD [ "/usr/src/app/wait-for-it.sh", "db:3306", "--", "node", "index.js" ]

# Ensure you have the following file at the path specified above
