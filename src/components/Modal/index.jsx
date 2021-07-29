import React, { useEffect } from 'react';
import PortalModal from './Portal';
import { Overlay, Dialog } from './styles';

// children: indica que haverá conteúdo interno
// open: boolean que diz se o modal está aberto
// onClose: método que abre ou fecha
const Modal = ({ children, modalOpened, onClose }) => {
    
    //sintaxe padrão do useEffect:
    //useEffect(() => {},[])
    useEffect(() => {
        function onEsc(e) {
            if (e.keyCode === 27) onClose();
        }
        window.addEventListener('keydown', onEsc);
        return () => {
            window.removeEventListener('keydown', onEsc)
        } // se não tiver o removeEventListener, ele fica acumulando efeitos
    },[onClose]);
    // o useEffect permite executar efeitos nos componentes APÓS a sua renderização 

    if(!modalOpened) return null; // se open for falso, não faz nada

    // Fechar a modal
    function onOverlayClick(){
        onClose()
    }

    // Por conta do event bubble, a propagação do evento deve ser interrompida ao clicar no dialog
    function onDialogClick(e){
        e.stopPropagation();
    }

    return(
        <PortalModal>
            <Overlay onClick={onOverlayClick}>
                <Dialog onClick={onDialogClick}>
                    {children}
                </Dialog>
            </Overlay>
        </PortalModal>
    )
};

export default Modal;