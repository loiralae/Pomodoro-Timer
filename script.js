var sessTime = $('#sessionTime').text()
var time = $('#time').text()
var breakTime = $('#breakTime').text()
var running = false
var onBreak = false
var timer

function session() {
  $('#text').html('Session')
  timer = setInterval(function() {
    console.log(time)
    if (time >= 0) {
      $('#time').html(time--)
    } else {
      onBreak = true
      clearInterval(timer)
      time = breakTime
      breakIt()
    }
  }, 1000)
}

function breakIt() {
  $('#text').html('Break!')
  $('#text').css('left','420px')
  timer = setInterval(function() {
    if (time >= 0) {
      $('#time').html(time--)
    } else {
      onBreak = false
      clearInterval(timer)
      time = sessTime
      session()
    }
  }, 1000)
}

$('.butt').click(function(){
  if (running) {
    clearInterval(timer)
    running = false
  } else {
    running = true
    if (onBreak) {
      breakIt()
    } else {
      session()
    }
  }
});

$('#less').click(function() {
  if (!running && sessTime >= 1){
    sessTime--
    if (!onBreak) {
      time = sessTime
      $('#time').html(sessTime)
    }
    $('#sessionTime').html(sessTime)
  }
})

$('#more').click(function() {
  if (!running) {
    sessTime++
    console.log('on break?')
    console.log(onBreak)
    if (!onBreak) {
      time = sessTime
      $('#time').html(sessTime)
    }
    $('#sessionTime').html(sessTime)
  }
})

$('#lessB').click(function() {
  if (!running && breakTime >= 1){
    breakTime--
    console.log('on break?')
    console.log(onBreak)
    if (onBreak) {
      time = breakTime
      $('#time').html(breakTime)
    }
    $('#breakTime').html(breakTime)
  }
})

$('#moreB').click(function() {
  if (!running) {
    breakTime++
    if (onBreak) {
      time = breakTime
      $('#time').html(sessTime)
    }
    $('#breakTime').html(breakTime)
  }
})