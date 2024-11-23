import pytest
from fastapi.testclient import TestClient
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession
from sqlalchemy.orm import sessionmaker
from app.db.postgresql import Base, get_db
from app.main import app
from pymongo import MongoClient

# Configuración para PostgreSQL
SQLALCHEMY_TEST_DATABASE_URL = "sqlite+aiosqlite:///:memory:"  # Base de datos en memoria para tests
engine = create_async_engine(SQLALCHEMY_TEST_DATABASE_URL, echo=False)
TestSessionLocal = sessionmaker(bind=engine, class_=AsyncSession, expire_on_commit=False)

# Fixture para sesión de base de datos PostgreSQL
@pytest.fixture
async def test_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    async with TestSessionLocal() as session:
        yield session
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)

# Reemplaza la dependencia de la base de datos en FastAPI
app.dependency_overrides[get_db] = test_db

# Configuración para MongoDB (base de datos de prueba)
@pytest.fixture
def mongo_test_client():
    mongo_uri = "mongodb://localhost:27017"
    client = MongoClient(mongo_uri)
    db = client["test_database"]  # Base de datos de prueba
    yield db
    client.drop_database("test_database")  # Limpia después de cada test

# Cliente para pruebas de rutas
@pytest.fixture
def client():
    return TestClient(app)
