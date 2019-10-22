function setTime() {
    var date = new Date()

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    minutes = ( minutes < 10 ? "0" : "" ) + minutes
    seconds = ( seconds < 10 ? "0" : "" ) + seconds

    var time = `${hours}:${minutes}:${seconds}`
    $('.clock').html(time)
}

setInterval(setTime, 1000)

function color() {
    var date = new Date()

    var hours = date.getHours()
    var minutes = date.getMinutes()
    var seconds = date.getSeconds()

    hours = ( hours < 10 ? "0" : "" ) + hours
    minutes = ( minutes < 10 ? "0" : "" ) + minutes
    seconds = ( seconds < 10 ? "0" : "" ) + seconds

    var time = `#${hours}${minutes}${seconds}`
    $('.color').html(time)
    $('.color').css("background", time)
}

setInterval(color, 1000)