let data = Array.from( {length: 100} ).map(( _,i) => `Item ${i+1}`);
    
perPage = 5
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage)//ceil arredonda pra cima
}

const html = {
    get(element){
        return document.querySelector(element);
    }
}

const controls = {
    next() {
        state.page++
        if(state.page > state.totalPage){
            state.page--
        }
    },
    prev() {
        state.page--
        if(state.page < 1){
            state.page = 1;
        }
    },
    goTo(page) {
        state.page = page;
        //page maior do que o número total de páginas??
        // if (page > state.totalPage){
        //     state.page = state.totalPage;
        // }

        // //page menor do que o número total de páginas??
        // if (page < 0){
        //     state.page = 1;
        // }
    },
    createListeners(){
        html.get('.first').addEventListener('click', () => {
            controls.goTo(1);
            update();
        }),

        html.get('.last').addEventListener('click', () => {
            controls.goTo(state.totalPage);
            update();
        }),

        html.get('.next').addEventListener('click', () => {
            controls.next();
            update();
        }),

        html.get('.prev').addEventListener('click', () => {
            controls.prev();
            update();
        })

    }
}

const list = {
    create(item) {
        
    },

    update() {
        html.get('.list').innerHTML = '';
        this.create();
    }
}

// function update(){
//     console.log(state.page)
// }

function init(){
    list.update();
    controls.createListeners();
}

list.update();