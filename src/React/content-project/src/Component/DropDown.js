import React from 'react';

function DropDown() {
    const formHandler = (e)=>{
        e.preventDefault();
    }
    return (
        <form className="form" onSubmit={formHandler}>
            <label>
                Select your website: <br/>
                <select>
                    <option value="gg">Google</option>
                    <option value="fb">Facebook</option>
                    <option value="tb">TaoBao</option>
                </select>
            </label><br/>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default DropDown;
