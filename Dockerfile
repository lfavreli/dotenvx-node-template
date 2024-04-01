FROM node:lts-alpine

# Set the working directory
WORKDIR /app

# Install cURL
RUN apk update && apk add --no-cache curl

# Install dotenvx
RUN curl -fsS https://dotenvx.sh/ | sh

# Copy package.json and package-lock.json for npm install
COPY package*.json ./

# Install project dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Running the server
CMD ["dotenvx", "run", "--", "node", "index.js"]
