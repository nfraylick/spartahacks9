# quack-comments README

QUACK



## Inspiration
When trying to figure out a tough technical problem, it has been shown that talking it out will increase your understanding of the code and present a solution.

## What it does
Quack Comments is a Visual Studio Code Extention that allows users to screen record their environment and talk their problems out with a virtual rubber duck. After the user stops recording, an embedded link to the source file of the video so developers can review these and understand the code better than traditional comments. Another use case of Quack Comments is to practice explaining code during code interviews. Users can use Quack Comments to record themselves explaining their solution so they can play it back and hear how they sound. The audio is then parsed and comments are generated based on the user's explanation of the lines.

## How we built it
The Visual Studio Code extension is developed in Javascript. The screen recorder is written in C# and uses Matlab plugins to compress the video and audio files together. The audio parsing is done through a Cloudflare application to parse through the audio and create comments.

## Challenges we ran into
A lot. To start, the extension package was continuously getting configured incorrectly. The Matlab integration with C# was more challenging than we thought. We did not know how to use Cloudflare so it was a challenge to learn it.

## Accomplishments that we're proud of
We are proud of the user experience with this project. The idea is so fun and really useful for developers.

## What we learned
We learned how to make a natural language model and host it through Cloudflare. We learned how to make the duck animation and develop VSCode extensions.

## What's next for Quack Comments
We hope to publish the extension for anyone to use.
