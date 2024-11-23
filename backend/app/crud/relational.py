from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from app.models.relational import Item  # Ajusta con tu modelo real

# Crear un nuevo registro
async def create_record(db: AsyncSession, item_data: dict):
    db_item = Item(**item_data)  # Usa el modelo correcto (Item)
    db.add(db_item)
    await db.commit()
    await db.refresh(db_item)  # Refresca para obtener el ID generado
    return db_item  # Devolvemos el ID del nuevo registro

# Leer registros
async def get_records(db: AsyncSession):
    result = await db.execute(select(Item))  # Usa el modelo correcto (Item)
    return result.scalars().all()  # Retorna la lista de objetos

# Actualizar registro
async def update_record(db: AsyncSession, record_id: int, update_data: dict):
    result = await db.execute(select(Item).filter_by(id=record_id))  # Usa el modelo correcto (Item)
    record = result.scalar_one_or_none()
    if record:
        for key, value in update_data.items():
            setattr(record, key, value)  # Actualiza los atributos con los nuevos valores
        await db.commit()
        return record  # Retorna el registro actualizado
    return None  # Si no existe, retorna None

# Eliminar registro
async def delete_record(db: AsyncSession, record_id: int):
    result = await db.execute(select(Item).filter_by(id=record_id))  # Usa el modelo correcto (Item)
    record = result.scalar_one_or_none()
    if record:
        await db.delete(record)
        await db.commit()
        return record  # Indica que el registro fue eliminado
    return None  # Si no existe, retorna False
