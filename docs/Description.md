HADRON’s AI API processes images and categorizes them, sending back a list of ‘known’ item tags that the AI has learned. 

## When you test an image against the AI, you’ll see:

![HADRON.cloud API at work](http://storage.googleapis.com/apimarket-contest-2018-07-1-data/BountyDesc.jpg "HADRON.cloud API at work")

Each time you call the API, it returns a JSON object listing the things it thinks that it found in the image (with a confidence score for each item).

The number above next to each item (e.g. 0.259232, "velvet") is how likely the item appears in the image (the model says that it has 25.9% confidence that there is velvet in this image). This model is trained to look for ordinary objects so it returns some pretty funny things when looking at deep space! It’s up to the astronomers to transfer this learning into actionable insights (ie. 19% velvet + 13% apple = red star!)

---

## How To Test the API

Follow the directions in the Use API section (from the button up top) to write a simple nodejs application.

---

