### Getting Started
This is a Timline Chart built based on React.
App: https://react-timeline-chart-by-yh.web.app/

Checkout this repo, install dependencies, then start the gulp process with the following:

```
> npm install
> npm run dev
```

This timeline chart supports the folowing features.
1. Add Event
User can click the anypwehre without event to create a new event.
The default start date is the earlier start date of all events
The default end date is the latest date of all events.
If no event is added in timeline, the start date and end date will be current date.

3. Edit Event
User can click the event to edit the name, start date or end date of the event.
The name, start date, and the end date will be shownn in the input, 
so user can easily modify the event.

4. Delete Event
User can click the event and then delete the event.

5. Search Event
User can search event by keyword


1. Timeline layout should arrange events in a compact space-efficient way
![image](https://github.com/johnnyhsu1106/react-timeline/assets/18588513/d783e8ca-6ba8-4f50-b503-536d67f385d7)


2. Click the event and the event can be edited or deleted
![image](https://github.com/johnnyhsu1106/react-timeline/assets/18588513/ae2d94f6-30a5-44e0-9fda-bc48d689deed)

   
3. Click the page and the new event can be created and added.
![image](https://github.com/johnnyhsu1106/react-timeline/assets/18588513/11feeddc-50ea-45a6-9d7f-0cf3d6b28d81)



4. The event can be searched and re-ranged.
![image](https://github.com/johnnyhsu1106/react-timeline/assets/18588513/c0b59698-6d21-4646-9d8a-8a7e8d8dbe0a)
![image](https://github.com/johnnyhsu1106/react-timeline/assets/18588513/96de512a-6ba0-4a34-8dbe-91a3accf3300)




* How long you spent on the assignment.
  6-8 hours

* What you like about your implementation.
  The modal shows the name, start date, and end date of the existing event in the input.

* What you would change if you were going to do it again.
  First, I will use react custom hook and context api to create TimelineProvider and useTimelineContext.
  All the timeline data and logic can be wrapped in TimelineProvider and psss these to its Timeline Component, its children, grandchildren, etc.

  Then,I wil build a Modal as a wrapper which can be use for creating/editing/deleting timeline.
  This modal can be used on other components, such as a date filter to filter the range of the event by choosing the start date and end date.
  Moreover, this modal can be used for showing the warning message when the user tried to delete the event.

  Additionally, I will add dragging and dropping to change the start date and/or end date for an event. 
  Meanwhile, dragging and dropping can resize the event width to change the start date or end date instantly.

  Therefore, about CSS, I will choose css-module if the scope of this project is getting bigger
  Add media query to make this page become responsive.

  Finally, I will install PropTypes and ensures that the passed value is of the correct datatype.

* How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that.
  Since timeline layout should arrange events in a compact space-efficient way, 
  my idea is to divide events into a minimum number of groups. In the meantime, no event in a group is overlapped. 
  Then I make this timeline as intuitive as possible.

* How you would test this if you had more time.
  I will install jtest and write the unit test for this and test the accessibility.
