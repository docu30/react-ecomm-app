import React from 'react'


/* punem props ca parametru pentru a putea accesa copiii lui props
// facem clasa dinamica in functie de tipul mesajului. ea va fi props.variant sau default info
// children este un tip special de props care arata continutul mesajului
// adica in HomeScreen ceea ce vom pune in <MessageBox>{children}</MessageBox> se va afisa aici // in {props.children}
*/
export default function MessageBox(props) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
}
