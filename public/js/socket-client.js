const socket = io();
const txtMensaje = document.querySelector('#txtMensaje') 
const btnEnviar = document.querySelector('#btnEnviar')
//HTML refs

const lblOnline = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');

socket.on('connect', ()=>{
    console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display = '';

});


socket.on('disconnect', ()=>{
    console.log('Desconectado del servidor');
    lblOnline.style.display = 'none';
    lblOffline.style.display = '';
});


socket.on('enviar-mensaje', (payload)=>{
    const {mensaje} = payload;
    console.log(mensaje)
});

btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload = {
        mensaje,
        id: '123',
        fecha: new Date().getTime()
    }
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('Desde el server', id)
    });
})