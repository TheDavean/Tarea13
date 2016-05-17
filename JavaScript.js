$(document).ready(function(){
  var registration_number = $("#matricula").val();
  var name = $("#nombre"). val();
  var last_name = $("#apellido").val();
  var status = $("#status").val();
  var student ={
    "registration_number" : registration_number,
    "name" : name,
    "last_name" : last_name,
    "status" : status
  };

  $("#ajax").click(function(){
    $.ajax({
      url: "https://andreihelo-restful-api.herokuapp.com/students",
      success: function(result, status, xhr){
        $.each(result, function(i){
        $("#Contenido").append("<tr><td>"+result[i].id+
        "</td><td>"+result[i].registration_number+
        "</td><td>"+result[i].name+
        "</td><td>"+result[i].last_name+
        "</td><td>"+result[i].status+
        "</td><td><button class='borrar'>x</button></td></tr>");
      });
      }

    });
    });

  $("#agregar").click(function(){
    $.ajax({
      url: "https://andreihelo-restful-api.herokuapp.com/students",
      method: "POST",
      data: student,
      success: function(result, status, xhr){
        $("#Contenido").append("<tr><td>"+result.id+
        "</td><td>"+result.registration_number+
        "</td><td>"+result.name+
        "</td><td>"+result.last_name+
        "</td><td>"+result.status+
        "</td><td><button class='borrar'>x</button></td></tr>");
    }
  });
  });

    $(document).on("click",".borrar",function(){
      alert("Hola");
      $(this).parent().parent().remove();
    });

});
