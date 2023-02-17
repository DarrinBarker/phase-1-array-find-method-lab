// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
  ]

  //let superbowlWin = record.find(record => record.result === 'W')

  //function superbowlWin(record){
    //return (record === "W")

    function superbowlWin(record){
      let winTrack = record.find(record => record.result === 'W')
        if (winTrack){
          return (winTrack.year)
        }
        else return undefined
        //return (winTrack.year)
      
    }