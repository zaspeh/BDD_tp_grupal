from pymongo import MongoClient

# Configuración de MongoDB
MONGO_URI = "mongodb://localhost:27017"
client = MongoClient(MONGO_URI)
db = client["test_database"]  # Cambia a la base de datos de prueba
