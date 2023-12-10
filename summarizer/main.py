import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from app.routes.summarizer_router import get_router
from app.services.local_summarizer_service import LocalSummarizerService
from app.services.remote_summarizer_service import RemoteSummarizerService

load_dotenv()

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

summarizer_type = os.getenv("SUMMARIZER_TYPE", "remote")
if summarizer_type == "remote":
    summarizer = RemoteSummarizerService(os.getenv("API_TOKEN", ""))
else:
    summarizer = LocalSummarizerService()

app.include_router(get_router(summarizer))
