FROM node:20

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN yarn install
# Copy app files
COPY . .
# Expose port
EXPOSE 5000
# Start the app
CMD [ "yarn", "start" ]
