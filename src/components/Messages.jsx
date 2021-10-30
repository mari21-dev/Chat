import React, {useState, useEffect} from "react";
import {compareArraysAsSet} from "@testing-library/jest-dom/dist/utils";

const Messages = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');

    const changeMessageInput = (event) => {
        setValue(event.target.value)
    }

    const sendMessage = (author, text) => {
        const newMessageList = [...messageList]
        const newMessage = {
            author,
            text,
        }
        newMessageList.push(newMessage);
        setMessageList(newMessageList)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        sendMessage('user', value);
        setValue('');
    }

    useEffect(() => {
        if (messageList.length === 0) {
            return
        }

        const asd = messageList[messageList.length - 1]
        if (asd.author === 'Robot') {
            return;
        }

        const timer = setTimeout(() => {
            sendMessage('Robot', 'It is fine!')
        }, 1500);

        return () => {
            clearTimeout(timer);
        };

    }, [messageList])

    return (
        <div>
            <h1>Message</h1>
            <ul>
                {
                    messageList.map((item) => <li>
                        {item.author}: {item.text}
                    </li>)
                }
            </ul>
            <form onSubmit={onSubmit}>
                <input value={value} onChange={changeMessageInput} type="text"/>
                <button type="submit">Send message</button>
            </form>
        </div>
    )
}

export default Messages;
