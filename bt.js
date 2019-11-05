    let userName = prompt("Who's there?");
    if (userName == 'Admin' || userName == 'admin') {
       alert ('welcom');
       let pass = prompt('Password?', '');
       if (pass === 'themaster') 
         alert('Welcome!');
       else if (pass == 'null') {
         alert('Canceled2.');
}       else {
        alert('Wrong password');
}
     } else if (userName == 'null') {
        alert('Canceled');
}      
       else {
        alert("I don't know you");
}
