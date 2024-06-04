# Step 1: Use an official Node.js runtime as a parent image
FROM node:18-alpine AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

ENV REACT_APP_BACKEND_URL=http://18.117.126.64:8098
# Step 5: Copy the rest of the application code to the working directory
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Install serve to serve the build output
RUN npm install -g serve

# Step 8: Set the command to run the application
CMD ["npm", "start"]

