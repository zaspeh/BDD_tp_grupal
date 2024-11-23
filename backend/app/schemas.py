# app/schemas.py
from pydantic import BaseModel

class ItemBase(BaseModel):
    name: str
    description: str

# Este es el modelo para las respuestas (con id incluido)
class Item(ItemBase):
    id: int

    class Config:
        orm_mode = True  # Permite que Pydantic convierta los modelos de SQLAlchemy en modelos Pydantic automáticamente
