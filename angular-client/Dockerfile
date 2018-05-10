# Create image based on the official Node 6 image from dockerhub
FROM node:latest

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/client

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/client


# Copy dependency definitions
COPY package.json /usr/src/client

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /usr/src/client

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "start"]