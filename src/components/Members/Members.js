import React, {useEffect} from 'react';
import * as membersSaga from "../../store/sagas/members/membersSaga";
import {useDispatch} from "react-redux";
import MembersTable from "./MembersTable";

const Members = () => {
    const dispatch = useDispatch();

    // move to hooks
    useEffect(() => {
       dispatch(membersSaga.performGetMembers())
    },[dispatch])

    // create member table
    return (
        <>

            <MembersTable/>

        </>
    )
}

export default Members;
