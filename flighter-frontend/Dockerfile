FROM ssuperj/node18

WORKDIR /flighter-frontend

COPY package*.json ./

COPY . .

RUN pwd

RUN yarn -v

RUN node -v

RUN yarn config set registry https://registry.npmjs.org/

RUN yarn cache clean

RUN yarn install --registry=https://registry.npmjs.org/

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /
    
ENTRYPOINT ["docker-entrypoint.sh"]

CMD ["npm", "run", "start"]