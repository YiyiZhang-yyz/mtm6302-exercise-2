const $gallery = document.getElementById('myGallery')

let images = [ ]

for(let i = 1; i < 16; i++){
    images.push(`
    <div class="container">
        <img  class="img" src="images/${i}.jpeg"  alt="Cute and funny puppies" border="3px solid #000000">
        <p style ="text-align:center" class="text">Cute puppies- ${i}</P>  
    </div>
    `)
}

$gallery.innerHTML = images.join('')


const $imgList = document.querySelectorAll('.img')


for (let item of $imgList) {
 
    item.addEventListener('click',function(){
        item.classList.toggle('dogImg') 

        document.getElementById('viewImages').innerHTML =`
        <p>Cute dogs</p>
        `
        
    })
   
}










  