run-local:
	@echo "run local container..."
	docker-compose up -d

destroy-local:
	@echo "destroy local container..."
	docker-compose down

###
ENV=staging

terraform-create-workspace:
	cd terraform &&\
	  terraform workspace new $(ENV)

terraform-init:
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform init

terraform-plan:
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform plan

terraform-apply:
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform apply

terraform-destroy:
	cd terraform &&\
	  terraform workspace select $(ENV) && \
		terraform destroy