setInterval(() => {
    let time = document.getElementById('time'),
        date = document.getElementById('date')
    let actualDate = new Date(),
        hour = actualDate.getHours(),
        minutes = actualDate.getMinutes(),
        dayOfWeek = actualDate.getUTCDay(),
        month = actualDate.getMonth(),
        numberDay = actualDate.getDate()

    hour < 10 ? hour = '0' + hour : null
    month = month + 1
    minutes < 10 ? minutes = '0' + minutes : null

    switch (dayOfWeek) {
        case 0:
            dayOfWeek = 'domingo'
            break;
        case 1:
            dayOfWeek = 'segunda-feira'

            break;
        case 2:
            dayOfWeek = 'terça-feira'

            break;
        case 3:
            dayOfWeek = 'quarta-feira'

            break;
        case 4:
            dayOfWeek = 'quinta-feira'

            break;
        case 5:
            dayOfWeek = 'sexta-feira'

            break;
        case 6:
            dayOfWeek = 'sábado'

            break;
        default:
            break;
    }

    switch (month) {
        case 0:
            month = 'janeiro'
            break;
        case 1:
            month = 'fevereiro'
            break;
        case 2:
            month = 'março'
            break;
        case 3:
            month = 'abril'
            break;
        case 4:
            month = 'maio'
            break;
        case 5:
            month = 'junho'
            break;
        case 6:
            month = 'julho'
            break;
        case 7:
            month = 'agosto'
            break;
        case 8:
            month = 'setembro'
            break;
        case 9:
            month = 'outubro'
            break;
        case 10:
            month = 'novembro'
            break;
        case 11:
            month = 'dezembro'
            break;
        default:
            break;
    }
    time.innerText = `${hour}:${minutes}`
    date.innerText = `${dayOfWeek}, ${numberDay} de ${month}`

}, 1000)