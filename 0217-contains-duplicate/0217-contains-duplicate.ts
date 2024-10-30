function containsDuplicate(nums: number[]): boolean {
  let hashObj: { [key: number]: number } = {};  
  for(let i = 0; i < nums.length; i++){
    let valueInObj = hashObj[nums[i]]
    if(valueInObj !== undefined){
        return true
    }
     hashObj[nums[i]] = i
  }
  return false
};
