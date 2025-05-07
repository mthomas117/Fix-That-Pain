
   
    
   const endpoint01 = 'https://9eghl0ttei.execute-api.us-east-1.amazonaws.com/default/project4thomas';

   // Perform AJAX GET request to fetch muscle-specific content
  
   let fetchMuscleCode = (muscle) => {
       
       var loadingIcon = document.getElementById('loadingIcon');
       loadingIcon.style.display = 'block'; // Show loading icon
   
       $.ajax({
           url: endpoint01 + "/muscle",
           method: "GET",
           data: { muscle: muscle },
           success: (results) => {
               if (results && results.length > 0) {
                   let code = results[0]['code'];
                   
                   const template = document.getElementById('newPageTemplate').content.cloneNode(true);
                   // Assuming `code` should populate the new content
                   template.querySelector('#dynamicContent').innerHTML = code;
                   
                   // Replace current body content with the new content
                   document.body.innerHTML = '';
                   document.body.appendChild(template);
   
                   window.scrollTo(0, 0); // Scroll to top after new content is loaded
               } else {
                   console.error('No results returned from the server.');
               }
               loadingIcon.style.display = 'none'; // Hide loading icon
           },
           error: (error) => {
               console.error('Error:', error);
               loadingIcon.style.display = 'none'; // Hide loading icon if there's an error
           }
       });
   };



let fetchMuscleImpair = (muscle) => {
    var loadingIcon = document.getElementById('loadingIcon');
    loadingIcon.style.display = 'block'; 

    $.ajax({
        url: `${endpoint01}/muscleimpair`, 
        method: "GET", // Use GET method
        data: { muscle: muscle }, 
        success: (htmlResponse) => {
            if (htmlResponse) {
                const template = document.getElementById('newPageTemplate').content.cloneNode(true);

                // Insert the HTML directly into the dynamic content area
                template.querySelector('#dynamicContent').innerHTML = htmlResponse;

                // Replace current body content with the new content
                document.body.innerHTML = '';
                document.body.appendChild(template);

                window.scrollTo(0, 0); // Scroll to top after new content is loaded
            } else {
                console.error('No HTML returned from the Lambda function.');
            }
            loadingIcon.style.display = 'none'; // Hide loading icon
        },
        error: (error) => {
            console.error('Error:', error);
            loadingIcon.style.display = 'none'; // Hide loading icon if there's an error
        }
    });
};


   

 // Initialize image map resizer after the image has fully loaded
 function initializeImageMap() {
   $('map').imageMapResize();
 }

 // Ensure the image map resizer is applied correctly
 $(document).ready(function() {
   $('#HumanPic').on('load', initializeImageMap);
 });
