async function convertByn(){
    const curEl = document.getElementById('result')
    curEl.innerHTML = ''
    const CurIds = document.getElementById('selection').value
    if (CurIds == 'usd'){
        CurId = 145
    }
    else if (CurIds == 'eur'){
        CurId = 292
    }
    else {
        CurId = 298
    };
    const bynEl = document.getElementById('byn_value').value;
  
    const response = await fetch(`https://www.nbrb.by/api/exrates/rates/${CurId}`);
    const result = await response.json();
  
    const nameMoney = result.Cur_Abbreviation;
    const convert = (bynEl * result.Cur_Scale) / result.Cur_OfficialRate;
  
    const spanString = document.getElementById('result');
    spanString.append(`You can convert ${bynEl} BYN into ${convert.toFixed(2)} ${nameMoney}`)
};