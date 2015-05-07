# Electras

A Web app to teach children ages 10 to 13 about simple digital circuits. This repository was originally at https://code.google.com/p/electras/

This project was initially created by Dr. Carl Burch. I worked on this project as an odyssey project at Hendrix College. More information can be found at http://www.cburch.com/may/

Play the game with the current version at http://www.electras.org/

# Contributors
 * Megan Childress (graphics designer)
 * Justin John (audio designer & developer)
 * Thierry Kimenyi (developer)
 * Sung Oh (developer)
 * Concorde Habineza (developer)
 * Brandon McNew (developer)
 * Jeanette Inema (developer)
 * Jeffrey Biles (developer)
 * Safari Sibomana (developer)
 * Pierre Urisanga (developer)

# The internal API as planned
Electra's API

# Circuit team

Circuit object

* getEvaluator() method returns an Evaluator object for executing the circuit on a sequence of items
* setState(state) method updates the circuit's state to match information found in the State object given as a parameter. The method has no useful return value.
* levelChanged(oldLevel, newLevel) method is called whenever the current level is changed, being provided both the previous level selected and the next level selected. If oldLevel is not null, the module should save the current circuit into oldLevel's savedCircuit property. It should update the tools to match newLevel's tools property, and it should set the currently viewed circuit to match newLevel's savedCircuit property — or if savedCircuit doesn't exist, it should create an empty circuit based on its sensors property.
* getElements() method returns a list of the Element objects represented within the circuit.

Evaluator class

* evaluate(item) is a method that takes a string representing an individual item (such as “R-”) and returns a State object.

State class
* accept is a Boolean value indicating whether the light is on (that is, whether the current item should be accepted by the machine).

Element class

* id is a unique integer assigned to the element.
* type is a string giving what type of element it is (examples: R, light, and).
* connects is an array of objects, each including a Boolean input field indicating whether it is an input to this element, a connectedTo field that is a string (the empty string if unconnected, “active” if the user is starting a wiring action from here, or the ID(s) of the connected elements — if multiple apply, they are separated by spaces) and x, y, and r to identify the center and radius of the circle for touching it.

# Levels/Judge team

Levels object

* advanceLevel() is called to notify that the user has requested to move to the next level (with no dialog).
* showSelector() is called to notify that the level selection dialog should be displayed.
* getCurrentLevel() returns a Level object representing the currently selected level.

Level class

* orderText is a string providing the text that should be shown the user describing the problem.
* hint is a string containing a hint that the user can choose to receive.
* sensors is a string indicating which sensors should be supplied in the circuit. Possible characters in the string include R, G, Y, C, o (ball), - (bar), and | (stick).
* link would normally be omitted. But if the initial circuit should include a wire connecting one of the sensors to an output, then this field would contain the one-character identifier for the connected sensor.
* tools is an array of strings such as and and not indicating what components should be available for insertion into the circuit.
* types is a string listing possible items that could appear in a test sequence, in a form such as “G- *o R*”, which would indicate that green bars, balls of any flavor, and any red shape should be eligible.
* script is an identifier string that the tutorial team provides and uses to map the level to a tutorial sequence.
* analyze is a method taking no parameters and returning an array of SequenceItem objects. type: Type of item levelSays: boolean giving what level expects regarding acceptance circuitSays: object return by circuit for this item, with accept field

 SequenceItem class
 
* type is a string such as “R-” identifying the type of item being shown.
* levelSays is a Boolean value indicating whether the item should be accepted according to the level's definition.
* circuitSays is a State object (which has an accept Boolean field indicating whether the circuit accepts this item).
 
# Factory Floor team

FactoryFloor object

* levelChanged(oldLevel, newLevel) returns nothing
* getLeverLocation() returns an object with x, y, width, height providing a bounding box (in page coordinates) around the element that indicates to perform a test.
* getAdvanceLocation() returns an object with x, y, width, height providing a bounding box (in page coordinates) around the element that indicates to advance to the next level.

# Tutorial team

* Tutorial object

# License

These apps are released under the GPLv3 license. You can browse the original code on which it is based at http://code.google.com/p/electras/.
