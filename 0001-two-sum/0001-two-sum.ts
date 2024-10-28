function twoSum(nums: number[], target: number): number[] {
 let hashObj: { [key: number]: number } = {};
  for(let i = 0; i < nums.length; i++){
    let numComplement = target - nums[i];
    let valueInObj = hashObj[numComplement]
    if (valueInObj !== undefined){
        return [valueInObj, i]
    }

     hashObj[nums[i]] = i
  }  
  return []
};