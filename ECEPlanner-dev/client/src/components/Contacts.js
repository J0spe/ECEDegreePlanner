import React from 'react';

function Contacts() {
    return(
        <table>
            <tr>
                <td width="25%">
                    <h1>Mary Brewer</h1>
                </td>
                <td width="25%">
                    <h1>Nicole Gholston</h1>
                </td>
                <td width="25%">
                    <h1>Kimberly Johnston</h1>
                </td>
                <td width="25%">
                    <h1>Susan Broniak</h1>
                </td>
            </tr>
            <tr>
                <td width="25%">
                    <img src="../img/MaryBrewer.jpg" width="200" height="300" alt="Mary Brewer VT Advisor" />
                </td>
                <td width="25%">
                    <img src="../img/NicoleGholston.jpg" width="200" height="300" alt="Nicole Gholston VT Advisor" />
                </td>
                <td width="25%">
                    <img src="../img/KimberlyJohnston.jpg" width="200" height="300" alt="Kimberly Johnston VT Advisor" />
                </td>
                <td width="25%">
                    <img src="../img/SusanBroniak.jpg" width="200" height="300" alt="Susan Broniak VT Advisor" />
                </td>
            </tr>
            <tr>
                <td width="25%">
                    <h2>
                        (A - D)
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        (E - K, R)
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        (L - Q)
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        (S - Z)
                    </h2>
                </td>
            </tr>
            <tr>
                <td width="25%">
                    <h2>
                        taylorm@vt.edu
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        nicole7@vt.edu
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        kim4vt@vt.edu
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        sbroniak@vt.edu
                    </h2>
                </td>
            </tr>
            <tr>
                <td width="25%">
                    <h2>
                        phone: (540) 231-4539
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        phone: (540) 231-3106
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        phone: (540) 231-8393
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        phone: (540) 231-8219
                    </h2>
                </td>
            </tr>
            <tr>
                <td width="25%">
                    <h2>
                        <a href={'/home'} className='black'>Advising link/created an appointment</a>
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        <a href={'/home'} className='black'>Advising link/created an appointment</a>
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        <a href={'/home'} className='black'>Advising link/created an appointment</a>
                    </h2>
                </td>
                <td width="25%">
                    <h2>
                        <a href={'/home'} className='black'>Advising link/created an appointment</a>
                    </h2>
                </td>
            </tr>
        </table>
    );
}

export default Contacts;