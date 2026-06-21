from fastapi import FastAPI

from app.routes.embeddingRoutes import router


app = FastAPI()


app.include_router(router)


@app.get("/")
def home():

    return {
        "message":"AI Service Running"
    }