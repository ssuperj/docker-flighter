FROM ssuperj/node18

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /
    
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["npm", "run", "start"]