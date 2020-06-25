
CriarChamado = function(idUsuario, ticketTitle){
    this.idUsuario = idUsuario;
    this.ticketTitle = ticketTitle;
    this._ticketID = this.ticketID
    
    this.geraTicketID = function geraTicketID(length){
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }
         
    
    }


formatarMaquina = new CriarChamado(2258413, 'Usuário tá putao')

console.log(formatarMaquina.geraTicketID(5))