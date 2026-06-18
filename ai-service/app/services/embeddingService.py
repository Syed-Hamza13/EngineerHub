from app.models.embeddingModel import get_model


def generate_embedding(text):

    model = get_model()

    vector = model.encode(text)

    return vector.tolist()