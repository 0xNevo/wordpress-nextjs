build:
	docker-compose -f backend/docker-compose.yml up -d
stop:
	docker-compose -f backend/docker-compose.yml down
stop-v:
	docker-compose -f backend/docker-compose.yml down -v
