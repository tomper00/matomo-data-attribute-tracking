This repo contains example code that you can run in your Matomo Tag Manager to get started with Data attribute tracking.


To make it work you need to create a custom html tag and add the custom code from custom-tracking-tag.html to it.

You  need to add 4 datalayer variables:
 data-event-category
 data-event-action
 data-event-name
 data-event-value

An example would be
<button
 data-event-category="Click"
 data-event-action="Button"
 data-event-name="Buy Milk"
 data-event-value="4"
  type="button">Click Me!</button>
  

We also support child elements where data-event-include is set, not that they have to be real child elements of the object where data-event-category is set 
  
<div data-event-category="Button"
        data-event-action="Click"
       data-event-name="Buy Milk"
       data-event-value="4">
            <a href="https://example.com" data-event-include>Click Me!</a>
            <i class="arrow" data-event-include>
</div>
You need to add a trigger on window loaded or DOM ready, that you use to fire your custom html Tag.
You need a trigger that picks up the custom event dataLayerTrackEvent
Finally you need a MatomoTag that will send the event info when dataLayerTrackEvent is triggered. 
This Tag will use the datalayer variables above.



