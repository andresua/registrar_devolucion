FROM node:6.9.2
EXPOSE 3010 
COPY package.json .
COPY dist/*.js .
RUN npm install
CMD node index.js