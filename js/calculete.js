// triangle
document.getElementById('triangle-btn').addEventListener('click', function(){
    const bFieldValue = getFieldValueById('triangle-field1');
    const hFieldValue = getFieldValueById('triangle-field2');
      
    const result = calculetionByValue_name(bFieldValue, hFieldValue, '1');
    setResutByValue_id_name(result, 'triangle-cm-result','1');
})
document.getElementById('triangle-convert-btn').addEventListener('click', function(){
    convertMiterById('triangle-cm-result', 'triangle-m-result');
})







// ractangle
document.getElementById('ractangle-btn').addEventListener('click', function(){
    const wFieldValue = getFieldValueById('ractangle-field1');
    const lFieldValue = getFieldValueById('ractangle-field2');
    
    const result = calculetionByValue_name(wFieldValue, lFieldValue, '2');
    setResutByValue_id_name(result, 'rectangle-cm-result','2');
})
document.getElementById('rectangle-convert-btn').addEventListener('click', function(){
    convertMiterById('rectangle-cm-result', 'rectangle-m-result');
});











// Parallogram
document.getElementById('parallogram-btn').addEventListener('click', function(){
    const bFieldValue = getFieldValueById('parallogram-field1');
    const hFieldValue = getFieldValueById('parallogram-field2');

    const result =  calculetionByValue_name(bFieldValue, hFieldValue, '3');
    setResutByValue_id_name(result, 'parallogram-cm-result', '3');
})

document.getElementById('parallogram-convert-btn').addEventListener('click', function(){
    convertMiterById('parallogram-cm-result', 'parallogram-m-result');
});









// Rhombus
document.getElementById('rhombus-btn').addEventListener('click', function(){
    const d1FieldValue = getFieldValueById('rhombus-field1');
    const d2FieldValue = getFieldValueById('rhombus-field2');

    const result =  calculetionByValue_name(d1FieldValue, d2FieldValue, '4');
    setResutByValue_id_name(result, 'rhombus-cm-result', '4'); 
})
    
document.getElementById('rhombus-covert-btn').addEventListener('click', function(){
    convertMiterById('rhombus-cm-result', 'rhombus-m-result');
});








// Pentagon
document.getElementById('pentagon-btn').addEventListener('click', function(){
    const pFieldValue = getFieldValueById('pentagon-field1');
    const bFieldValue = getFieldValueById('pentagon-field2');

    const result =  calculetionByValue_name(pFieldValue, bFieldValue, '5');
    setResutByValue_id_name(result, 'pentagon-cm-result', '5'); 
})
    
document.getElementById('pentagon-covert-btn').addEventListener('click', function(){
    convertMiterById('pentagon-cm-result', 'pentagon-m-result');
});








// Ellipes
document.getElementById('ellipes-btn').addEventListener('click', function(){
    const pFieldValue = getFieldValueById('ellipes-field1');
    const bFieldValue = getFieldValueById('ellipes-field2');

    const result =  calculetionByValue_name(pFieldValue, bFieldValue, '6');
    setResutByValue_id_name(result, 'ellipes-cm-result', '6'); 
})
    
document.getElementById('ellipes-covert-btn').addEventListener('click', function(){
    convertMiterById('ellipes-cm-result', 'ellipes-m-result');
});

