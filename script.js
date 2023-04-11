// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.

const {createApp} = Vue;

createApp({
    data(){
        return {
            randomEmails: [],
            emailsReady: false,
        }
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios
                .get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then(resp => {
                    this.randomEmails.push(resp.data.response)
                    if (this.randomEmails.length === 10) {
                        this.emailsReady = true;
                    } 
                })
        }
    },
    methods: {
        listReadyToShow() {
        if (this.randomEmails.length === 10) {
            this.emailsReady = true
        }
    }

}
    

}).mount("#app");