document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".ajax-load").addEventListener("click", function () {

        loadAjax();
    });
});
function loadAjax() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.querySelector(".ajax-container").innerHTML = "Please wait";
        }
        if (xhr.readyState == 4) {
            document.querySelector(".ajax-container").innerHTML = xhr.responseText;
        }
    }
    xhr.open("GET", "/home/ajaxrequest");
    xhr.send();
}
document.addEventListener("DOMContentLoaded", (event) => {
    document.querySelector(".ajax-post").addEventListener("click", function (e) {
        e.preventDefault();
        AjaxPost(this.closest("form"));
    });
});
function AjaxPost(form) {
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            document.querySelector(".ajax-container-post").innerHTML = xhr.responseText;
        }
    }
    xhr.open("POST", "/home/ajaxrequest");
    xhr.send(formData);
}