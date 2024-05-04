var money = document.getElementById('money')
var valor = 1.42
var registrado = false

function add_valor(){
    var users = ['kauan', 'demo']
    var user = prompt('Digite seu usuário: ')
    
    if(users.includes(user)){
        var senha = prompt('Usuário encontrado! Digite a senha: ')
        if (senha == 'faria'){
            registrado = true
            valor = prompt('Digite o valor: ')
            money.innerHTML = `<center>R$${valor},00</center>`
        }else if(senha == 'demo'){
            registrado = true
            valor = prompt('Digite o valor: ')
            money.innerHTML = `<center>R$${valor},00</center>`
        }
        }
    }
    
function dobrar_add(){
    valor = prompt('Digite o valor: ')
    money.innerHTML = `<center>R$${valor},00</center>`
}
    
    

function dobrar() {
    var numeroAleatorio = Math.floor(Math.random() * 2) + 1;

    if (numeroAleatorio === 1) {
        alert('Parabéns! O valor foi dobrado!')
        valor = parseFloat(valor) * 2
        money.innerHTML = `<center>R$${valor.toFixed(2)}</center>`
    } else {
        alert('Você perdeu todo o dinheiro. Mais sorte da próxima vez')
        valor = 0
        money.innerHTML = `<center>R$${valor.toFixed(2)}</center>`
    }
}

function retirar(){
    var chave = prompt('Chave Pix: ')
    var escolha = confirm(`Transferindo para "${chave}"\n\nConfirme se os dados estão corretos:`)
    if (escolha == false){
        alert('Por favor faça todo o processo novamente.')
    }else{
        alert('A sua transferencia está sendo processada.\nEla deve ser enviada de 1 a 3 dias úteis.\n\nCaso haja problemas entre em contato com a central')
        valor = 0
        money.innerHTML = `<center>R$${valor.toFixed(2)}</center>`
    }
}
