from pydantic import BaseModel

class ItemMongo(BaseModel):
    name: str
    value: int
