# Financial planner

### The Saving Goal Plan Simulation Screen

![Saving Goal Plan Mockup Desktop](https://github.com/OriginFinancial/frontend-take-home-assignment/blob/master/mockups/saving-goal-plan-desk.png)

This project refers to [Origin's Take home assignment](https://github.com/OriginFinancial/frontend-take-home-assignment/)

# Development Instructions

### Assets

You can find the layout mockups here on our Figma project:
[Layout mockups](https://www.figma.com/file/Axdg0WSJURcxp8Arq3gg9x/Take-Home-Assignment-v2)

Once you have opened the link you must sign up and log in so you can have access to the colors, fonts, margins and assets information.

#### Money input

The money input component should:

- Allow only numbers
- Display the value formatted as money (e.g 3500.45 should be 3,500.44)
- We recommend you name this input as "amount"

#### Date input

The date input component should:

- Allow only future months
- When clicking on the arrow buttons it should go up and down month by month
- On focused, the users should be able to move the months by typing the Left and Right arrow key on the keyboard
- We recommend you name this input as "reachDate"

#### Confirm button

You don't need to add any action on the confirmation button

# Usage

This project requires the latest LTS version of NodeJS and you may need to install the yarn as global dependency

```bash
npm install -g yarn
```

After you have cloned this repo and install the yarn, install the dependencies with:

```
yarn install
```

You can then start the application running:

```
yarn start
```

That's it. Just Access `http://localhost:3000` in your browser.

### Linting and Format

```
yarn lint
yarn format
```

### Testing

```
yarn test
```

# External libraries

- [Masked Currency Input](https://github.com/jsillitoe/react-currency-input)
- [Styled components](https://styled-components.com/)
