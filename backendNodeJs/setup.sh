#!/bin/bash

# Install PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install -y postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql

# Switch to the postgres user and create a new database
sudo -u postgres psql <<EOF

-- Creating the test user --

CREATE ROLE test_user WITH
	LOGIN
	SUPERUSER
	CREATEDB
	CREATEROLE
	INHERIT
	REPLICATION
	CONNECTION LIMIT -1
    PASSWORD 'password';

CREATE DATABASE test_db
    WITH
    OWNER = test_user
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

\c test_db

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    birthday DATE
);

ALTER TABLE IF EXISTS public.users
    OWNER to test_user;

EOF


# # Configure pg_hba.conf to allow local connections
# PG_HBA_CONF=$(sudo -u postgres psql -t -P format=unaligned -c "SHOW hba_file")
# sudo sed -i "s/^host.*all.*all.*127.0.0.1\/32.*$/host    all             all             127.0.0.1\/32            md5/" $PG_HBA_CONF
# sudo sed -i "s/^host.*all.*all.*::1\/128.*$/host    all             all             ::1\/128                 md5/" $PG_HBA_CONF

# # Configure postgresql.conf to listen on all addresses
# PG_CONF=$(sudo -u postgres psql -t -P format=unaligned -c "SHOW config_file")
# sudo sed -i "s/^#listen_addresses = 'localhost'.*$/listen_addresses = '*'/" $PG_CONF

# Restart PostgreSQL service to apply changes
sudo systemctl restart postgresql

echo "PostgreSQL setup completed."

# Check if Node.js is installed
if ! command -v npm &> /dev/null
then
    echo "npm could not be found. Please install Node.js and npm."
    exit
fi

# Install Node.js dependencies
npm install

echo "Node.js dependencies installed."