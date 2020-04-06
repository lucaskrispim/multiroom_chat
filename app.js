let app = require('./config/server');


/* parametrizar a porta de escuta */

let server = app.listen(3001,()=>{
    console.log("Servidor On");
});
   
let io = require('socket.io').listen(server);

app.set('io',io);

io.on('connection',(socket)=>{
    console.log('usuário conectou!');


    socket.on('disconnect', ()=>{
        console.log('usuário desconectou');
    });

    socket.on('msgParaServidor',(data)=>{
        socket.emit('msgParaCliente',
        {apelido: data.apelido,mensagem:data.mensagem});
    });

    socket.on('msgParaServidor',(data)=>{
 
        socket.broadcast.emit('msgParaCliente',
        {apelido: data.apelido,mensagem:data.mensagem});

        /* participantes */
        if( parseInt(data.apelido_atualizado_nos_clientes)==0 ){
            console.log('entrei 0');
            socket.emit('participantesParacliente',
            {apelido: data.apelido});

            socket.broadcast.emit('participantesParacliente',
            {apelido: data.apelido});
        }
    });    
});