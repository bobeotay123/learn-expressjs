$(".custom-file-input").on("change", function() {
  var fileName = $(this).val().split("\\").pop();
  $(".custom-file-label").val(fileName);
});