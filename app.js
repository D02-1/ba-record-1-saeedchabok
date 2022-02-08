

const data =
{
    person:
        [
            {
                id: 1,
                name: 'Hamid'
            },
            {
                id: 2,
                name: 'Saeed'
            }

        ]
}

db.defaults(data).write();

const read = () => {
    const persons = db.get('person').value();

    console.log(persons);
}
read();