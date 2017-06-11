<script type="text/javascript">
    var list = document.getElementsByClassName("personidgirls");
for (var i = 1; i <= list.length; i++) {
    list[i].innerHTML = i;
}
</script>
<script type="text/javascript">
    var list = document.getElementsByClassName("personidboys");
for (var i = 1; i <= list.length; i++) {
    list[i].innerHTML = i;
}
</script>
<script type="text/javascript">
    var list = document.getElementsByClassName("personidoutofgang");
for (var i = 1; i <= list.length; i++) {
    list[i].innerHTML = i;
}
</script>
<script type="text/javascript">
function copyToClipboard(elementId) {

  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById(elementId).innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}
</script>