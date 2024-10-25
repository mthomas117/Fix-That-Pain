Fix That Pain

Fix That Pain is an interactive application designed to provide users with targeted exercises and stretches based on selected pain points on a human body map. Built with a scalable, cloud-native architecture, the application integrates AWS services to deliver fast, reliable, and dynamic content based on user interactions.

Project Highlights
Interactive User Experience: The web application enables users to click on body regions to locate their pain points. A seamless UI powered by jQuery, Bootstrap, and Image Map Resizer ensures a responsive, user-friendly interface.

AWS-Powered Backend:

Lambda Function: An AWS Lambda function reads data from DynamoDB based on the muscle selected, enabling real-time, muscle-specific content retrieval without reloading the page.
DynamoDB: DynamoDB stores the data, organized for efficient querying and optimal retrieval time, allowing scalability as the dataset grows.
API Gateway: Exposes the Lambda function, allowing secure HTTP requests from the frontend.
Scalable and Maintainable: Built on AWS, the project is designed to be both cost-effective and scalable, making it adaptable to increased data and user demand. Error handling mechanisms ensure the app remains user-friendly even in case of backend issues.

Technology Stack and Skills Demonstrated
Frontend: HTML, CSS, JavaScript, jQuery, Bootstrap, Image Map Resizer
Backend: AWS Lambda, DynamoDB, API Gateway
Skills: Cloud Function Design, DynamoDB Data Structuring, Serverless Architecture, UI/UX Design, Performance Optimization
Future Improvements
Potential improvements include further optimizing the Lambda function for speed, expanding the database for additional muscle-specific data, and exploring AI recommendations based on user pain data patterns.
