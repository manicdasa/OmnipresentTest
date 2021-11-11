import React, { useState } from 'react';
import Button from '@restart/ui/esm/Button';

//project imports
import AddEmployeeForm from './Common/AddEmployeeForm';

export const MainLayout = () => 
{
    const [formState, setFormState] = useState<boolean>(false);  

    const handleClose = () => { setFormState(false); }
    const handleShow = () => setFormState(true);

    return(
    <div className="center-layout">
        <h3 className="font-main">Omnipresent Take Home Test</h3>
        <p>Applicant: Dasa Manic</p>
        <Button className="btn btn-secondary btn-add-employee" color="primary" onClick={handleShow}>Add Employee</Button>

        <AddEmployeeForm formState={formState} handleClose={handleClose}/>
    </div>)
}

export default MainLayout;