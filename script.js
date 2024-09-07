function handleClick() {
    var button = document.getElementById("myButton");
    var spinner = document.getElementById("spinner");

    // Düyməni deaktiv edirik
    button.disabled = true;

    // Spinneri göstəririk
    spinner.style.display = "inline-block";

    // Məsələn, 3 saniyədən sonra düyməni aktivləşdiririk və spinneri gizlədirik
    setTimeout(function() {
        button.disabled = false;
        spinner.style.display = "none";
    },  4000);
}
