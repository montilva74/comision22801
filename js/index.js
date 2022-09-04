
//Funcion modo oscuro
function cambiarModo() {
    var cuerpoweb = document.body;
    cuerpoweb.classList.toggle("oscuro");
}

//Mostrarvideos
function mostrarVideos(){
    const videos = [
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/80R8irmsKvg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title : 'Naruto vs Pain',
        },
        {
            code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/rPkqyyz-6Lc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Boruto Sorprende a Naruto Invocando a un Nuevo Zorro de 9 Colas usando su Jogan'
        },
        {
            code: '<iframe width="560" height="315" src="https://www.youtube.com/embed/SJ2OI20LFVk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Hinata sintió que su sangre ardía después de recibir el chakra de Kurama'
        },
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/5GzEPP2Pttk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'La HISTORIA de HINATA HYUGA'
        },
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/LxA19oklVqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'La Historia de TSUNADE'
        },
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/TrkOYA2QcNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title : 'Naruto Le Pide A Hinata Que Use Byakugan para Ver La Mano De Boruto'
        },
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/Tgpzk8m23Io" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Naruto hambriento por comer ramen'
        },
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/bIzgyW6gS2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Tobi y Deidara'
        },
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/Iq6aVxc5deQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Hinata va al Hospital a visitar a Naruto'
        },
        {
            code : '<iframe width="560" height="315" src="https://www.youtube.com/embed/XcKGrVfDm38" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
            title: 'Sakura se pone Celosa de Naruto y Hinata'
        }
    ]
    const videoList = document.getElementById("video-list");
    const repeat = document.getElementById("cantidad").value;

    videoList.innerHTML = '';


for (let index = 0; index < repeat; index++) {
    let r = Math.floor(Math.random() * 10)
    videoList.innerHTML += '<li class="caja"> ' + videos[r].title + ' ' + videos[r].code + '</li>';
}
}


mostrarVideos();

