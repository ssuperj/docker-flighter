CREATE DATABASE my_db;

CREATE USER poqwer95 WITH ENCRYPTED PASSWORD 'todnqjrj1!';

\connect my_db;

GRANT ALL ON DATABASE my_db TO poqwer95;

GRANT ALL ON SCHEMA public TO poqwer95;