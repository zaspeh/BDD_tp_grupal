import pytest
from app.crud.relational import create_record, get_records, update_record, delete_record

@pytest.mark.asyncio
async def test_create_record(test_db):
    item_data = {"name": "Test Item", "value": 100}
    db_item = await create_record(test_db, item_data)
    assert db_item.id is not None

@pytest.mark.asyncio
async def test_get_records(test_db):
    item_data = {"name": "Test Item", "value": 100}
    await create_record(test_db, item_data)
    items = await get_records(test_db)
    assert len(items) > 0

@pytest.mark.asyncio
async def test_update_record(test_db):
    item_data = {"name": "Test Item", "value": 100}
    db_item = await create_record(test_db, item_data)
    updated_item = await update_record(test_db, db_item.id, {"value": 200})
    assert updated_item.value == 200

@pytest.mark.asyncio
async def test_delete_record(test_db):
    item_data = {"name": "Test Item", "value": 100}
    db_item = await create_record(test_db, item_data)
    deleted_item = await delete_record(test_db, db_item.id)
    assert deleted_item is not None
