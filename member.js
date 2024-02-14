function skillsmember() {
  var member = document.getElementById("member");
  var member = member.options[member.selectedIndex].value;
  if (member == "1") {
    document.getElementById("skills").style.display = "block";
  } else {
    document.getElementById("skills").style.display = "none";
  }
}