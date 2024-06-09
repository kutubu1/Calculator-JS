function calculator(){
    const CP = document.querySelector('.cost_price').value;
    const SP = document.querySelector('.selling_price').value;

    const profit_loss = document.querySelector('.profit_loss');
    const percentage = document.querySelector('.profit_loss_percentage');
    const nothing = document.querySelector('.nothing');

    profit_loss.innerHTML = '';
    percentage.innerHTML = '';
    nothing.innerHTML = '';


    if (SP > CP){
        const profit = SP - CP;
        const profit_percent = ((profit / CP) * 100).toFixed(2);

        profit_loss.innerHTML = 'Profit : ' + profit;
        percentage.innerHTML = 'Profit Percentage :' + profit_percent
    }

    if (SP < CP){
        const loss = CP - SP;
        const lost_percentage = ((loss / CP) * 100).toFixed(2);

        profit_loss.innerHTML = 'Loss : ' + loss;
        percentage.innerHTML = 'Loss Percentage :' + lost_percentage;


    }
    if(SP == CP) {
        nothing.innerHTML = 'No Profit No Loss';
    }
}