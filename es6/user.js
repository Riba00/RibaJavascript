console.log('prova');

export default {
    function (e = 'jordiriba@iesebre.com') {
        let email = e;
        var password = '1234';

        return {
            email: email,
            consoleme: function consoleme() {
                console.log('Usuari: ' + email)
            }
        }
    }
}