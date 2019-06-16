DROP DATABASE IF EXISTS ttpfs; 
CREATE DATABASE ttpfs;

\c ttpfs;

CREATE TYPE transaction_type as ENUM('BUY', 'SELL');

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username VARCHAR NOT NULL,
  email VARCHAR NOT NULL UNIQUE,
  password_digest VARCHAR NOT NULL,
  balance FLOAT NOT NULL DEFAULT 5000
);

CREATE TABLE user_transactions (
  id SERIAL PRIMARY KEY,
  users_id INT REFERENCES users(id),
  ticker_symbol VARCHAR NOT NULL,
  transaction_type transaction_type,
  quantity INT NOT NULL, 
  price FLOAT NOT NULL
);

INSERT INTO users (email, username, password_digest) VALUES ('john@email.com', 'John Smith', '1234'), ('jenny@gmail.com', 'Jenny Smith', '1234');

INSERT INTO user_transactions (users_id, ticker_symbol, transaction_type, quantity, price) VALUES (1, 'AAPL', 'BUY', 6, 3000), (1, 'STWD', 'BUY', 40, 20.56), (2, 'AAPL', 'BUY', 6, 3000), (2, 'STWD', 'BUY', 40, 20.56);