import React, {useEffect} from 'react';
import * as membersSaga from "../../store/sagas/members/membersSaga";
import {useDispatch} from "react-redux";

const Members = () => {
    const dispatch = useDispatch();

    // move to hooks
    useEffect(() => {
        dispatch(membersSaga.performGetMembers())
    },[])

    // create member table
    return (
        <>

            <div className="aboutText text-link">Members area</div>

        </>
    )
}

export default Members;
