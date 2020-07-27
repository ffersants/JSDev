let data = Array.from( {length: 100} ).map(( _,i) => `Item ${i+1}`);
    
perPage = 5
const state = {
    page: 1,
    perPage,
    totalPage: Math.ceil(data.length / perPage), //ceil arredonda pra cima
    maxVisibleButtons: 5
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
       //precisa de tratamento

        state.page = +page

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
        const div = document.createElement('div');
        div.classList.add('item');
        div.innerHTML = item;

        html.get('.list').appendChild(div);
    },

    update() {
        html.get('.list').innerHTML = '';
        //pagina 1 = pagina 0
        let page = state.page-1;
        //pagina 0 vezes 5 é igual índice zero no array
        start = page * state.perPage;
        //0 mais cinco é igual a 4
        end = start + state.perPage;
        //paginatedItem = data[0, 1, 2, 3, 4]...
        const paginatedItems = data.slice(start, end);

        paginatedItems.forEach(list.create)
    }
}

const buttons = {
    element: html.get('.controls .numbers'),
    create(page) {
        const button = document.createElement('div');

        button.innerHTML = page;

        if(state.page == page){
            button.classList.add('active');
        }

        button.addEventListener('click', (event)=>{
            const page = event.target.innerText;
            controls.goTo(page);
            update();
        })

        buttons.element.appendChild(button);
    },
    update() {
        buttons.element.innerHTML = "";
        const { maxLeft, maxRight } = buttons.calculateMaxVisible();
        console.log(maxLeft, maxRight)
        for(let page = maxLeft; page <= maxRight; page++){
            buttons.create(page)
        }
    },
    calculateMaxVisible(){
        const { maxVisibleButtons } = state
        let maxLeft = (state.page - Math.floor(maxVisibleButtons/2));
        let maxRight = (state.page + Math.floor(maxVisibleButtons/2))    
        if (maxLeft < 1){
            maxLeft = 1;
            maxRight = maxVisibleButtons;
        }
        
        if (maxRight > state.totalPage){
            maxLeft = state.totalPage - (maxVisibleButtons - 1);
            maxRight = state.totalPage;
            if(maxLeft < 1){
                maxLeft = 1;
            }
        }

        return {maxLeft, maxRight}
    }
}

function update(){
    list.update();
    buttons.update();
}

function init(){
    update();
    controls.createListeners();
}

init()