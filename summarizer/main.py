from fastapi import FastAPI
from app.routes.summarizer_router import get_router
from app.services.summarizer_service import SummarizerService

app = FastAPI()

summarizer = SummarizerService()
app.include_router(get_router(summarizer))
