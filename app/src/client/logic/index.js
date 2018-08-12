const logic = {
key: 'f2aum9t7dgbdpc7tsmvzuedejg9bmzy4',
data: {},




    getAllBosses() {
        return fetch (`https://eu.api.battle.net/wow/boss/?locale=es_ES&apikey=${this.key}`)
        .then(res => res.json())
        .then(data => { 
            this.data = data
            return data
            })
    },

    getIdBoss (id) {


    }
}

if(typeof module !== 'undefined') module.exports = logic