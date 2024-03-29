This repo contains example code to get started with Data attribute tracking for Matomo.

Data attribute tracking is a technich that allows you to just set meta data in your code and from that automatically send event tracking to Matomo without having to add triggers, tags and variables in the TagManager. 

This is good if you want to enforce more control of your tracking within you code base.

It is also very clear where you have tracking in place, when you develop new features or update old features on your site.

Read more about Matomo tracking here:
https://developer.matomo.org/guides/tracking-javascript-guide


**I have 2 example scripts to help you get started:**
### attribute-tracking-paq.js - Send data directly to Matomo
- Simple but be careful if you already have the TagManager in place.


### attribute-tracking-mtm.js - Send data to Matomo Tag Manager 
- this adds an extra layer of separation, wich is good if you want to manage exeptions in the TagManager or just inherit things you already set up such as custom dimensions etc. 

# HTML Examples

## A simple button example

```
<button
 data-event-category="Click"
 data-event-action="Button"
 data-event-name="Buy Milk"
 data-event-value="4"
  type="button">Click Me!</button>
```

  
When a user clicks the button we will send an event to Matomo like this:



## Support clicks in child emelemts
A common tracking problem is that we have nested elements and that events will only fire on one of the elements. 
Adding data-event-include to a child will catch clicks and read event data from the closest parent containing data-event-category info

```
<div data-event-category="Button"
     data-event-action="Click"
     data-event-name="Buy Milk"
     data-event-value="4">
            <a href="https://example.com" data-event-include>Click Me!</a>
            <i class="arrow" data-event-include>
</div>
```



# Setting up the TagManager 
*Note this is only needed if you use the script attribute-tracking-mtm.js

You will need to add the following in the TagManager to make it work:
A Trigger named: customEvent 
A variable (type datalayer) named: eventCategory
Variable (type datalayer) named: eventAction
Variable (type datalayer) named: eventName
Variable (type datalayer) named: eventValue

Finally you need to set up a **Matomo Event Tag** where you use the triggers and variables above that sends an event to Matomo.



