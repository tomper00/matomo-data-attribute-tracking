This repo contains example code that you can run in your Matomo Tag Manager to get started with Data attribute tracking.


To make it work you need to create a custom html tag and add the custom code from custom-tracking-tag.html to it.

You  need to add 4 datalayer variables:
 data-eventcategory
 data-eventaction
 data-eventname
 data-eventvalue

You need to add a trigger on window loaded or DOM ready, that you use to fire your custom html Tag.
You need a trigger that picks up the custom event dataLayerTrackEvent
Finally you need a MatomoTag that will send the event info when dataLayerTrackEvent is triggered. 
This Tag will use the datalayer variables above.



