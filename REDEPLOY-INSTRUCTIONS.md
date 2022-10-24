# Redeployment after update  
  
*Automate this*  
  
1. Make sure docker is running locally
1. Run `rebuild-and-deploy.sh` to push the newest image to Google Artifact Repository  
1. SSH into the `marian` GCP Compute instance  
1. Run: `docker pull gcr.io/teak-runner-335620/marian`  
1. Run: `docker-compose up -d --no-deps marian` to recreate the container with the latest image  
1. Clean up old marian images after deployment completes