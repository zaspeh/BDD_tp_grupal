from fastapi import FastAPI
from app.routers import relational

app = FastAPI()

app.include_router(relational.router, prefix="/items", tags=["items"])
