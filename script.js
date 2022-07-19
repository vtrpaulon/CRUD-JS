function salvar(){

    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var p = document.getElementById('p').innerHTML = '<hr>';

    var pessoa = [nome + ' | ' + email];

    document.getElementById('info').append(pessoa);

    //document.getElementById('info').innerHTML = (nome + ' | ' + email);
}
function deletar(){
    //pessoa.pop();
    document.getElementById('info').innerHTML = '';
}