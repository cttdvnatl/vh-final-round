//Each for loop removes an item from array of choices that is not the choice to be at the bottom,
//then adds the choice to be at the bottom at the end of the new array. 
//This code also preserves the order of the other three choices.
const SetChoiceAtBottom = (arrOfChoices, choiceToBeAtBottom) => {

    let newArr = [,,];

    for (let i = 0;i < arrOfChoices.length;i++) {
        if (arrOfChoices[i] !== choiceToBeAtBottom) {
            newArr[0] = arrOfChoices[i];
            arrOfChoices.splice(i,1)
            break;
        }
    }

    for (let i = 0;i < arrOfChoices.length;i++) {
        if (arrOfChoices[i] !== choiceToBeAtBottom) {
            newArr[1] = arrOfChoices[i];
            arrOfChoices.splice(i,1)
            break;
        }
    }

    for (let i = 0;i < arrOfChoices.length;i++) {
        if (arrOfChoices[i] !== choiceToBeAtBottom) {
            newArr[2] = arrOfChoices[i];
            arrOfChoices.splice(i,1)
            break;
        }
    }

    for (let i = 0;i < arrOfChoices.length;i++) {
        if (arrOfChoices[i] === choiceToBeAtBottom) {
            newArr[3] = arrOfChoices[i];
            arrOfChoices.splice(i,1)
            break;
        }
    }

    return newArr;
}

export default SetChoiceAtBottom