document.body.append(document.createElement('textarea'));
document.querySelector('button').addEventListener('click', function(){
    const text = document.querySelector('textarea').value;
    const rows = text.split('.\n');
    console.log(rows);

    for(const row in rows){
        con [first, second] = row.toLowerCase().trim().split('_');

        const output = `${first}${second.replace(
            second[0],
            second[0].toUpperCase()
        )}`;
        console.log(`${output.padEnd(20)}✔`);
    }
})