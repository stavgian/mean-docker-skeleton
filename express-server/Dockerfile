# Create image based on the official Node 6 image from dockerhub
FROM node:latest


# Create a directory where our app will be placed
RUN mkdir -p /usr/src/server


RUN npm install nodemon -g

WORKDIR /usr/src/server
# Change directory so that our commands run inside this new directory

# Copy dependency definitions
COPY package.json /usr/src/server

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/server

# Expose the port the app runs in
EXPOSE 3000

# Serve the app 
CMD ["npm", "start"]