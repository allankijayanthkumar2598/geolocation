

function loadCoupon()
{
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('home').style.opacity='0.7';   
}

function closeCoupon()
{
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('home').style.opacity='1';
} 



function load(){
    document.getElementById('coupon1').style.visibility='visible';
    document.getElementById('home').style.opacity='0.7';
    document.getElementById('coupon').style.opacity='0.7';
   
}

function cancel(){
    document.getElementById('coupon1').style.visibility='hidden';
    document.getElementById('coupon').style.opacity='1'
    
}  