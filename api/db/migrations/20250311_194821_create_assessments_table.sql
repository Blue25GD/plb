CREATE TABLE assessments
(
    id         INTEGER PRIMARY KEY AUTO_INCREMENT,
    user_id    INTEGER NOT NULL,
    current_challenge_id INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users (id),
    FOREIGN KEY (current_challenge_id) REFERENCES challenges (id)
)