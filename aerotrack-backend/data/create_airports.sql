CREATE TABLE airports (
    id SERIAL PRIMARY KEY,
    type VARCHAR(50),
    name VARCHAR(255),
    latitude_deg DECIMAL(9,6),
    longitude_deg DECIMAL(9,6),
    elevation_ft INTEGER,
    continent VARCHAR(2),
    iso_country CHAR(2),
    iso_region VARCHAR(10),
    municipality VARCHAR(100),
    scheduled_service VARCHAR(3),
    gps_code VARCHAR(10),
    iata_code VARCHAR(10),
    local_code VARCHAR(10),
    home_link TEXT,
    wikipedia_link TEXT
);