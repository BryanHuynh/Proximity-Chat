import React from 'react';
import Controller from '../../Controller';
import styles from './style.css';

const InputField = () => {
    const controller = Controller.getInstance();

    const sendMessage = (e) => {
        e.preventDefault();
        let message = document.getElementById('message').value;
        console.log(message)
        controller.sendMessage(message);
        
        document.getElementById('message').value = '';
    }




    return (
        <div className="input-field">
            <h1 id="messageHeader">
                Enter Message
            </h1>
            <form onSubmit={sendMessage}>
                <input id="message" type="text" autocomplete="off"/>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default InputField;