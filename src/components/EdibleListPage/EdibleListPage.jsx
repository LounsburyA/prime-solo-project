import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import JournalItem from "../JournalItemPage/JournalItem";

function EdibleListPage() {
    useEffect(() => {
        dispatch({ type: 'FETCH_EDIBLE' });
    }, []);
    const dispatch = useDispatch();
    const edible = useSelector(store => store.FIXTHIS)

    return (
        <>
        <div className="container">
            <h1>Wild Pantry</h1>
            <ul>{edible.map(item=>(
                <JournalItem key={item.id}
                item ={item}
            />))}
                
            </ul>
        </div>
        </>
    )
}
export default EdibleListPage;
