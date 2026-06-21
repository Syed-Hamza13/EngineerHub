from app.models.embeddingModel import model


def create_research_embedding(text):

    vector = model.encode(text)

    return {
        "vector": vector.tolist(),
        "model": "sentence-transformers/all-MiniLM-L6-v2"
    }