#!/bin/bash

# Install PostgreSQL (Ubuntu/Debian)
sudo apt update
sudo apt install -y postgresql postgresql-contrib

# Start PostgreSQL service
sudo systemctl start postgresql

# Switch to the postgres user and create a new database
sudo -u postgres psql <<EOF
DO \$\$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'test_db') THEN
      CREATE DATABASE test_db;
   END IF;
END
\$\$;

-- Grant all privileges on the public schema to the postgres user
GRANT ALL PRIVILEGES ON SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO postgres;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public TO postgres;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO postgres;
EOF

# Configure pg_hba.conf to allow local connections
PG_HBA_CONF=$(sudo -u postgres psql -t -P format=unaligned -c "SHOW hba_file")
sudo sed -i "s/^host.*all.*all.*127.0.0.1\/32.*$/host    all             all             127.0.0.1\/32            md5/" $PG_HBA_CONF
sudo sed -i "s/^host.*all.*all.*::1\/128.*$/host    all             all             ::1\/128                 md5/" $PG_HBA_CONF

# Configure postgresql.conf to listen on all addresses
PG_CONF=$(sudo -u postgres psql -t -P format=unaligned -c "SHOW config_file")
sudo sed -i "s/^#listen_addresses = 'localhost'.*$/listen_addresses = '*'/" $PG_CONF

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