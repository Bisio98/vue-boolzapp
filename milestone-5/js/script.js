Vue.config.devtools = true;
var app = new Vue({
    el: '#root',
    data: {
        activeItem: 0,
        tmpMessage: '',
        time: '',
        searched: '',
        loweredSearch: '',
        loweredCont: '',
        showMenu: false,
        showOptionsMex: 2,
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                mexRespond: null,
                visible: true,
                showChat: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                showChat: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                showChat: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                showChat: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ]
        
    },
    methods: {
        makeActive: function(index){
            this.showMenu = false;
            this.activeItem = index;
        },
        createMex: function(){
            this.time = dayjs().format('DD/MM/YYYY HH:mm:ss');
            this.contacts[this.activeItem].showChat = true;
            this.showMenu = false;
            if(this.contacts[this.activeItem].messages.length > 1){
                this.contacts[this.activeItem].messages.push({
                    date: this.time,
                    text: this.tmpMessage,
                    status: 'sent'
                })
            }else{
                this.contacts[this.activeItem].messages[0] = {
                    date: this.time,
                    text: this.tmpMessage,
                    status: 'sent'
                };
            }
            this.tmpMessage = '';
            this.respond();
            
        },
        respond: function(){
            this.mexRespond = setTimeout(() => {
                this.time = dayjs().format('DD/MM/YYYY HH:mm:ss');
                this.contacts[this.activeItem].messages.push({
                    date: this.time,
                    text: 'Ok',
                    status: 'received'
                })
            }, 1000);
        },
        search: function(){
            this.loweredSearch = this.searched.toLowerCase();
            for(let i = 0; i < this.contacts.length ; i++){
                this.loweredCont = this.contacts[i].name.toLowerCase();
                if((this.loweredCont.includes(this.loweredSearch))){
                    this.contacts[i].visible = true;
                }else{
                    this.contacts[i].visible = false;
                }
            }
        },
        showOptions: function(index){
            if((this.showMenu === true) && (this.showOptionsMex !== index)){
                this.showOptionsMex = index;
                this.showMenu = true;
            }else if((this.showMenu === true) && (this.showOptionsMex === index)){
                this.showMenu = false;
            }
            else{
                this.showOptionsMex = index;
                this.showMenu = true;
            }
        },
        deleteMessage: function(index){
            if(this.contacts[this.activeItem].messages.length > 1){
                this.showMenu = false;
                this.contacts[this.activeItem].messages.splice(index,1);7
            }else{
                this.contacts[this.activeItem].showChat = false;
                this.contacts[this.activeItem].messages[0]= {
                    dat: '',
                    text: '',
                    status: ''
                }
            }
        }
    }
});