# базовый образ
FROM python:3.11-slim-buster

RUN pip install poetry

COPY pyproject.toml /
COPY poetry.lock /

RUN poetry install --no-root

COPY main.py /main.py
COPY app /app

CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "80"]