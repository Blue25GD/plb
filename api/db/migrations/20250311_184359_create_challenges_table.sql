CREATE TABLE challenges
(
    id         INTEGER PRIMARY KEY AUTO_INCREMENT,
    question   TEXT NOT NULL,
    proposals  TEXT NOT NULL,
    solution   TEXT NOT NULL,
    image_url  TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)