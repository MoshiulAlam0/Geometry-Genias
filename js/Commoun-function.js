// for ger value inside the input field 
function getFieldValueById(field_id) {
    const field = document.getElementById(field_id);
    if ((field.value < 0) || (field.value === '')) {
        alert('Please ipnut currect cm')
    }
    else {
        return parseFloat(field.value);
    }
}











// for calculetion ----------->>>>
function calculetionByValue_name(fieldValue_1, fieldValue_2, number) {
    if (number === '1') {
        return .5 * fieldValue_1 * fieldValue_2;
    }
    else if (number === '2') {
        return fieldValue_1 * fieldValue_2;
    }
    else if (number === '3') {
        return fieldValue_1 * fieldValue_2;
    }
    else if (number === '4') {
        return .5 * fieldValue_1 * (fieldValue_2 / 2);
    }
    else if (number === '5') {
        return .5 * fieldValue_1 * fieldValue_2;
    }
    else if (number === '6') {
        const result = (3.14159265359 * fieldValue_1 * fieldValue_2).toFixed(2);
        return parseFloat(result);


    }
}



// for set calculetion inside the result 
function setResutByValue_id_name(result, element_id, number) {
    const element = document.getElementById(element_id);
    if (isNaN(result) === false) {
        element.innerText = result;
        if (number === '1') {
            const element = document.getElementById('result-box-1');
            element.style.display = 'block';
        }
        else if (number === '2') {
            const element = document.getElementById('result-box-2');
            element.style.display = 'block';
        }
        else if (number === '3') {
            const element = document.getElementById('result-box-3');
            element.style.display = 'block';
        }
        else if (number === '4') {
            const element = document.getElementById('result-box-4');
            element.style.display = 'block';
        }
        else if (number === '5') {
            const element = document.getElementById('result-box-5');
            element.style.display = 'block';
        }
        else if (number === '6') {
            const element = document.getElementById('result-box-6');
            element.style.display = 'block';

        }
    }
}

// for convert m^2
function convertMiterById(cm_element_id, m_element_id) {
    const m_element = document.getElementById(m_element_id);
    const cm_element = document.getElementById(cm_element_id);

    const cm = parseFloat(cm_element.innerText);
    m_element.innerText = cm / 100;
}


