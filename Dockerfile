##DockerFile
#Pulling node image from dockerhub
FROM node:18-alpine

WORKDIR /usr/app
COPY ./ /usr/app

# Copy code from root repo to the working directory

#Run node commands to build and serve the application
RUN  npm install && npm run build

#  npm install -g serve
#  serve -s build
CMD [ "npm", "start" ]

#CMD ["sleep", "infinity"]
