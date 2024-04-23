FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME=dhruvprajapati 
ENV MONGO_INITDB_ROOT_PASSWORD=12345678910
ENV MONGO_INITDB_DATABASE=user_information

COPY init.js /docker-entrypoint-initdb.d/
