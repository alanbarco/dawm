let ejecutarCodigo = () => {
        //alert('Hola, mundo!');
        let elemento;
        elemento = document.getElementById("titulo1");
        elemento.textContent = "Album de fotos";

        let arreglo;
        arreglo = document.getElementsByClassName("text-muted");
        arreglo[1].innerHTML=`<span> En este sitio encontrarás un album de fotos inspirado en el snippet de <a href="https://codepen.io/taj1uddin/pen/eYVrLKy">Codepen - Taj Uddin</a>.</span>;`
   
        let arreglo2;
        arreglo2 = document.getElementsByTagName("p");
        arreglo2[2].setAttribute('class','d-none');

        let img;
        let arregloImg;
        const svg = document.getElementsByClassName('bd-placeholder-img card-img-top');
        

        arregloImg = [{ url: `https://images.unsplash.com/photo-1653942786759-f3caff948222?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`, alt: `camino`}, 
        { url: `https://images.unsplash.com/photo-1653988235129-842891001e10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`, alt: `energia`}, 
        { url: `https://images.unsplash.com/photo-1648737963540-306235c8170e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwzMDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60`, alt: `papá`},
         {url: 'https://images.unsplash.com/photo-1654041563290-2d6118dba2c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:"cosa"},
        {url:'https://images.unsplash.com/photo-1653965188866-e544c043a2f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',alt:'cosa'},
        {url:'https://images.unsplash.com/photo-1654045851484-d9aea271acda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMjd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60' , alt:'cosa'},
        {url:'https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMjR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'cosa'},
        {url:'https://images.unsplash.com/photo-1654046491755-20ef230f0add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60', alt:'cosa'},
        {url: 'https://images.unsplash.com/photo-1654083843429-146101352678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60', alt:'cosa'}];
        let arregloimg2 = [];
        /*for(let j = 0; j<arregloImg.length;j++){
                arregloimg2[j] = document.createElement('img');
                arregloimg2[j].setAttribute('src',arregloImg[j].url);
                arregloimg2[j].setAttribute('alt',arregloImg[j].alt);
        }


        for(let i=0; i<arregloimg2.length;i++){
                console.log(i+1);
                svg[i+1].replaceWith(arregloimg2[i]);
        }
        let img2;
        img2 = document.getElementsByTagName('img');
        console.log(img2);*/

        for (let i=0; i < arregloImg.length; i++) {
                elemento = svg[0];
                const img = document.createElement("img");
                img.setAttribute('src',arregloImg[i]['url']);
                img.setAttribute('alt',arregloImg[i]['alt']);
                elemento.replaceWith(img);
             }  
        }
        
ejecutarCodigo();
