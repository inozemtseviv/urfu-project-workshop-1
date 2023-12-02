from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.summarizer_router import get_router
from app.services.summarizer_service import SummarizerService

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

summarizer = SummarizerService()
app.include_router(get_router(summarizer))
