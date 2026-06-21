from fastapi import APIRouter
from app.services.embeddingService import create_research_embedding

router = APIRouter()


@router.post("/generate-research-embedding")
def generate_embedding(data: dict):

    text = data["text"]

    return create_research_embedding(text)