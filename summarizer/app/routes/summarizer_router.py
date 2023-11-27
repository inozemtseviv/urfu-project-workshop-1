from fastapi import APIRouter
from app.models import SummarizerRequest, SummarizerResponse
from app.services.summarizer_service import SummarizerService


def get_router(summarizer: SummarizerService):
    router = APIRouter()

    @router.post("/summarize")
    def summarize(request: SummarizerRequest) -> SummarizerResponse:
        return SummarizerResponse(text=summarizer.summarize(request.text))

    return router
