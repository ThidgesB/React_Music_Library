import React, { useState } from 'react';
import Songform from '../SongForm/SongForm';


const CreateButton = () => {

    function handleSubmit(event){
        event.preventDefault();
        return(
            <Songform />
        )
    }






    return ( 
        <div>
            <button type='submit' onSubmit={handleSubmit}></button>
        </div>
     );
}
 
export default CreateButton;