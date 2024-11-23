from fastapi import APIRouter, HTTPException
from app import crud, models
from app.db.mongodb import db

router = APIRouter()

@router.post("/create")
def create_record(item_data):
    if db is None:
        raise Exception("MongoDB no está disponible")
    
    collection = db["items"]
    result = collection.insert_one(item_data)
    
    # Devolver el ID del documento creado como cadena
    return str(result.inserted_id)

@router.get("/records")
def get_records():
    if db is None:
        raise HTTPException(status_code=500, detail="MongoDB no está disponible")
    items = crud.nosql.get_records()
    return items

@router.put("/update/{record_id}")
def update_record(record_id: str, update_data: models.ItemMongo):
    if db is None:
        raise HTTPException(status_code=500, detail="MongoDB no está disponible")
    success = crud.nosql.update_record(record_id, update_data.dict())
    if not success:
        raise HTTPException(status_code=404, detail="Item not found")
    return {"message": "Item updated successfully"}

@router.delete("/delete/{record_id}")
def delete_record(record_id: str):
    if db is None:
        raise HTTPException(status_code=500, detail="MongoDB no está disponible")
    success = crud.nosql.delete_record(record_id)
    if not success:
        raise HTTPException(status_code=404, detail="Item no encontrado")
    return {"message": "Item eliminado exitosamente"}
