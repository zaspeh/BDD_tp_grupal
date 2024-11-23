# app/schemas/item.py
from pydantic import BaseModel

# Esquema base de Pydantic para item
class ItemBase(BaseModel):
    name: str
    description: str
    value: int  # Aseguramos que el campo 'value' esté presente también en la validación Pydantic

# Esquema de salida (cuando se devuelve el item)
class Item(ItemBase):
    id: int

    class Config:
        orm_mode = True  # Para que Pydantic pueda manejar objetos de SQLAlchemy correctamente

