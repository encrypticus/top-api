FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN yarn --frozen-lockfile
ADD . .
RUN yarn run build
CMD ["node", "./dist/main.js"]
LABEL authors="Alexander"

ENTRYPOINT ["top", "-b"]