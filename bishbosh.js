
/*Bish-Bosh
Bish-Bosh listar alla tal mellan 1 och 100, men vissa undantag: Om talet är jämnt delbart
med 3 listas ‘Bish’ istället för talet. Om talet är jämnt delbart med 4 listas ‘Bosh’ istället för
talet. Om talet är jämnt delbart med både med 3 och 4 skrivs “Bish-Bosh” istället för talet.
Exempel:
1, 2, Bish, Bosh, 5, Bish, 7, Bosh, Bish, 10, 11, Bish-Bosh, 13, 14, Bish [...*/

const form = document.querySelector('#bbForm');
const output = document.querySelector('#output');

// Fetch all the forms we want to apply custom Bootstrap validation styles to 1.1
const forms = document.querySelectorAll('.needs-validation')


//   output.addEventListener('click', (e) => {
//     console.log(e.target);
//     e.target.remove();
//   })

//***************************************************//


form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Loop over them and prevent submission 1.2
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')

            }, false)
        })
    // output.innerHTML += `<p>bishboshCount: ${e.target[0].value}</p>`;
    // output.innerHTML += `<p>bish: ${e.target[1].value}</p>`;
    // output.innerHTML += `<p>bosh: ${e.target[2].value}</p>`;

    let bbc = e.target[0].value;
    let bish = e.target[1].value;
    let bosh = e.target[2].value;
    bishBoshCount(bbc, bish, bosh);
    //e.target.reset();
})


const bishBoshCount = function bishBoshFunction(bbc, bish, bosh) {

    //let endCount = bbc;
    //let modulo3 =  bish;
    //let modulo4 = bosh;

    let result = [];
    for (let i = 1; i <= bbc; i++) {
        if ((i % bish === 0) && (i % bosh === 0)) {
            result.push('Bish-Bosh');
        }

        else if (i % bish === 0) {
            result.push('Bish');
        }
        else if (i % bosh === 0) {
            result.push('Bosh');
        }

        else {
            result.push(`${i}`);

        }
    }
    //return result;
    let displayResult = result.map(r => '<span>' + r + '</span>').join('&nbsp;|&nbsp;');
    output.innerHTML = displayResult;
    
}
