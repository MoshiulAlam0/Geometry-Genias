// set field value inside the element text
function setcmByid(cm_element, cm_fieldValue) {
    const element = document.getElementById(cm_element);
    if (cm_fieldValue > 0) {
        element.innerText = cm_fieldValue;
    }
    else if(cm_fieldValue < 0){
        alert('only posetive num')
    }
}

// get cm field value 
function getcmfieldValue(element_id) {
    const element = document.getElementById(element_id);
    return element.value;
}






// 'triangle-field'
document.getElementById('triangle-field1').addEventListener('keyup', function () {
    const FieldValue1 = getcmfieldValue('triangle-field1');
    setcmByid('T-cm1', FieldValue1);
})
document.getElementById('triangle-field2').addEventListener('keyup', function () {
    const FieldValue2 = getcmfieldValue('triangle-field2');
    setcmByid('T-cm2', FieldValue2);
})



// 'Rectangle-field'
document.getElementById('ractangle-field1').addEventListener('keyup', function () {
    const FieldValue1 = getcmfieldValue('ractangle-field1');
    setcmByid('R-cm1', FieldValue1);
})
document.getElementById('ractangle-field2').addEventListener('keyup', function () {
    const FieldValue2 = getcmfieldValue('ractangle-field2');
    setcmByid('R-cm2', FieldValue2);
})




// 'parallogram--field'
document.getElementById('parallogram-field1').addEventListener('keyup', function () {
    const FieldValue1 = getcmfieldValue('parallogram-field1');
    setcmByid('P-cm1', FieldValue1);
})
document.getElementById('parallogram-field2').addEventListener('keyup', function () {
    const FieldValue2 = getcmfieldValue('parallogram-field2');
    setcmByid('P-cm2', FieldValue2);
})




// 'rhombus-field'
document.getElementById('rhombus-field1').addEventListener('keyup', function () {
    const FieldValue1 = getcmfieldValue('rhombus-field1');
    setcmByid('Rh-cm1', FieldValue1);
})
document.getElementById('rhombus-field2').addEventListener('keyup', function () {
    const FieldValue2 = getcmfieldValue('rhombus-field2');
    setcmByid('Rh-cm2', FieldValue2);
})





// 'pentagon-field'
document.getElementById('pentagon-field1').addEventListener('keyup', function () {
    const FieldValue1 = getcmfieldValue('pentagon-field1');
    setcmByid('Pe-cm1', FieldValue1);
})
document.getElementById('pentagon-field2').addEventListener('keyup', function () {
    const FieldValue2 = getcmfieldValue('pentagon-field2');
    setcmByid('Pe-cm2', FieldValue2);
})



// 'ellipes-field'
document.getElementById('ellipes-field1').addEventListener('keyup', function () {
    const FieldValue1 = getcmfieldValue('ellipes-field1');
    setcmByid('E-cm1', FieldValue1);
})
document.getElementById('ellipes-field2').addEventListener('keyup', function () {
    const FieldValue2 = getcmfieldValue('ellipes-field2');
    setcmByid('E-cm2', FieldValue2);
})




