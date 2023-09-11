const fileInput = document.querySelector("input");
downloadBtn =document.querySelector("button");

downloadBtn.addEventListener("click", e =>{
    downloadBtn.innerText = "Downloding file....";
    e.preventDefault();
    fetchfile(fileInput.value);
});

function fetchfile(url) {
    fetch(url).then(res => res.blob()).then(file =>{
        let tempUrl = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempUrl;
        aTag.download = url.replace(/^.*[\\\/]/,'');
        document.body.appendChild(aTag);
        aTag.click()
        aTag.remove()
        URL.revokeObjectURL(tempUrl);
        downloadBtn.innerText = "Download file";
    }).catch(() => {
        alert("Falied to download file!")

    });

    }
