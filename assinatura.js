var assinatura = function(){
    agora = new Date()
    meses = [ "jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez" ]
    return `\t\t Campo Mourao, ${agora.getDay()} de ${meses[agora.getMonth()]} de ${agora.getFullYear()} `

}
module.exports = assinatura