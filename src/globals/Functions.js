


export const mode = (arr) =>{
    return arr.sort((a,b) =>
          arr.filter(v => v===a).length
        - arr.filter(v => v===b).length
    ).pop();
  }

export const deleteLeaveJustOne = (array) => {
    return [{...array[array.length - 1]}];
    
}