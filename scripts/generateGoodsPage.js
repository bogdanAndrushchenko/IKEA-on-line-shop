import {
    getData
} from './getData.js';

const wishList = ['idd005', 'idd055', 'idd075'];

const generateGoodsPage = () => {
    const mainHeader = document.querySelector('.main-header')

    if (location.pathname.includes('goods') && location.search) {
        const search = decodeURI(location.search);
        const prop = search.split('=')[0].substring(1);
        const value = search.split('=')[1];
        if (prop === 's') {
            getData.search(value, (data) => console.log(data));
        } else if (prop === 'wishlist') {
            getData.wishList(wishList, (data) => console.dir({
                wishList: data
            }))
        } else if (prop === 'cat' || prop === 'subcat') {
            getData.category(prop, value, (data) => console.log(data))
        }

    }

}
export default generateGoodsPage