FROM node:21-alpine
WORKDIR /home/testenv

RUN apk add bash curl openjdk11
RUN npm install -g jest

COPY ./allure.zip .
RUN unzip allure.zip -d allure
ENV PATH="${PATH}:/home/testenv/allure/bin"

WORKDIR /home/mount

CMD ["tail", "-f", "/dev/null"]