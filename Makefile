start_backend: 
	uvicorn backend.main:app --reload

start_frontend: 
	cd frontend && npm run dev
	
start_mongo:
	sudo systemctl start mongod

stop_mongo:
	sudo systemctl stop mongod

test:
	pytest backend/tests/ -s --tb=short