FROM node:6-wheezy

# create dir for our project
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install the node modules
COPY package.json /usr/src/app/
RUN npm install

#copy the rest of the app expose port and default run command
COPY . /usr/src/app/
EXPOSE 3000
CMD ["npm", "run", "launch"]