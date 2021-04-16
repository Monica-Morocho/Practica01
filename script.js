
$(document).ready(()=>{
    $("#texto-buscar").keyup(function (e) {
        if (e.keyCode == 13) {
            buscarHeroe();
        }
    });
});

function buscarHeroe(){
    nombre=$('#texto-buscar').val();
    $.get(`https://www.superheroapi.com/api.php/3732851310159277/search/${nombre}`)
    .done((resultado)=>{
        $("#lista > tbody").html("");
        if (resultado.results){
            resultado.results.forEach(hero => {
                $("#lista > tbody").append(`<tr><td>${hero.name}</td>
                <td>${hero.appearance.gender}</td>
                <td>${hero.biography.publisher}</td>
                <td><img src="${hero.image.url}" style="width: 200px"></td>
                </tr>`);
            });
        }else{
            $("#lista > tbody").append(`<tr><td>NO HAY REGISTROS QUE CONSIDAN CON EL NOMBRE</td></tr>`);
        }
    }).fail((ex)=>{
        alert(ex)
    });
}