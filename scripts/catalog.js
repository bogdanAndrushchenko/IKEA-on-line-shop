import {
    getData
} from './getData.js';
import generateSubcatalog from './generateSubcatalog.js';



const catalogHandler = () => {
    const updateSubCatalog = generateSubcatalog();
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    document.body.insertAdjacentElement('beforeend', overlay)
    const refs = {
        btnBurger: document.querySelector('.btn-burger'),
        catalog: document.querySelector('.catalog'),
        // overlay: document.querySelector('.overlay'),
        catalogList: document.querySelector('.catalog-list'),
        subCatalog: document.querySelector('.subcatalog'),
        subCatalogHeader: document.querySelector('.subcatalog-header'),
        btnReturn: document.querySelector('.btn-return')
    }

    const openMenu = () => {
        refs.catalog.classList.add('open');
        overlay.classList.add('active');
        console.log('click');
    }

    const closeMenu = () => {
        closeSubMenu();
        refs.catalog.classList.remove('open');
        overlay.classList.remove('active');

    }

    const handlerMenu = (event) => {
        event.preventDefault();
        const target = event.target
        const itemList = event.target.closest('.catalog-list__item>a');
        if (itemList) {
            getData.subCatalog(target.textContent, (data) => {
                updateSubCatalog(target.textContent, data)
                refs.subCatalog.classList.add('subopen');

            })

        };
        if (event.target.closest('.btn-close')) {
            closeMenu()
        }

    }

    const closeSubMenu = () => {
        refs.subCatalog.classList.remove('subopen');
    }



    refs.btnBurger.addEventListener('click', openMenu);

    overlay.addEventListener('click', closeMenu);
    refs.catalog.addEventListener('click', handlerMenu);
    refs.subCatalog.addEventListener('click',(event)=>{
        const btnReturn = event.target.closest('.btn-return');

        if(btnReturn)closeSubMenu()
    })


    document.addEventListener('keydown', (event) => {
        if (event.code === 'Escape') {
            closeMenu();
        }
    })
}

export default catalogHandler;