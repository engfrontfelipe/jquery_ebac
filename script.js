$('#form_tarefa').on("submit", function(e){
    e.preventDefault()
    const input_msg = $('#nome-tarefa').val()
    const new_item = $(`<li>${input_msg}</li>`)
    new_item.appendTo('ul')
    $("#nome-tarefa").val("")

})

$(document).on("click", "li", function(){
    $(this).toggleClass("completed")
    
})











