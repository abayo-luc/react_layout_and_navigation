# Layout And Navigation

## Solution 1 (defining content header component on router config level)
- [x] It is ideal the most simple solution, but it would be difficult to change the content header down the navigation tree. Let say on the nest level 2, we ant to dynamically change the header which was rendered during the configuration of route level one. 
### Solution 2 (using context API to manage the content header) `current implemented in this project`
- [x] We are able to change the content title dynamically no matter where ware in the app

## Solution 3 (using outlets to render content header)
- [x] Was kind confusing, but I tried to use outlet (one outlet, not multiple) and the issue was similar with the second option, dynamically changing the component content at any level of the app was not possible.