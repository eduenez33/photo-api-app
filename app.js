var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(xhttp.responseText);
        var photoData = res.photos.map(function(photo){
            return photo.src;
        });

        var container = document.querySelector('#photo-divs');
        photoData.forEach(function(photo) {
            var photoDiv = document.createElement('div');
            photoDiv.classList.add('photo-div')
            photoDiv.innerHTML = `
                <img src=${photo.medium} />
            `;
            container.appendChild(photoDiv);
        })
    }
};

xhttp.open("GET", "https://api.pexels.com/v1/search?query=office&per_page=12", true);
xhttp.setRequestHeader('Authorization', `563492ad6f91700001000001a9bebb3c9aef447389f1ede8fdab3b1c`)
xhttp.send();