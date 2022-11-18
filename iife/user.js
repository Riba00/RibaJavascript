//IIFE
var user = (function (e = 'jordiriba@iesebre.com') {
    let email = e;
    var password = '1234';

    function consoleme() {
        console.log('Usuari: ' + email)

    }

    function setemail(){


    }

    return {
        consoleme: consoleme,
        email: email
    }
})()
