

var all_my_chocolates_events = function(){
  var elements = new Elements(elements_start)//get_elements();
  console.log(elements)

//  if (exists(empty_output(sensor('chocolate', elements))) &&
//      exists(empty_output(lightbulb(elements)))) {
  if (elements.sensor('chocolate').empty_output().exists() &&
      elements.lightbulb().empty_output().exists()){
    console.log("howdy from inside")
    var sensor_out = find_outgoing(elements.sensor('chocolate').empty_output(), 'empty')
//    highlightSection(sensor_out.x, sensor_out.y, sensor_out.width, sensor_out.height, true)
    highlightSection(sensor_out, true)
    createSpeechBubble(sensor_out, "We must tell the machine what to do.  Click on the sensor to start laying down wire.")
  }

  else if (exists(active_connection(sensor('chocolate', elements))) &&
              exists(empty_input(lightbulb(elements)))){
    var lightbulb_in = find_incoming(empty_output(lightbulb(elements))[0], 'empty');
    highlightSection(lightbulb_in, true);
    createSpeechBubble(lightbulb_in, "Good job!  Now connect it to the lightbulb!");
  }

  else if (exists(filled_output(sensor('chocolate', elements))) &&
              exists(filled_output(lightbulb(elements)))) {
    console.log("the user has connected the two");
    var lever = getLeverLocation()
    highlightSection(lever, false);
    createSpeechBubble(lever, "Click on the lever to test your machine!");

    //here we do something a little hacky... we set a click event on the lever,
    // which sets a timer (how long the checking animation takes to play) to a callback which highlights the chalkboard
//the following should be wrapped in some sort of click event, then a timeout event.  Take care of when there are things to test on, it is too difficult without feedback.
//    var advance_location = getAdvanceLocation();
//    highlightSection(advance_location)

  }
}

elements_start = [
  {
    id: 1,
    type: 'chocolate sensor',
    connections: [
      {
        type: 'outgoing',
        x: 100,
        y: 100,
        width: 50,
        height: 50,
        connected_to: ''
      }
    ]
  },
  {
    id: 2,
    type: 'lightbulb',
    connections: [
      {
        type: 'incoming',
        x: 500,
        y: 100,
        width: 10,
        height: 10,
        connected_to: ''
      }
    ]
  }
]

elements_first_selected = [
  {
    id: 1,
    type: 'chocolate sensor',
    connections: [
      {
        type: 'outgoing',
        x: 100,
        y: 100,
        width: 50,
        height: 50,
        connected_to: 'active'
      }
    ]
  },
  {
    id: 2,
    type: 'lightbulb',
    connections: [
      {
        type: 'incoming',
        x: 500,
        y: 100,
        width: 10,
        height: 10,
        connected_to: ''
      }
    ]
  }
]

elements_finished = [
  {
    id: 1,
    type: 'chocolate sensor',
    connections: [
      {
        type: 'outgoing',
        x: 100,
        y: 100,
        width: 50,
        height: 50,
        connected_to: '2'
      }
    ]
  },
  {
    id: 2,
    type: 'lightbulb',
    connections: [
      {
        type: 'incoming',
        x: 500,
        y: 100,
        width: 10,
        height: 10,
        connected_to: '1'
      }
    ]
  }
]

