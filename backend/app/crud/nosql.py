from app.db.mongodb import db
from bson import ObjectId


def create_record(item_data):
    if db is None:
        raise Exception("MongoDB no está disponible")
    
    collection = db["items"]
    result = collection.insert_one(item_data)  # Insertar el documento

    # Devuelve el ID del documento insertado como una cadena
    return str(result.inserted_id)

def get_records():
    """Obtiene todos los registros de la colección 'items'."""
    collection = db["items"]
    # Devuelve una lista de diccionarios excluyendo el campo '_id'
    return [{"id": str(record["_id"]), **record} for record in collection.find()]

def update_record(record_id, update_data):
    """Actualiza un registro basado en su _id."""
    collection = db["items"]
    
    # Asegúrate de que record_id sea un ObjectId
    try:
        object_id = ObjectId(record_id)
    except Exception:
        raise Exception("El ID proporcionado no es válido.")
    
    result = collection.update_one({"_id": object_id}, {"$set": update_data})
    
    # Si se modificó al menos un documento, devolver True
    return result.modified_count > 0

def delete_record(record_id):
    """Elimina un registro basado en su _id."""
    collection = db["items"]
    
    # Asegúrate de que record_id sea un ObjectId
    try:
        object_id = ObjectId(record_id)
    except Exception:
        raise Exception("El ID proporcionado no es válido.")
    
    result = collection.delete_one({"_id": object_id})
    
    # Si se eliminó al menos un documento, devolver True
    return result.deleted_count > 0
