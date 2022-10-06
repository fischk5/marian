# Google Compute Engine Deployment Instructions  
For deploying to Compute Engine from scratch.  
  
*TODO: Automate this process*
  
**Prerequisites:**  
- Docker needs to be running
- `gcloud` cli installed and available
  
### 1. Build a new Docker image  
The script `rebuild-and-deploy.sh` will remove all images in the current computer and build a new image:  
  
```
REPOSITORY                         TAG       IMAGE ID       CREATED          SIZE
gcr.io/teak-runner-335620/marian   latest    fe47b8ec1a9b   49 seconds ago   1.34GB
```  
  
And it will push the image to a **[Google Artifact Registry repository:](https://console.cloud.google.com/artifacts/docker/teak-runner-335620/us-central1/marian?project=teak-runner-335620)**
  
```
us-central1-docker.pkg.dev/teak-runner-335620/marian/marian:latest
```  
  
The image is ready for use now.  
  
### 2. Build a VM instance in Compute Engine  
  
Navigate to **[Google Compute Engine](https://console.cloud.google.com/compute/instances?project=teak-runner-335620)** and click `Create Instance` to create a new VM.  
  
Use the following specifications:  
- **Name** - marian
- **Machine type** - g1-small  
- **CPU platform** - Intel Haswell  
- **HTTP traffic** - on  
- **HTTPS traffic** - on  
- **Boot Disk** - Google, Container-Optimized OS  
  
### 3. Add configuration to VM  
  
From the **[VM instances page](https://console.cloud.google.com/compute/instances?project=teak-runner-335620)**, connect to the machine with SSH.
  
Add Docker credentials:  
```
docker-credential-gcr configure-docker
```  
  
Change directory:  
```
cd
```  
  
Copy the following files to the current directory from this project using any method that makes sense:  
- `docker-compose.yml`  
  
Install Docker compose from the internet:  
```
curl -O https://gist.githubusercontent.com/kurokobo/25e41503eb060fee8d8bec1dd859eff3/raw/0d7cd29472f0eaa26ce424071456ad84b24fb318/installer.sh
bash ./installer.sh
source ~/.bashrc
docker-compose version
```  
  
Create a temporary file called `nginx.conf` with the following content:  
  
```
events {
  # worker_connections  1024;
}

http {
    server {
        listen 80 default_server;
        server_name _;
        location / {
            proxy_pass         http://marian:8080;
        }
        location ~* /.well-known/acme-challenge/ {
            allow all;
            rewrite ^/(.*)$ /$1;
            root /var/www/certbot;
            break;
        }
    }

}
```  
This is used in a later step to allow our nginx container to route the traffic and files to set up the SSL certificate.  
  
### 4. Update DNS  
  
Make sure there is a DNS entry for the subdomain this is routed to.  If we wanted to route traffic from `docs.tetheros.com`, our DNS entries would include the following records:  
  
| Host name | Type | Data |  
| --- | --- | --- |  
| docs.tetheros.com | A | *VM external IP address* |
| www.docs.tetheros.com | A | *VM external IP address* |  
  
Required because the certificate we're about to generate has to know which domains it covers.  
  
### 5. Test http routing  
  
Make sure the nginx routing works by starting the two services through docker-compose.  **Everything breaks later if they services aren't on a dedicated network that ISN'T the bridge network!**  
  
`docker-compose up -d marian nginx-marian`  
  
The `marian` service will take 30-60 seconds to start so be patient.  Validate the nginx is routing traffic by navigating to **[http://docs.tetheros.com](http://docs.tetheros.com)**.  
  
### 6. Check permission on the VM  
  
The first iteration (Oct 6, 2022) took extra long because directory permissions weren't working (and the fact that the docker-compose.yml file didn't add port 443 for the nginx container).  
  
Here's how the permissions break down:  
- Let's Encrypt will test DNS settings by creating a file locally and then attempting to retrieve it from the outside  
- It does this through an instance of `certbot`  
- `certbot` and/or `nginx` needs to read the location of the Let's Encrypt file location  
  
**Best understanding is these file are located on the Docker host file system at `/var/www/certbot/`**  
  
Corresponds directly with the routing in two places:  
- nginx root associated with Let's Encrypt location, `/.well-known/acme-challenge/`  
- certbot command, `--webroot -w /var/www/certbot`  
  
**Bad/Insecure version:** `sudo chmod -R 777 /var/www/certbot/`  
  
Everytime the certificate needs to renew (90 day cycle starting Oct 6, 2022) it will have to access that location on the Docker host/VM.  
  
### 7. Fire up the Let's Encrypt certbot container to request a certificate  
  
Run the command:  
```
docker-compose up -d certbot
```  
  
Then check the logs to see if it was successful.  Two things to note:  
- Success will place the files in /home/kevin/certbot/conf/live/docs.tetheros.com/files-are-here.pem  
- Failure means to change the `command` in the docker-compose file to include `--dry-run` to avoid running into the rate limiting set by Let's Encrypt until the routing is figured out.  
  
***This step is most likely the point of failure***  
  
### 8. Replace the nginx.conf  
  
Now that we have certificates, it's time to update our nginx configuration to take advantage and force https.  
  
Replace the temporary `nginx.conf` file on the system with the `nginx.conf` file in this project and restart the environment.  
  
```
docker-compose down  
docker-compose up -d marian nginx-marian
```  
  
After it starts, test the routes and redirects for:  
- `http://docs.tetheros.com`  
- `https://docs.tetheros.com`  