# FROM ianwalter/puppeteer:v4.0.0
# WORKDIR /autotest
# ADD . /autotest

# RUN npm install

# CMD ["npm", "run", "wdio"]

FROM node:14

WORKDIR /autotest

COPY . .

RUN npm install

CMD ["npm", "run", "wdio"]
