const {
    DB_USER,
    DB_PASSWD,
    DB_HOST,
    DB_NAME,
    DB_URL,
    PORT,
    HOST,
    PUBLIC_ROUTE
} = process.env

const config = {
    dbUrl: DB_URL || `mongodb+srv://${DB_USER}:${DB_PASSWD}@${DB_HOST}/${DB_NAME}`,
    port: PORT || 3000,
    host: HOST || 'http://localhost',
    publicRoute: PUBLIC_ROUTE || 'app'
};

module.exports = config