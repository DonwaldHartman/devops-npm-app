##DockerFile
#Pulling node image from dockerhub
FROM somansh1206/nodejs
# Create app directory
WORKDIR /usr/src/app
# Copy code from root repo to the working directory
COPY . .
#Run node commands to build and serve the application
RUN \
  npm install && \
  npm build
#  npm install -g serve
#  serve -s build
CMD [ “node”, “App.js” ]
