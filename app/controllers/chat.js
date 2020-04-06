class chat{
    static iniciaChat(app,req,res){
        let dadosForm = req.body;
        app.get('io').emit('msgParaCliente',
        {apelido:req.body.apelido,'mensagem': 'acabou de entrar no chat'} );
        
        res.render('chat',{ dadosForm : dadosForm });
    }

}

module.exports = () => {
    return chat;
}




