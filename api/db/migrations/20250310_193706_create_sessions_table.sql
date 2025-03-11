CREATE TABLE sessions
(
    id         INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id    INTEGER      NOT NULL,
    token      VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id)
);