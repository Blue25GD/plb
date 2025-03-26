CREATE TABLE reports
(
    id            INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id       INTEGER NOT NULL,
    challenge_id  INTEGER NOT NULL,
    note          TEXT,
    ip_address    TEXT NOT NULL,
    created_at    TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (challenge_id) REFERENCES challenges (id)
);