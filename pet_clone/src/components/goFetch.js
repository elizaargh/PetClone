const fetchFunction = async function(url, data={}) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
        }
    );
    console.log('response:', response);
    
    return response.json();
};

// const submitUser = () => {
//     event.preventDefault();
//     let name = document.getElementById('name').value;
//     let surname = document.getElementById('surname').value;
//     let email = document.getElementById('email').value;
    
//     const formValues = {
//         name, 
//         surname,
//         email
//     };

//     fetchFunction('/user-form', formValues);
// };

// const submitPreferences = function() {
//     event.preventDefault();
//     let frequency = document.getElementById('frequency').value;
//     let all = document.getElementById('everything').checked;
//     let care = document.getElementById('care').checked;
//     let promos = document.getElementById('promos').checked;
//     let train = document.getElementById('train').checked;
//     const formValues = {
//         frequency: frequency,
//         all: all,
//         care: care,
//         promos: promos,
//         train: train,
//         user_id: 2
//     };
//     console.log(formValues);
//     //send data to server
//     fetchFunction('/user-preferences', formValues);
// }

const submitTest = function() {
    const testData = fetch('/user')
    testData.then((data)=> {
        console.log(data);
    })
}

module.exports = {
    fetchFunction,
    submitTest
}