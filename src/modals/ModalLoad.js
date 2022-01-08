import React, {useState} from 'react';
import  Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from 'react-redux';
import {
    load,
} from '../features/expense/expenseSlice';


export const ModalLoad = () => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const keylist =  Object.keys(localStorage);
    const [selectedkey,setSelectedkey] = useState('')
    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    const handleChange = (e) =>{
        setSelectedkey(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const savedlist = JSON.parse(localStorage.getItem(selectedkey))
        dispatch(load(savedlist))
        setSelectedkey('')
        hideModal()
    }

    return (
        <>
            <button className="btn btn-info" onClick={showModal}>LOAD</button>
            <Modal show={isOpen} onHide={hideModal}>
                <Modal.Header>
                <Modal.Title>Select the Expense list you want to Load </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <select value={selectedkey} onChange={handleChange}>{
                            keylist.map( (eachkey) => 
                            <option value={eachkey} key={eachkey}>{eachkey}</option> )
                        }</select>
                        <button className="btn btn-primary" type='submit'>LOAD</button>
                    </form>
  
                </Modal.Body>
                <Modal.Footer>
                <button onClick={hideModal}>Cancel</button>
                </Modal.Footer>
            </Modal>
        </>
    )
}


