// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    prop1: 'value',
    prop2: {
        p2p1: 'v1',
        v2p2: 'v2'
    },

    acceder: function() {
        return this.prop2.p2p1;
    }
};

console.log(objetoAnidado.acceder());

module.exports = objetoAnidado;
