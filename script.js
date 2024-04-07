// Setup for XMLHttpRequest, as recommended for old IE versions.
if (typeof XMLHttpRequest === "undefined") {
    XMLHttpRequest = function () {
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.6.0");
        }
        catch (e) { }
        try {
            return new ActiveXObject("Msxml2.XMLHTTP.3.0");
        }
        catch (e) { }
        try {
            return new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (e) { }
        return undefined;
    };
}

// Download a text file into an element.
function downloadText(elementID, path) {
    function onLoad() {
        if (this.status == 200) {
            document.getElementById(elementID).insertAdjacentHTML("afterbegin", this.responseText);
        }
        else {
            document.getElementById(elementID).insertAdjacentHTML("afterbegin", this.status + " - Failed to download this page.");
        }
    }

    var request = new XMLHttpRequest();
    request.onload = onLoad;
    request.open("get", path, true);
    request.send();
}

// Download HTML inserts.
downloadText("ertha_desc", "https://zopmaxima.github.io/documents/ertha_desc.html");
downloadText("playform_desc", "https://zopmaxima.github.io/documents/playform_desc.html");
downloadText("heat_desc", "https://zopmaxima.github.io/documents/heat_desc.html");
downloadText("rok_desc", "https://zopmaxima.github.io/documents/rok_desc.html");
downloadText("starforge_desc", "https://zopmaxima.github.io/documents/starforge_desc.html");

// Download an image and display a modal state.
function openImage(path) {
    var modal = document.getElementById("modal");
    modal.style.display = "block";
    var image = document.getElementById("modalImage");
    image.src = path;
}

// Close modal when clicking the background.
window.onclick = function (event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Close modal when 'X' is clicked.
var modalClose = document.getElementById("modalClose");
if (modalClose) {
    modalClose.onclick = function () {
        var modal = document.getElementById("modal");
        modal.style.display = "none";
    }
}

// Download thumbnails.
// document.getElementById("thumb_sf").onclick = function () { openImage("pf_controls.png") };
