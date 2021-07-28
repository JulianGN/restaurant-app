import ReactDOM from 'react-dom'

// criamos o modal com a props descontruída puxando a children, para indicar que haverão itens dentro
const PortalModal = ({children}) => {
    const portal = document.getElementById('modal-root');
    return ReactDOM.createPortal(children, portal); // aqui é retornado o createPortal, onde ele pede primeiro o que será renderizado e depois onde
}

export default PortalModal;