# FROM node
# WORKDIR /main
# COPY . /main
# RUN npm install
# RUN npm i express
# RUN npm install http-proxy
# EXPOSE 80
# CMD ["node","gateway.js"]

# FROM node
# WORKDIR /main
# COPY . /main
# RUN npm i express
# RUN npm install mongoose
# EXPOSE 3002
# CMD ["node","authServer.js"]

# FROM node
# WORKDIR /main
# COPY . /main
# RUN npm i express
# RUN npm install mongoose
# RUN npm install cookie-parser
# RUN npm install multer
# RUN npm install multer-gridfs-storage
# RUN npm install gridfs-stream
# RUN npm install cors
# EXPOSE 4001
# CMD ["node","server.js"]

# FROM node
# WORKDIR /main
# COPY . /main
# RUN npm install websocket
# RUN npm install ws
# EXPOSE 4000
# CMD ["node","websocket.js"]

FROM node
WORKDIR /main
COPY . /main
RUN npm install
RUN npm i express
EXPOSE 3000
CMD ["node","fileServer.js"]
