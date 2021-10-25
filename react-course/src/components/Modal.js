/*
    the component which is gonna be the
    responsable of render 
    the overlay when we do click in "Delete" btn


    ----------------------

    About state

    we can use the same approach as in Backdrop


*/

function Modal(props){

    function cancelHandler(){
        props.onCancel();
    }

    function confirmHandler(){
        props.onConfirm();
    }

    return (
        <div className='modal'>
            <p>Are you sure?</p>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn' onClick={confirmHandler}>Confirm</button>
        </div>
    );
}

export default Modal;
