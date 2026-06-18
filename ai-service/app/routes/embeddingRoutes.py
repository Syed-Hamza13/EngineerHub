from fastapi import APIRouter

from app.services.embeddingService import generate_embedding


router = APIRouter()


@router.post("/generate-profile-embedding")
def create_embedding(data:dict):

    text = data["text"]

    vector = generate_embedding(text)

    return {
        "success":True,
        "embedding":vector
    }