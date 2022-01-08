# reference: https://www.youtube.com/watch?v=OXE2a8dqIAI
check-env:
ifndef ENV
	$(error Please set ENV=[staging|prod])
endif

run-local: check-env
	@echo "run local container..."
	docker-compose up -d

destroy-local:
	@echo "destroy local container..."
	docker-compose down

###
ENV=staging

terraform-create-workspace: check-env
	cd terraform &&\
	  terraform workspace new $(ENV)

terraform-init: check-env
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform init

terraform-plan: check-env
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform plan

terraform-apply: check-env
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform apply

terraform-destroy:
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform destroy