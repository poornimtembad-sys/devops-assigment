#  AWS DevOps Engineer Technical Assignment

##  Overview

This project demonstrates the deployment of a production-like web application on AWS Free Tier. It covers application deployment, monitoring, logging, backups, and security best practices using AWS services.

##  Features

- Deploy a web application on Amazon EC2 (Ubuntu)
- Configure Nginx web server
- Monitor EC2 using Amazon CloudWatch Agent
- Collect system logs in CloudWatch Logs
- Backup application to Amazon S3
- Secure access using IAM Roles and Security Groups
- Automate deployment and backup using Shell Scripts



#  Architecture


                        Internet
                            │
                            ▼
                   AWS Security Group
                            │
                            ▼
                  Amazon EC2 (Ubuntu)
                  Nginx Web Server
                            │
             ┌──────────────┴──────────────┐
             │                             │
             ▼                             ▼
     Amazon CloudWatch              Amazon S3
  Metrics & Log Monitoring       Application Backup

#  AWS Services Used

| Service | Purpose |
|----------|---------|
| Amazon EC2 | Host the application |
| Amazon S3 | Store backups |
| Amazon CloudWatch | Monitor metrics and logs |
| IAM | Secure AWS access |
| Security Groups | Control network traffic |


#  Project Structure

devops-assignment/
│
├── README.md
├── backup.sh
├── deploy.sh
├── screenshots/
├── architecture-diagram.png
└── app/
    └── index.html



# Deployment Steps

## 1. Connect to EC2

```bash
ssh -i your-key.pem ubuntu@YOUR_PUBLIC_IP
```

## 2. Update Ubuntu

```bash
sudo apt update
sudo apt upgrade -y
```

## 3. Install Nginx

```bash
sudo apt install nginx -y
```

## 4. Deploy Application

```bash
sudo cp app/index.html /var/www/html/index.html
```

## 5. Restart Nginx

```bash
sudo systemctl restart nginx
```

## 6. Access Application

Open in browser

```
http://YOUR_PUBLIC_IP
```

---

#  CloudWatch Monitoring

CloudWatch Agent is configured to collect:

- CPU Utilization
- Memory Usage
- Disk Usage
- Disk I/O
- Network Statistics
- System Logs

Check agent status:

```bash
sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl \
-m ec2 \
-a status
```

Expected Output

```
Status : running
```

---

#  Backup to Amazon S3

Create backup

```bash
tar -czf app-backup.tar.gz /var/www/html
```

Upload to S3

```bash
aws s3 cp app-backup.tar.gz s3://YOUR_BUCKET_NAME/
```

Or run

```bash
./backup.sh
```

---

#  Security

Implemented security best practices

- IAM Role attached to EC2
- Security Groups configured
- SSH authentication using PEM key
- HTTP (80) enabled
- HTTPS (443) enabled
- Least privilege IAM permissions

---

#  Automation Scripts

### Deploy Application

```bash
chmod +x deploy.sh
./deploy.sh
```

### Backup Application

```bash
chmod +x backup.sh
./backup.sh
```

---

# Screenshots

This repository includes screenshots of:

- EC2 Instance
- 
- Running Web Application
- Amazon S3 Bucket
- CloudWatch Dashboard
- CloudWatch Logs
- IAM Role
- Security Group

---

#  Deliverables

- AWS EC2 Instance Deployment
- Web Application Deployment
- Amazon S3 Backup
- CloudWatch Monitoring
- CloudWatch Logs
- IAM Configuration
- Deployment Script
- Backup Script
- Documentation

---

#  Challenges Faced

- Configuring CloudWatch Agent
- Resolving IAM permission issues
- Configuring CloudWatch Logs
- Managing Linux file permissions
- Validating CloudWatch Agent configuration

---

#  Future Enhancements

- Docker Containerization
- CI/CD using GitHub Actions
- Infrastructure as Code with Terraform
- Auto Scaling Group
- Application Load Balancer
- HTTPS using AWS Certificate Manager

---

#  Author

**Poornima Tembad**

Electronics and Communication Engineer

GitHub: https://github.com/poornimtembad-sys

---

#  Assignment Summary

This project demonstrates practical knowledge of AWS cloud services, Linux administration, monitoring, logging, automation, and deployment. It was developed as part of a DevOps Engineer Technical Assignment using AWS Free Tier services.

---

 **Thank you for reviewing this project!**
