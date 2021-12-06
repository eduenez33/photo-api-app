var searchForm = document.querySelector('#search-form')

searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            var photoData = res.photos.map(function(photo){
                return photo.src;
            });
    
            var container = document.querySelector('#photo-divs');
            container.innerHTML = '';
            photoData.forEach(function(photo) {
                var photoDiv = document.createElement('div');
                photoDiv.classList.add('photo-div')
                photoDiv.innerHTML = `
                    <img src=${photo.large} />
                `;
                container.appendChild(photoDiv);
            })
        }
    };
    
    var textValue = document.querySelector('#search-bar').value
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}&per_page=12`, true);
    xhttp.setRequestHeader('Authorization', `563492ad6f91700001000001a9bebb3c9aef447389f1ede8fdab3b1c`)
    xhttp.send();
});
