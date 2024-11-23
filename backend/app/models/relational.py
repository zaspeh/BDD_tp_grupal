from sqlalchemy import Column, Integer, String, Float
from app.db.postgresql import Base  # Importa Base desde el archivo postgresql.py

class Item(Base):
    __tablename__ = "items"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    value = Column(Float, nullable=False)
    description = Column(String, index=True)

    def __repr__(self):
        return f"<Item(id={self.id}, name={self.name}, description={self.description})>"
