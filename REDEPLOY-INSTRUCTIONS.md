# Redeployment after update  
  
*Automate this*  
  
1. Make sure docker is running locally
1. Run `rebuild-and-deploy.sh` to push the newest image to Google Artifact Repository  
1. SSH into the `marian` GCP Compute instance  
1. Run `docker pull gcr.io/teak-runner-335620/marian; docker-compose up -d --no-deps marian; docker image prune -f; docker logs kevin_marian_1 -f` to pull down the latest image and recreate the container, and remove images 
<!-- 1. Clean up old marian images after deployment completes -->