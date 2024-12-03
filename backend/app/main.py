from fastapi import FastAPI
from app.routers import relational
from app.db.postgresql import engine, Base
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.include_router(relational.router, prefix="/items", tags=["items"])

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        try:
            await conn.run_sync(Base.metadata.create_all)
        except Exception as e:
            print(f"Error al crear las tablas: {e}") 

@app.on_event("shutdown")
async def shutdown():
    await engine.dispose()

