## The Golden Rule: 

🦸 🦸‍♂️ `Stop starting and start finishing.` 🏁

If you work on more than one feature at a time, you are guaranteed to multiply your bugs and your anxiety.

## Making a plan

1) **Make a drawing of your app. Simple "wireframes"**
From top to bottom: "SimSpringfield2000", Three pictures in a row, 3 selections in a row underneath them, Slogan and input box, the slogans generated underneath all of them.
1) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
h1 for simpspringfirled
h3 for choose your landmarks
a section for pictures with divs for each
a section for selections with divs for each
h4 for "wow what a nice springfield, what are it's citizens saying? Let's listen"
section for slogan with divs for textinput and button
section with p for generated sayings

1) **For each HTML element ask: Why do I need this? (i.e., "we need div to display the results in")** 
1) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How" (i.e., `resultsEl.textContent = newResults`)**
we'll grab all possible elements. Every element will be grabbed and defined on our app.js. we're going to use a simple naming convention to make image sourcing easier. also i think if we can create folders for the separate selection images it might be easier than spell checking everything lol. 
1) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
selecting a picture, say of a tire fire, will replace whatever is in the url with the selections value, and update the view to render the image.

adding a slogan will 1. erase input box 2. create an element in the DOM and fill it with the value of the input.

1) **Think about how to validate each of your features according to a Definition of Done. (Hint: console.log usually helps here.)**
consolelogging eventlisteners for selections and inputs/buttons
1) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**

Additional considerations:
- Ask: which of your HTML elements need to be hard coded, and which need to be dynamically generated?
- Consider your data model. 
  - What kinds of objects (i.e., Dogs, Friends, Todos, etc) will you need? 
  - What are the key/value pairs? 
  - What arrays might you need? 
  - What needs to live in a persistence layer?
- Is there some state we need to initialize?
- Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
