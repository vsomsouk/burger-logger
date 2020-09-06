// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devouredBtn").on("click", function(event) {
      let id = $(this).data("id");
      let devouredState = $(this).data("devoured");
  
      let newState = {
        devoured: "true"
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newState
      }).then(
        function() {
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
            let newBurger = {
                burger_name: $("#ca").val().trim(),
                devoured: 0           
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
  });
  