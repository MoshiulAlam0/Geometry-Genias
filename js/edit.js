// for edit functionality 
function showEditOption() {
    const edits = document.querySelectorAll('.edit-icon');
    for (const edit of edits) {
        edit.addEventListener('click', function () {
            const fields = document.querySelectorAll('.field');
            for (const field of fields) {
                field.style.display = 'block';
            }
        })
    }
}

showEditOption();


// for checkBox 
function hideField() {
    const checkBoxes = document.querySelectorAll('.checkbox');
    for (const checkBox of checkBoxes) {
        checkBox.addEventListener('click', function () {
            const fields = document.querySelectorAll('.field');
            for (const field of fields) {
                field.style.display = 'none';
            }
        })
    }
}

hideField()
