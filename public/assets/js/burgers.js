// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devouredBtn").on("click", function(event) {
      const id = $(this).data("id");
      const newDevoured = $(this).data("devoured");
  
      const newDevouredState = {
        devoured: newDevoured
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      const burgerInfo = 
        $("#ca").val().trim(),
        if(burgerInfo) {
            const newBurger = {
                burger_name: $("#ca").val().trim(),
                devoured: 0           
         };
        
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".deleteBtn").on("click", function(event) {
      const id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  