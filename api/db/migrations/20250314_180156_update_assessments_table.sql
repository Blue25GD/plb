ALTER TABLE assessments
    ADD COLUMN save_code VARCHAR(255) NULL,
    ADD COLUMN saved_at  TIMESTAMP    NULL;