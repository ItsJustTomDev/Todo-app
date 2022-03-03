$("#todoButton").click(function () {
  let li = $("<li></li>");
  let input = $("#todoInput").val();
  li.append(input);

  if (input == "") {
    alert("You must write something!");
  } else {
    $("#main__list").append(li);
  }

  let button = $("<button class='btn'>Remove</button>");
  li.append(button);

  button.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }
});
