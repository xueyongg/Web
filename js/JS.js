/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function addToDo(input_text){
    $( ".todoList" ).append( "<p> <input type='checkbox' id='test7' /><label for='test7'>"+input_text+"</label></p>" );
    Materialize.toast('To do as been added', 4000)
};

