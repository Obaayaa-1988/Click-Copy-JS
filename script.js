const btn = document.querySelector('.btn');
const coupon = document.querySelector('.coupon');



const copyText = (e) =>{
    e.preventDefault(e);

    coupon.select()
}
btn.addEventListener("click", copyText)