from app.crud.nosql import create_record, get_records, update_record, delete_record
from bson.objectid import ObjectId

def test_create_record(mongo_test_client):
    # Inserta un registro en MongoDB
    db = mongo_test_client
    item_data = {"name": "Test Item", "value": 100}
    
    # Crear el registro y obtener el ID
    record_id = create_record(item_data)

    # Verifica que el ID no sea None
    assert record_id is not None
    
    # Asegúrate de que 'record_id' sea convertido a ObjectId para la consulta
    inserted_item = db["items"].find_one({"_id": ObjectId(record_id)})

    # Verifica que el registro insertado no sea None y que los valores coincidan
    assert inserted_item is not None
    assert inserted_item["name"] == "Test Item"  # Asegúrate de que el nombre coincida
    assert inserted_item["value"] == 100




def test_get_records(mongo_test_client):
    # Recupera los registros de MongoDB
    items = get_records()
    assert isinstance(items, list)

def test_update_record(mongo_test_client):
    # Actualiza un registro en MongoDB
    item_data = {"name": "Test Item", "value": 100}
    record_id = create_record(item_data)
    updated = update_record(record_id, {"value": 200})
    assert updated is True

def test_delete_record(mongo_test_client):
    # Elimina un registro en MongoDB
    item_data = {"name": "Test Item", "value": 100}
    record_id = create_record(item_data)
    deleted = delete_record(record_id)
    assert deleted is True
