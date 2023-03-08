FROM ssuperj/node18

WORKDIR /flighter-frontend

COPY package*.json ./

COPY . .

RUN pwd

RUN yarn cache clean

RUN yarn install

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /
    
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["npm", "run", "start"]