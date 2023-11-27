from pydantic import BaseModel


class SummarizerRequest(BaseModel):
    text: str


class SummarizerResponse(BaseModel):
    text: str
