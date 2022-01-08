import React,{useState} from 'react'
import  Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector} from 'react-redux';



export const ModalSave = () => {
  const expenselist = useSelector(state => state.expense);
  const [isOpen, setIsOpen] = useState(false);
  const [listname, setListname] = useState('')

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };
  const handleSubmit = (e) =>{
    e.preventDefault()
    localStorage.setItem(listname, JSON.stringify(expenselist))
    setListname('')
    hideModal()
  }
  return (
    <>
      <button className='btn btn-primary m-3' onClick={showModal}>SAVE</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Save your Expenses </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
           <div className='form-group'>
                    <label htmlFor="desc">Expense List Name:  </label>
                    <input className='form-control' type="text" name='listname' id='listname' value={listname} onChange={(e) => setListname(e.target.value)}/>
            </div>
            <button className='btn btn-primary mt-3' type='submit'>Save</button>
          </form>
          </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
        </Modal.Footer>
      </Modal>
    </>
  );
};


