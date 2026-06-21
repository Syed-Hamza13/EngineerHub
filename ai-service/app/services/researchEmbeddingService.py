from app.models.embeddingModel import generate_embedding


def create_research_embedding(text):

    vector = generate_embedding(text)


    return {

        "vector":vector,

        "model":
        "sentence-transformers/all-MiniLM-L6-v2"

    }