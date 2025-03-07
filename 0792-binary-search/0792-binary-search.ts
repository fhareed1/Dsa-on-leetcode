function search(nums: number[], target: number): number {
    const n = nums.length
    for (let i = 0; i < n; i++){
        if (nums[i] === target){
            return i
        }
    }
        return -1
};