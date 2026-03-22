ALTER TABLE news_items ADD COLUMN IF NOT EXISTS tweeted_at TIMESTAMPTZ DEFAULT NULL;
CREATE INDEX IF NOT EXISTS news_items_tweeted_at_idx ON news_items(tweeted_at);
