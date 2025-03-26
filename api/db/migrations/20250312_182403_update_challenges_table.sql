ALTER TABLE challenges
    ADD COLUMN competence_id INTEGER NOT NULL;
ALTER TABLE challenges
    ADD FOREIGN KEY (competence_id) REFERENCES competences (id);

ALTER TABLE challenges
    ADD COLUMN year INTEGER NOT NULL;