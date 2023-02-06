# Use the official Node.js image as the base image
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the app dependencies
RUN npm install

# Copy the rest of the app files to the container
COPY . .

# Set the environment variable API_BASE_URL
ENV API_BASE_URL=https://imibonano-server.onrender.com/api

# Expose port 3000
EXPOSE 3000

# Start the app
CMD [ "npm", "start" ]
