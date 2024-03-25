# Web Development Project 4 - YuGiOh Card Viewer 

Submitted by: **James So**

This web app: **displays random YuGiOh cards to the user. Each card's image is displayed alongside its type, what set it's from, and its rarity. The user can also specify the cards they don't want to see by clicking on the card attribute that they wish to not see again. By clicking on a card's attribute, it is added to the user's banlist.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking a button creates a new API fetch request and displays at least three attributes from the returned JSON data**
- [x] **Only one item/API call is viewable at a time**
- [x] **API calls appear random to the user**
- [x] **At least one image is displayed per API call**
- [x] **Clicking on a displayed value for one attribute adds it to a displayed ban list**
- [x] **Attributes on the ban list prevent further images/API results with that attribute from being displayed**

The following **optional** features are implemented:

- [ ] Multiple types of attributes can be added to the ban list
- [ ] Users can see a stored history of their previously viewed items from their session

The following **additional** features are implemented:

* [x] Limit the ban list to 5 cards to prevent the API from taking too long to produce a card that does not have any of the properties in the user's ban list

## Video Walkthrough

Here's a walkthrough of implemented user stories:
    <a href="https://www.loom.com/share/2aecd31212004c19aa33882cfc6db71d">
      <img style="max-width:300px;" src="https://cdn.loom.com/sessions/thumbnails/2aecd31212004c19aa33882cfc6db71d-with-play.gif">
    </a>

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Loom
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The main challenge was being able to generate a card that didn't have any of the properties within the user's banlist. This was difficult since I needed to figure out a way to make it so that the API would keep being called as long as a property of a generated card was in the banlist. A specific issue that I encountered(and eventually resolved) was having an infinite cycle of API calls.

## License

    Copyright 2024 James So

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
