$(function () {
  $(".change-devourStatus").on("click", function () {
    var id = $(this).data("id");
    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: true,
    }).then(function () {
      console.log("changed devour status to", true);
      location.reload();
    });
  });

  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    var newBurger = {
      name: $("#burger").val().trim(),
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      console.log("created new burger");
      location.reload();
    });
  });

  $(".delete").on("click", function (event) {
    var id = $(this).data("id");
    // Send the reset request.
    $.ajax("/api/burgers/delete/" + id, {
      type: "DELETE",
    }).then(function () {
      console.log("deleted all burgers burger");
      location.reload();
    });
  });
  $(".reset").on("click", function (event) {
    // Send the reset request.
    $.ajax("/api/burgers/reset", {
      type: "DELETE",
    }).then(function () {
      console.log("deleted all burgers burger");
      location.reload();
    });
  });
});
