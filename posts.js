// ADD A NEW TIP: copy one block below, paste it at the top of POSTS, change the text.
// videoId = the part after "v=" in a YouTube link (youtube.com/watch?v=THIS_PART). Leave '' until the video is up.
// For YouTube Shorts add: vertical: true
const SITE = { youtube: '' /* e.g. 'https://www.youtube.com/@CAD-guru' */ };
const CATS = { 'Shortcuts':'#19c5ff', 'Layers':'#ff8a1f', 'Drawing cleanup':'#5be37d', '2D editing':'#ff5fa2' };
const POSTS = [
 { slug:'matchprop', date:'2026-10-10', category:'Shortcuts', videoId:'', commands:['MATCHPROP','MA'],
   title:'Copy layer, color and linetype to other objects',
   summary:'Make one object look like another without opening the Properties palette.',
   steps:['Type MA and press Enter.','Click the object whose look you want to copy.','Click each object you want to change, then press Enter.','Type S before picking the targets to choose which properties get copied.'],
   tip:'Match Properties also copies layer, so check the result if you only wanted the color.' },
 { slug:'layiso', date:'2026-10-07', category:'Layers', videoId:'', commands:['LAYISO','LAYUNISO'],
   title:'Isolate one layer, then bring everything back',
   summary:'Focus on a single layer in two clicks and restore the drawing just as fast.',
   steps:['Type LAYISO and press Enter.','Click an object on the layer you want to work on.','Other layers are turned off, or locked and faded, depending on your settings.','Type LAYUNISO to restore every layer.'],
   tip:'Type S at the LAYISO prompt to switch between off and lock-and-fade.' },
 { slug:'fillet-zero', date:'2026-10-04', category:'Shortcuts', videoId:'', commands:['FILLET','F'],
   title:'Close a corner in one click with a zero-radius fillet',
   summary:'Join two lines into a sharp corner without setting the radius to 0 first.',
   steps:['Type F and press Enter.','Click the first line.','Hold Shift and click the second line.','The lines extend or trim to meet at a sharp corner.'],
   tip:'Works on lines that cross or fall short of each other.' },
 { slug:'qselect', date:'2026-10-01', category:'2D editing', videoId:'', commands:['QSELECT'],
   title:'Select every object that shares a property',
   summary:'Pick all circles, all objects on one layer or all of one color in one step.',
   steps:['Type QSELECT and press Enter.','Set Apply to: Entire drawing.','Choose the Object type, Property, Operator and Value.','Click OK. Everything that matches is now selected, so edit or delete it.'],
   tip:'Choose "Exclude from new selection set" to select everything except the match.' },
 { slug:'overkill', date:'2026-09-28', category:'Drawing cleanup', videoId:'', commands:['OVERKILL'],
   title:'Delete duplicate and overlapping lines in one command',
   summary:'Clean a drawing before plotting or sharing, and keep the file smaller.',
   steps:['Type OVERKILL and press Enter.','Press Ctrl+A to select all objects, then press Enter.','Keep the default settings and click OK.','AutoCAD removes duplicates and overlaps and reports how many it deleted.'],
   tip:'Run it on drawings you receive from other people.' }
];
