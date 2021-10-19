
async function getImage(){
    const image = await axios.get(" https://api.nasa.gov/planetary/apod?api_key=CT0rIlDfBRbdwXlYVIUoEN1VdYMh7iDO0G9wj7I8");
    const img = document.createElement('img');
    img.src = image.data.hdurl;
    const container = document.querySelector('#img');
    container.append(img);
}

const button = document.querySelector('button');
try{
    button.addEventListener('click', function{
        getImage();              
        button.disabled = true;
    });
} catch(e){
    alert('Something is wrong...try again later!');
}

