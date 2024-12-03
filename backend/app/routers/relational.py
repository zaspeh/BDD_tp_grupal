# app/routers/relational.py
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from app.db.postgresql import get_db
from app.schemas import ItemBase, Item as ItemResponse
from app import crud
from typing import List

router = APIRouter()

# Crear un nuevo registro
@router.post("/create", response_model=ItemResponse)
async def create_record(item_data: ItemBase, db: AsyncSession = Depends(get_db)):
    try:
        db_item = await crud.relational.create_record(db=db, item_data=item_data.dict())
        return db_item  # Asegúrate de que el objeto retornado sea del tipo ItemResponse
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al crear el registro: {e}")

# Obtener todos los registros
@router.get("/records", response_model=List[ItemResponse])
async def get_records(db: AsyncSession = Depends(get_db)):
    try:
        items = await crud.relational.get_records(db=db)
        print("Testing that it works")
        return items
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al obtener los registros: {e}")

# Actualizar un registro existente
@router.put("/update/{record_id}", response_model=ItemResponse)
async def update_record(record_id: int, update_data: ItemBase, db: AsyncSession = Depends(get_db)):
    try:
        updated_item = await crud.relational.update_record(db=db, record_id=record_id, update_data=update_data.dict())
        if not updated_item:
            raise HTTPException(status_code=404, detail="Item not found")
        return updated_item
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al actualizar el registro: {e}")

# Eliminar un registro
@router.delete("/delete/{record_id}")
async def delete_record(record_id: int, db: AsyncSession = Depends(get_db)):
    try:
        deleted_item = await crud.relational.delete_record(db=db, record_id=record_id)
        if not deleted_item:
            raise HTTPException(status_code=404, detail="Item not found")
        return {"message": "Item deleted successfully"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error al eliminar el registro: {e}")
