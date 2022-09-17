# Tag the docker image
docker tag marian us-central1-docker.pkg.dev/teak-runner-335620/marian/marian

# Push to Artifact Registry
docker push us-central1-docker.pkg.dev/teak-runner-335620/marian/marian

# View images tags and digest
gcloud artifacts docker images list us-central1-docker.pkg.dev/teak-runner-335620/marian/marian