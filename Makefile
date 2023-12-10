.PHONY: up
up:
	docker-compose -f ./deployment/docker-compose.yml -p summarizer up --build

.PHONY: down
down:
	docker-compose -f ./deployment/docker-compose.yml -p summarizer down
