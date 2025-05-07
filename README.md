# Fix That Pain

Fix That Pain is an interactive application designed to provide users with targeted exercises and stretches based on selected pain points on a human body map. Built with a scalable, cloud-native architecture, the application integrates AWS services to deliver fast, reliable, and dynamic content based on user interactions.

CloudFront link: https://dk1zhpa2dckwi.cloudfront.net/FixThatPain/index.html

## Project Highlights

### Interactive User Experience
The web application enables users to click on body regions to locate their pain points. A seamless UI powered by jQuery, Bootstrap, and Image Map Resizer ensures a responsive, user-friendly interface.

### AWS-Powered Backend

- **Lambda Function**: An AWS Lambda function triggers the backend logic, handling API requests to fetch data based on the selected muscle. This enables real-time, muscle-specific content retrieval without reloading the page.
- **MySQL**: Replacing the previous DynamoDB implementation, MySQL now stores video metadata mapped to muscle groups. This relational structure improves query flexibility and simplifies backend integration.
- **API Gateway**: Exposes the Lambda function securely as a RESTful API endpoint to communicate with the frontend.

### YouTube API for Accessibility

- The application now integrates the YouTube API to fetch rehabilitation videos.
- It also includes alternate video options optimized for users with visual or hearing impairments, such as subtitles or narrated instructions.

### Hosting and Distribution

The HTML files for this project are hosted in an Amazon S3 bucket, which serves as the static website hosting source. To ensure faster content delivery and lower latency, the content is distributed globally via Amazon CloudFront. This setup allows for efficient and scalable access to the project across different locations.

## Technology Stack and Skills Demonstrated

- **Frontend**: HTML, CSS, JavaScript, jQuery, Bootstrap, Image Map Resizer  
- **Backend**: AWS Lambda, MySQL, API Gateway, S3, CloudFront, YouTube Data API  
- **Skills**: Cloud Function Design, SQL Querying, Serverless Architecture, REST API Integration, UI/UX Design, Accessibility Optimization

