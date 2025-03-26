CREATE TABLE assessment_challenges
(
    id            INTEGER PRIMARY KEY AUTO_INCREMENT,
    assessment_id INTEGER NOT NULL,
    challenge_id  INTEGER NOT NULL,
    is_answered   BOOLEAN DEFAULT FALSE,
    is_correct    BOOLEAN DEFAULT FALSE,
    answer_given  TEXT,
    FOREIGN KEY (assessment_id) REFERENCES assessments (id),
    FOREIGN KEY (challenge_id) REFERENCES challenges (id)
);