from fastapi import APIRouter

from services.researchEmbeddingService import create_research_embedding



router = APIRouter()



@router.post("/generate-research-embedding")
def generate_embedding(data:dict):


    text = data["text"]



    result = create_research_embedding(text)



    return result