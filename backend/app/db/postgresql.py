from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base  # Asegúrate de importar declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.asyncio import create_async_engine, AsyncSession

# Configuración de la base de datos PostgreSQL
SQLALCHEMY_DATABASE_URL = "postgresql+asyncpg://user:password@localhost/test_db"
# 44931392
# 
# Crear motor asíncrono
engine = create_async_engine(SQLALCHEMY_DATABASE_URL, echo=True)

# Crear la sesión asíncrona
SessionLocal = sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
)

# Base para las clases del modelo
Base = declarative_base()  # Aquí se crea la clase base para los modelos de SQLAlchemy

# Dependencia para obtener la sesión
async def get_db():
    async with SessionLocal() as session:
        yield session
