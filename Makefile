start: 
	uvicorn backend.main:app --reload

start_mongo:
	sudo systemctl start mongod

stop_mongo:
	sudo systemctl stop mongod

test:
	pytest --cov=app tests/